<script setup>

import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com'
import { toast } from 'vue3-toastify'

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
const executeRecaptcha = ref(null)
const namePattern = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,}$/

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

  } catch (err) {
    console.error('Error al configurar reCAPTCHA:', err)
    errorMessage.value = 'Error en la verificación de seguridad'
  }
})

// Validación del formulario
const isFormValid = () => {
  return (
    name.value.trim().length >= 2 &&
    namePattern.test(name.value.trim()) &&
    email.value &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
    message.value &&
    message.value.trim().length >= 10
  )
}


// Enviar formulario
const sendEmail = async () => {
  if (!isFormValid()) {
    if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,}$/.test(name.value.trim())) {
      toast.error('El nombre debe tener al menos 2 letras.')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      toast.error('Ingresá un correo electrónico válido.')
    } else if (!message.value || message.value.trim().length < 10) {
      toast.error('El mensaje debe tener al menos 10 caracteres.')
    }
    return
  }

  loading.value = true

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

    toast.success('Mensaje enviado correctamente')
    name.value = ''
    email.value = ''
    message.value = ''
    recaptchaToken.value = null

  } catch (err) {
    console.error('Error completo:', err)
    toast.error(err.message || 'Error al procesar tu solicitud')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="content_contact">
    <h1>Formulario de contacto</h1>
    <div class="container_contant">
      
      <form @submit.prevent="sendEmail" class="form">
      <label for="">Nombre:</label>
      <input type="text" v-model="name" placeholder="Ingresá tu nombre">
      <span v-if="name && name.trim().length < 2" class="error-text">Ingresá tu nombre</span>

      <label for="">Correo electrónico:</label>
      <input type="email" v-model="email" placeholder="Ingresá tú correo electrónico" required>
      <span v-if="email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)" class="error-text">Correo inválido</span>

      <label for="">Mensaje:</label>
      <textarea v-model="message" placeholder="Ingresá tú mensaje..." required></textarea>
      <span v-if="message && message.trim().length < 10" class="error-text">Debe tener al menos 10 caracteres</span>
      <button type="submit" :disabled="!isFormValid() || loading" :class="{ 'disabled': !isFormValid() || loading }">
        {{ loading ? 'Enviando...' : 'Enviar' }}
      </button>

      <p v-if="success" class="success-message">Mensaje enviado correctamente.</p>
      <p v-if="error" class="error-message">{{ errorMessage }}</p>
    </form>
    </div>
  </div>
</template>

<style>
.content_contact {
  width: 100%;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  padding: 4rem 1rem;
}
.content_contact  h1 {
  width:310px;
  margin-top:2rem;
  text-align: center;
  font-size: 1.9rem;
  font-weight: bold;
  line-height: 1.3;
}
.container_contant{
  width: 90%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
  border:1px solid #ddd;
  border-radius:10px;
  padding: 4rem 1rem;
}

input,
textarea {
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

.error-text {
  color: red;
  font-size: 0.85rem;
}
@media (min-width: 768px) and (max-width: 1023px) {
.content_contact  h1{
  width:500px;
    font-size: 2.5rem;
  
  }
  .container_contant{
    width: 90%;
    height:600px
  }
  .form {
    max-width:450px
  }
}
@media(min-width:1024px) {
  .content_contact  h1{
    width:600px;
    font-size: 2.5rem;
  }
}
</style>