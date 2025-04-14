<template>
  <div class="bg-card shadow-md rounded-lg p-6 flex flex-col h-full">
    <h2 class="text-2xl font-bold text-primary">{{ title }}</h2>
    <p class="text-secondary-foreground">{{ description }}</p>
    <p class="text-sm text-muted mb-4">Fecha: {{ date }}</p>
    
    <!-- Botón Descargar PDF -->
    <div class="text-center mt-auto">
      <button
        @click="downloadPDF"
        class="bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary-focus transition cursor-pointer"
      >
        Descargar PDF
      </button>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  // Props para el componente
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    pdfUrl: {
      type: String,
      required: true,
    },
  });
  
  // Método para descargar el archivo PDF
  function downloadPDF() {
    const link = document.createElement('a');
    link.href = props.pdfUrl;
    link.download = `${props.title}.pdf`;
    link.click();
  }
  </script>
