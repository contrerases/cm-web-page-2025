<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <!-- Título con imagen -->
    <TitleImage
      title="Protocolos"
    image="/assets/images/headers/header_1.webp"
    
    />

    <!-- Breadcrumb -->
    <div class="container mx-auto px-6 max-w-6xl mb-6">
      <Breadcrumbs :breadcrumbs="breadcrumbsProtocolos" />
    </div>

    <!-- Contenido principal -->
    <div class="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-8">
      <!-- Información principal -->
      <div class="flex-1">
        <div class=" text-justify space-y-12">
          <!-- Introducción -->
          <section id="introduccion-protocolos">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">¿Qué son los Protocolos?</h2>
            <p>
              Los protocolos del Colegio Mistral son documentos que establecen las normas y procedimientos esenciales 
              para garantizar la seguridad, organización y convivencia dentro de nuestra comunidad educativa. Cada protocolo 
              está diseñado para abordar situaciones específicas y asegurar que se manejen de forma clara y eficiente, 
              siempre protegiendo el bienestar de nuestros estudiantes, docentes y apoderados.
            </p>
          </section>

          

          <!-- Opciones de acceso al PDF -->
          <section id="opciones-protocolos" class="mt-12 text-center">
            <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">Descargar Protocolos</h2>
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
             

              <!-- Descargar PDF -->
              <button
                @click="downloadPDF('Protocolos-Convivencia-Escolar.pdf')"
                class="bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary-focus transition cursor-pointer"
              >
                Descargar PDF
              </button>
            </div>
          </section>
        </div>
      </div>

      <!-- Navegación interna (Aside) -->
      <aside class="w-full lg:w-64 bg-card p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
        <h2 class="font-bold mb-4 uppercase">En esta sección:</h2>
        <ul class="space-y-3">
          <li>
            <a href="#introduccion-protocolos" class="text-primary hover:underline font-semibold">¿Qué son los Protocolos?</a>
          </li>
          
          <li>
            <a href="#opciones-protocolos" class="text-primary hover:underline font-semibold">Descargar protocolos</a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleImage from '../../components/TitleImage.vue';
import Breadcrumbs from '../../components/Breadcrumbs.vue';

// Breadcrumbs para navegación
const breadcrumbsProtocolos = [
  { label: 'Inicio', link: '/', underline: true },
  { label: 'Reglamentos', link: '/reglamentos', underline: false },
  { label: 'Protocolos', link: '', underline: false },
];

// Función para descargar PDF
function downloadPDF(fileName: string) {
  const pdfUrl = `/assets/docs/${fileName}`;
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = fileName;
  link.click();
}
</script>