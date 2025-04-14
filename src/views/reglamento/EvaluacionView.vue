<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <TitleImage
      title="Reglamento de Evaluación"
       image="/assets/images/headers/header_1.webp"
    />

    <div class="container mx-auto px-6 max-w-6xl mb-6">
      <Breadcrumbs :breadcrumbs="breadcrumbsEvaluacion" />
    </div>

    <div class="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-8">
      <div class="flex-1">
        <div class=" text-justify space-y-12">
          <!-- Introducción -->
          <section id="introduccion-evaluacion">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Propósito del Reglamento</h2>
            <p>
              El Reglamento de Evaluación define los lineamientos, criterios y procedimientos que guían la evaluación 
              en el Colegio Mistral, promoviendo un aprendizaje efectivo y asegurando la transparencia en los procesos evaluativos.
            </p>
          </section>

          <!-- Puntos Principales -->
          <section id="puntos-clave" class="mt-12">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Aspectos Destacados</h2>
            <ul class="list-disc pl-5 space-y-4">
              <li>Evaluaciones formativas y sumativas que monitorean el progreso estudiantil.</li>
              <li>Retroalimentación constante para apoyar el aprendizaje de los estudiantes.</li>
              <li>Metodologías adaptadas para respetar las necesidades educativas individuales.</li>
            </ul>
          </section>

          <!-- Opciones de Acceso -->
          <section id="opciones-evaluacion" class="mt-12 text-center">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Descargar Reglamento</h2>
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
             
              <button
                @click="downloadPDF('Reglamento_Evaluacion_2023.pdf')"
                class="bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary-focus transition cursor-pointer" 
              >
                Descargar PDF
              </button>
            </div>
          </section>
        </div>
      </div>

      <aside class="w-full lg:w-64 bg-card p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
        <h2 class="font-bold mb-4 uppercase">En esta sección:</h2>
        <ul class="space-y-3">
          <li>
            <a href="#introduccion-evaluacion" class="text-primary hover:underline font-semibold">Propósito</a>
          </li>
          <li>
            <a href="#puntos-clave" class="text-primary hover:underline font-semibold">Aspectos Destacados</a>
          </li>
          <li>
            <a href="#opciones-evaluacion" class="text-primary hover:underline font-semibold">Descargar Reglamento</a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleImage from '../../components/TitleImage.vue';
import Breadcrumbs from '../../components/Breadcrumbs.vue';

const breadcrumbsEvaluacion = [
  { label: 'Inicio', link: '/', underline: true },
  { label: 'Reglamentos', link: '', underline: false },
  { label: 'Evaluación', link: '', underline: false },
];

function downloadPDF(fileName: string) {
  const pdfUrl = `/assets/docs/${fileName}`;
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = fileName;
  link.click();
}
</script>