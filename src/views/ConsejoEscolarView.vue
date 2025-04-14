<template>
    <section class="bg-background text-foreground py-12 mt-16">
      <!-- Título con imagen -->
      <TitleImage
        title="Consejo Escolar"
        image="assets/images/headers/header_5.webp"
        
      />
  
      <!-- Breadcrumb -->
      <div class="container mx-auto px-6 max-w-6xl mb-6">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
  
      <!-- Contenido principal -->
      <div class="container mx-auto max-w-6xl px-6">
        <!-- Lista de actas paginadas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConsejoCard
            v-for="acta in currentActas"
            :key="acta.id"
            :title="acta.title"
            :description="acta.description"
            :date="acta.date"
            :pdfUrl="acta.pdfUrl"
          />
        </div>
  
        <!-- Paginación -->
        <div class="flex justify-center mt-8 space-x-4">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="bg-secondary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-secondary-focus transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Anterior
          </button>
          <span class="text-lg font-semibold">{{ currentPage }} / {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="bg-secondary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-secondary-focus transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import TitleImage from '@/components/TitleImage.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import ConsejoCard from '@/components/ConsejoCard.vue';
  
  // Breadcrumbs para navegación
  const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Consejo Escolar', link: '', underline: false },
  ];
  
  // Datos de las actas (ejemplo)
  const actas = ref([
    {
      id: 1,
      title: 'Acta N°2',
      description: 'Siendo las 16.00 h. del 17 de junio 2024 se reúnen los abajo citados en la sesión.',
      date: '17/06/2024',
      pdfUrl: 'assets/docs/actas/Acta_2.pdf',
    },
    {
      id: 2,
      title: 'Primera reunión marzo',
      description: 'Siendo la: 16:00 h del día 27 de marzo 2024 se reúnen los abajo citados en la sesión',
      date: '27/03/2024',
      pdfUrl: 'assets/docs/actas/Primera_reunion_marzo.pdf',
    },
    {
      id:3,
      title: 'Acta de Constitución',
      description: 'En la ciudad de Las Cabras con fecha 27 de marzo 2024 y de conformidad con lo dispuesto ...',
      date: '27/03/2024',
      pdfUrl: 'assets/docs/actas/Acta_de_constitucion.pdf',

    },

    {
      id: 4,
      title: 'Reglamento de Consejo Escolar',
      description: 'Reglamento de Consejo Escolar Colegio Mistral',
      date: '06/2024',
      pdfUrl: 'assets/docs/actas/Reglamento_de_Consejo_Escolar.pdf',
    },

    {
      id: 5,
      title: 'Reunión Extraordinaria',
      description: 'REUNIÓN EXTRAORDINARIA CONSEJO ESCOLAR',
      date: '06/2024',
      pdfUrl: 'assets/docs/actas/Reunion_extraordinaria.pdf',
    }
 
  ]);
  
  // Paginación
  const currentPage = ref(1);
  const itemsPerPage = 6; // Número de actas por página
  
  const totalPages = computed(() => Math.ceil(actas.value.length / itemsPerPage));
  
  const currentActas = computed(() =>
    actas.value.slice(
      (currentPage.value - 1) * itemsPerPage,
      currentPage.value * itemsPerPage
    )
  );
  
  // Métodos para cambiar de página
  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }
  
  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  }
  </script>