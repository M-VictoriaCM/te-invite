<script setup>
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com'
import { VueReCaptcha } from 'vue-recaptcha-v3'

// Estados reactivos
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref(false)
const errorMessage = ref('')
const recaptchaToken = ref(null)

// Inicializar reCAPTCHA
const recaptcha = ref(null)
const executeRecaptcha = ref(null)

onMounted(async () => {
  try {
    // Cargar script de reCAPTCHA
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
    script.async = true
    script.defer = true

    // Esperar a que el script cargue
    const scriptLoadPromise = new Promise((resolve, reject) => {
      script.onload = resolve
      script.onerror = reject
    })
    document.head.appendChild(script)
    await scriptLoadPromise

    // Ahora grecaptcha debería estar disponible
    if (!window.grecaptcha) {
      throw new Error('grecaptcha no está disponible en window')
    }

  await new Promise((resolve, reject) => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve())
      } else {
        reject(new Error('reCAPTCHA no está definido aún'))
      }
    })

    executeRecaptcha.value = () => {
      return new Promise((resolve) => {
        window.grecaptcha.execute(recaptchaSiteKey, { action: 'contact_form' })
          .then((token) => {
            recaptchaToken.value = token
            resolve(token)
          })
      })
    }

    console.log('reCAPTCHA configurado correctamente')
  } catch (err) {
    console.error('Error al configurar reCAPTCHA:', err)
    errorMessage.value = 'Error en la verificación de seguridad'
  }
})

// Validación del formulario
const isFormValid = () => {
  return (
    name.value.trim().length > 0 &&
    email.value &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
    message.value &&
    message.value.trim().length >= 10
  )
}


// Enviar formulario
const sendEmail = async () => {
  if (!isFormValid()) return
  
  loading.value = true
  error.value = false
  errorMessage.value = ''

  try {
    // Obtener token reCAPTCHA
    const token = await executeRecaptcha.value()
    
    // Configurar parámetros
    const templateParams = {
      name: name.value || 'Anónimo',
      email: email.value,
      message: message.value,
      subject: 'Nuevo mensaje del formulario',
      time: new Date().toLocaleString(),
      'g-recaptcha-response': token
    }
  
    // Enviar email
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_apumet6',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_tkg3ze9',
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'yOpIpDanPO2EtdWXP'
    )

    if (response.status !== 200) {
      throw new Error('Error al enviar el mensaje')
    }

    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
    recaptchaToken.value = null

  } catch (err) {
    console.error('Error completo:', err)
    error.value = true
    errorMessage.value = err.message || 'Error al procesar tu solicitud'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="sendEmail" class="form">
    <input type="text" v-model="name" placeholder="Nombre">
    <input type="email" v-model="email" placeholder="Correo electrónico" required>
    <textarea v-model="message" placeholder="Tu mensaje..." required></textarea>

    <button 
      type="submit" 
      :disabled="!isFormValid() || loading"
      :class="{ 'disabled': !isFormValid() || loading }"
    >
      {{ loading ? 'Enviando...' : 'Enviar' }}
    </button>

    <p v-if="success" class="success-message">Mensaje enviado correctamente.</p>
    <p v-if="error" class="error-message">{{ errorMessage }}</p>
  </form>
</template>

<style>
/* Tus estilos existentes */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
input, textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 0.75rem;
  background: var(--color_primary);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}
button:hover:not(:disabled) {
  opacity: 0.9;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.success-message {
  color: green;
  margin-top: 1rem;
}
.error-message {
  color: red;
  margin-top: 1rem;
}
</style>