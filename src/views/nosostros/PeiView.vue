<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <!-- Título con imagen -->
    <TitleImage 
      title="Proyecto Educativo Institucional (PEI)" 
      image="/assets/images/headers/header_4.webp" 
    />

    <!-- Breadcrumb (alineado a la izquierda por defecto) -->
    <div class="container mx-auto px-6 max-w-6xl mb-8">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
    </div>

    <!-- Contenedor del contenido principal con el mismo padding que el breadcrumb -->
    <div class="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-8">
      <!-- Contenido Principal -->
      <div class="flex-1">
        <div class="space-y-12">
          <section id="introduccion">
            <h2 class="text-4xl font-bold mb-6 text-primary">Introducción</h2>
            <p>
              El Proyecto Educativo Institucional (PEI) es el documento clave que organiza la gestión y define los valores
              del Colegio Mistral. Es el resultado del trabajo conjunto de la comunidad educativa, utilizando metodologías
              participativas para garantizar un enfoque de calidad y mejora continua en todos los procesos del colegio.
            </p>
          </section>

          <section id="sellos">
            <h2 class="text-4xl font-bold mb-6 text-primary">Sellos Institucionales</h2>
            <ul class="list-disc pl-5 space-y-4">
              <li>
                <strong>Proactividad:</strong> Toma decisiones de forma autónoma y responsable. Promueve la curiosidad, la innovación y el deseo por investigar, permitiendo a los estudiantes participar activamente en Aprendizaje Basado en Proyectos (ABP).
              </li>
              <li>
                <strong>Responsabilidad Social:</strong> Fomenta la valoración crítica y el aporte responsable en el entorno social y político, estimulando la protección del medio ambiente, la vida democrática escolar y relaciones basadas en valores como el respeto y la solidaridad.
              </li>
            </ul>
          </section>

          <section id="competencias">
            <h2 class="text-4xl font-bold mb-6 text-primary">Competencias Institucionales Transversales</h2>
            <ul class="list-disc pl-5 space-y-4">
              <li>
                <strong>Aprender a aprender y a pensar:</strong> Desarrollar hábitos de estudio, estrategias de aprendizaje y pensamiento riguroso, transfiriendo lo aprendido a diversos contextos para organizar autónomamente la educación.
              </li>
              <li>
                <strong>Convivir:</strong> Participar de manera recíproca en situaciones interpersonales, grupales y comunitarias, reconociendo derechos y deberes para contribuir al bienestar personal y colectivo.
              </li>
              <li>
                <strong>Iniciativa y espíritu emprendedor:</strong> Innovar, gestionar proyectos y asumir responsabilidades con flexibilidad y creatividad, lo que implica iniciar y desarrollar proyectos con compromiso.
              </li>
              <li>
                <strong>Aprender a ser:</strong> Reflexionar sobre sentimientos, pensamientos y acciones para orientarse hacia la autorrealización y la mejora integral de la persona.
              </li>
            </ul>
          </section>

          <section id="valores">
            <h2 class="text-4xl font-bold mb-6 text-primary">Valores Institucionales</h2>
            <ul class="list-disc pl-5 space-y-4">
              <li>
                <strong>Respeto:</strong> Valorar la dignidad humana, actuar bajo normas de convivencia sana, respetar y colaborar con ideas diversas, y crear un ambiente armónico para la comunidad.
              </li>
              <li>
                <strong>Responsabilidad:</strong> Practicar el autocuidado y el cuidado del otro, proteger el medio ambiente, participar en actividades democráticas y cumplir con los deberes educativos.
              </li>
              <li>
                <strong>Humildad:</strong> Reconocer las propias limitaciones, aceptar críticas constructivas y asumir las consecuencias de las acciones.
              </li>
              <li>
                <strong>Perseverancia:</strong> Ver el error como una oportunidad de aprendizaje, confiar en las propias capacidades y ser constante en los objetivos personales.
              </li>
              <li>
                <strong>Solidaridad:</strong> Demostrar empatía, espíritu de servicio y colaboración para construir una comunidad inclusiva y solidaria.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <!-- Aside -->
      <aside class="w-full lg:w-64 bg-card p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
        <h2 class="font-bold mb-4 uppercase">En esta sección:</h2>
        <ul class="space-y-3">
          <li>
            <a href="#introduccion" class="text-primary hover:underline font-semibold">Introducción</a>
          </li>
          <li>
            <a href="#sellos" class="text-primary hover:underline font-semibold">Sellos Institucionales</a>
          </li>
          <li>
            <a href="#competencias" class="text-primary hover:underline font-semibold">Competencias Transversales</a>
          </li>
          <li>
            <a href="#valores" class="text-primary hover:underline font-semibold">Valores Institucionales</a>
          </li>
        </ul>

        <button
          @click="downloadPEI"
          class="mt-6 w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary-focus transition cursor-pointer"
        >
          Descargar PEI (PDF)
        </button>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleImage from '@/components/TitleImage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

const breadcrumbs = [
  { label: 'Inicio', link: '/', underline: true },
  { label: 'Nosotros', link: '', underline: false },
  { label: 'Proyecto Educativo Institucional', link: "", underline: false },
];

function downloadPEI() {
  const pdfUrl = '/assets/docs/PEI2022.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Proyecto_Educativo_Institucional.pdf';
  link.click();
}
</script>