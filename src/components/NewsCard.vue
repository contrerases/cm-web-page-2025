<template>
  <div class="max-w-sm bg-card rounded-xl shadow-xl overflow-hidden border border-border flex flex-col">
    <!-- Imagen -->
    <img
      :src="noticia.image"
      :alt="noticia.title"
      class="w-full h-48 object-cover"
    />

  
    <div class="p-4 flex flex-col flex-grow">
      <!-- Título y Fecha -->
      <div class="mb-2">
        <h3 class="text-xl font-bold text-primary truncate">
          {{ props.noticia.title }}
        </h3>
        <p class="text-sm text-secondary">{{ noticia.date }}</p>
      </div>

      <!-- Descripción -->
      <p class="text-sm text-foreground mb-4 line-clamp-3">
        {{ props.noticia.description }}
      </p>

      <!-- Botón Leer Más -->
      <button
        @click="goToDetail"
        class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-secondary hover:text-success-foreground transition cursor-pointer mt-auto w-1/2"
      >
        Leer más
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type Noticia from '@/interfaces/noticias_model.ts';

const props = defineProps<{ noticia: Noticia}>();

const router = useRouter();

function goToDetail() {
  router.push(`/noticias/${props.noticia.slug}`);
}



</script>