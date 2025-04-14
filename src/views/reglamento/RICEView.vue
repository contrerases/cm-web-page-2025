<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <!-- Título con imagen -->
    <TitleImage
      title="Reglamento Interno de Convivencia Escolar (RICE)"
  image="/assets/images/headers/header_1.webp"
      
    />

    <!-- Breadcrumb -->
    <div class="container mx-auto px-6 max-w-6xl mb-6">
      <Breadcrumbs :breadcrumbs="breadcrumbsRICE" />
    </div>

    <!-- Contenido principal -->
    <div class="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-8">
      <!-- Información -->
      <div class="flex-1">
        <div class=" text-justify space-y-12">
          <!-- Introducción -->
          <section id="introduccion-rice">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">¿Qué es el RICE?</h2>
            <p>
              El Reglamento Interno de Convivencia Escolar (RICE) establece las normas fundamentales para promover 
              una convivencia armónica, inclusiva y respetuosa dentro del Colegio Mistral. Su objetivo es garantizar 
              un ambiente escolar seguro, inclusivo y enriquecedor.
            </p>
          </section>

          <!-- Objetivos Clave -->
          <section id="objetivos-rice" class="mt-12">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Objetivos del RICE</h2>
            <ul class="list-disc pl-5 space-y-4">
              <li>Fomentar el respeto mutuo entre todos los integrantes de la comunidad educativa.</li>
              <li>Proteger los derechos y responsabilidades de estudiantes, docentes y apoderados.</li>
              <li>Garantizar un entorno escolar seguro, inclusivo y equitativo.</li>
              <li>Promover la resolución pacífica de conflictos mediante el diálogo y la mediación.</li>
            </ul>
          </section>

          <!-- Opciones de Acceso -->
          <section id="opciones-rice" class="mt-12 text-center">
  
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
              <button
                @click="downloadPDF('Reglamento_Interno_2025.pdf')"
                class="bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary-focus transition cursor-pointer"
              >
                Descargar PDF
              </button>
            </div>
          </section>
        </div>
      </div>

      <!-- Navegación Interna -->
      <aside class="w-full lg:w-64 bg-card p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
        <h2 class="font-bold mb-4 uppercase">En esta sección:</h2>
        <ul class="space-y-3">
          <li>
            <a href="#introduccion-rice" class="text-primary hover:underline font-semibold">¿Qué es el RICE?</a>
          </li>
          <li>
            <a href="#objetivos-rice" class="text-primary hover:underline font-semibold">Objetivos</a>
          </li>
          <li>
            <a href="#opciones-rice" class="text-primary hover:underline font-semibold">Descargar RICE</a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleImage from '@/components/TitleImage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

// Breadcrumbs para navegación
const breadcrumbsRICE = [
  { label: 'Inicio', link: '/', underline: true },
  { label: 'Reglamentos', link: '', underline: false },
  { label: 'Reglamento Interno de Convivencia Escolar', link: '', underline: false },
];

function downloadPDF(fileName: string) {
  const pdfUrl = `/assets/docs/${fileName}`;
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = fileName;
  link.click();
}
</script>