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
      <div class="w-full flex flex-col justify-center items-center text-center p-4">
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
