<script setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';
import { useReCaptcha } from 'vue-recaptcha-v3';

const name = ref('');
const email = ref('');
const message = ref('');

const { executeRecaptcha } = useReCaptcha();

const sendEmail = async () => {
  const token = await executeRecaptcha('contact_form');

  const templateParams = {
    from_name: name.value,
    reply_to: email.value,
    message: message.value,
    'g-recaptcha-response': token,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    console.log('PUBLIC KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    alert('Mensaje enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    alert('Hubo un error al enviar el mensaje');
  }
};
</script>
<template>
     <form @submit.prevent="sendEmail" class="form">
    <input type="text" v-model="name" placeholder="Nombre" required />
    <input type="email" v-model="email" placeholder="Correo electrónico" required />
    <textarea v-model="message" placeholder="Tu mensaje..." required></textarea>

    <button type="submit" :disabled="loading">
      {{ loading ? 'Enviando...' : 'Enviar' }}
    </button>

    <p v-if="success" style="color: green;">Mensaje enviado correctamente.</p>
    <p v-if="error" style="color: red;">Ocurrió un error. Intentá más tarde.</p>
  </form>
</template>
<style>
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
}
button {
  padding: 0.5rem;
  background: var(--color_primary);
  border: none;
  color: white;
  cursor: pointer;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>