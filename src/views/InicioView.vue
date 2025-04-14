<template>
  <div class="min-h-screen bg-cover bg-center text-foreground flex flex-col md:flex-row relative mt-28 md:mt-20">
    <div class="absolute inset-0 bg-cover bg-center">
      <img
        src="/assets/images/inicio.webp"
        alt="Fondo"
        class="w-full h-screen object-cover blur-xs"
      />
    </div>
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="container mx-auto my-auto z-10 flex flex-col md:flex-row ">
      <!-- Columna 1 -->
      <div class="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-4">
        <img
          src="/icono.webp"
          alt="Logotipo"
          class="mb-4 w-64 h-auto rounded-full shadow-2xl"
        />
        <h1 class="text-2xl md:text-4xl font-bold text-primary-foreground uppercase mb-2">
          ¡Bienvenido a la comunidad Colegio Mistral!
        </h1>
        <p class="text-lg md:text-xl text-primary-foreground mt-2">
          Formando personas autónomas, creativas y con sensibilidad social.
        </p>
        <button
          class="px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-80 cursor-pointer shadow-2xl mt-4 md:mt-8 hover:scale-110 transition-all duration-300"
          @click="goTo"
        >
          Quiénes somos
        </button>
      </div>

      <!-- Columna 2 -->
      <div
        class="md:w-1/2 bg-card shadow-2xl rounded-xl  m-4 w-auto md:m-8 px-4 md:px-8 py-6 flex flex-col justify-center"
      >
        <h1
          class="text-lg text-left font-bold bg-primary text-primary-foreground my-2 px-2 rounded-lg w-50"
        >
          {{ noticia.title }}
        </h1>
        <video class="w-full h-auto rounded-lg shadow-3xl" controls loop>
          <source src="/assets/videos/cuenta-publica.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <p class="text-sm text-left py-2 text-secondary">
          {{ noticia.date }}
        </p>
        <p class="text-xl md:text-2xl text-left pb-4 font-bold text-foreground">
          {{ noticia.description }}
        </p>

        <div class="border-b-2 border-border mb-4"></div>

        <!-- Botón Ir a la Noticia -->
        <div class="w-full flex justify-end">
          <button
            class="text-primary font-semibold text-lg flex items-center gap-4 hover:scale-110 transition-all duration-300 cursor-pointer"
            @click="goToDetail"
          >
            Ir a la noticia
            <svg
              class="h-6 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

import type Noticia from "@/interfaces/noticias_model";

const noticia: Noticia = {
  id: "1",
  image: "/assets/images/noticias/cuenta-publica-2024.webp",
  title: "Cuenta Pública 2024",
  date: "31 de Marzo de 2025",
  description: "Colegio Mistral presenta su cuenta pública 2024",
  slug: "cuenta-publica-2024",
  content:
    "El colegio presenta su cuenta pública 2024, donde se detallan los logros y avances del año anterior. Este evento es una oportunidad para que la comunidad educativa conozca el estado de la institución y los planes futuros.",
  video: "/assets/videos/Cuenta_Pública.mp4",
};

const goTo = () => {
  router.push({ name: "PEI" });
};

function goToDetail() {
  router.push(`/noticias/${noticia.slug}`);
}
</script>
