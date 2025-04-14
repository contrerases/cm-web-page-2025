<template>
    <div class="flex flex-col items-center bg-background p-8 rounded-lg shadow-lg overflow-hidden">
      <!-- Foto del directivo -->
      <img
        :src="directiva.image"
        :alt="`Foto de ${directiva.name}`"
        class="w-64 h-64 rounded-full object-cover mb-4 shadow-lg"
      />
      <!-- Nombre del directivo -->
      <h2 class="text-3xl font-semibold text-primary mb-2 text-center">
        {{ directiva.name }}
      </h2>
      <!-- Cargo del directivo -->
      <p class="text-2xl text-secondary text-center">
        {{ directiva.position }}
      </p>
    </div>
  </template>
  
  <script lang="ts" setup>

  interface DirectivaCardProps {
    image: string;
    name: string;
    position: string;
  }

  defineProps({
    directiva: {
      type: Object as () => DirectivaCardProps,
      required: true,
    },
  });

  </script>