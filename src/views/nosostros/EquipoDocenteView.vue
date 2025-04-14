<template lang="">
  <section class="bg-background text-foreground py-12 mt-16">
      <!-- Título con imagen -->
      <TitleImage
        title="Equipo Docente"
        image= "/assets/images/headers/header_3.webp"
       
      />
  
      <!-- Breadcrumb -->
      <div class="container mx-auto px-6 max-w-6xl mb-6">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
  
      
  
      <!-- Contenido principal -->
      <div class="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-8">
        <div class="flex-1">
            <!-- Frase inspiradora -->
      <div class="container mx-auto max-w-6xl px-6 mb-16 text-center">
        <blockquote class="text-lg italic text-secondary-foreground font-semibold">
          “La enseñanza de los niños es tal vez la forma más alta de buscar a Dios; pero es también la más terrible en el sentido de tremenda responsabilidad.”
        </blockquote>
      </div>
          <!-- Introducción -->
          <section id="introduccion">
            <h2 class="text-4xl font-bold text-primary mb-6">Introducción</h2>
            <p class="text-justify">
              El equipo docente del Colegio Mistral es el núcleo de nuestra comunidad educativa, comprometido con la formación integral de cada estudiante. 
              Los docentes son referentes éticos y morales que promueven la inclusión, el pensamiento crítico, y la innovación pedagógica. Cada profesor es 
              un pilar fundamental en el desarrollo de habilidades del siglo XXI, guiando a los estudiantes hacia la autonomía, creatividad y conciencia social.
            </p>
          </section>
  
          <!-- Imagen del Equipo Docente -->
          <section id="imagen-docente" class="mt-16">
            <h2 class="text-4xl font-bold text-primary mb-6 text-center">Nuestro Equipo Docente</h2>
            <div class="flex justify-center">
              <img 
                :src="docente_img_url" 
                alt="Foto del equipo docente completo" 
                class="rounded-lg shadow-md w-full max-w-4xl"
              />
            </div>
          </section>
  
          <!-- Perfil Docente -->
          <section id="perfil-docente" class="mt-16">
            <h2 class="text-4xl font-bold text-primary mb-6">Perfil del Docente</h2>
            <ul class="list-disc pl-5 space-y-4">
              <li>Domina la disciplina acorde a su quehacer docente y la legislación educacional vigente.</li>
              <li>Promueve valores éticos y morales como referentes para sus estudiantes.</li>
              <li>Está comprometido con la inclusión, respetando los diferentes ritmos de aprendizaje.</li>
              <li>Posee pensamiento crítico y fomenta esta habilidad en los estudiantes.</li>
              <li>Investiga y reflexiona sobre sus prácticas para que los estudiantes construyan sus propios saberes.</li>
              <li>Muestra interés por capacitarse continuamente, innovando y mejorando sus estrategias pedagógicas.</li>
              <li>Es empático con estudiantes, padres y colegas, promoviendo una sana convivencia escolar.</li>
              <li>Trabaja colaborativamente para alcanzar metas colectivas en la comunidad educativa.</li>
              <li>Fomenta la conciencia social y la responsabilidad en los estudiantes.</li>
            </ul>
          </section>
  
          
        </div>
  
        <!-- Aside de navegación -->
        <aside class="w-full lg:w-64 bg-card  p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
          <h2 class="font-bold mb-4 uppercase">En esta sección:</h2>
          <ul class="space-y-3">
            <li>
              <a href="#introduccion" class="text-primary hover:underline font-semibold">Introducción</a>
            </li>
            <li>
              <a href="#imagen-docente" class="text-primary hover:underline font-semibold">Nuestro Equipo Docente</a>
            </li>
            <li>
              <a href="#perfil-docente" class="text-primary hover:underline font-semibold">Perfil del Docente</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import TitleImage from '../../components/TitleImage.vue';
  import Breadcrumbs from '../../components/Breadcrumbs.vue';

  
  
  
  // Datos para el Breadcrumb
  const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Nosotros', link: '/nosotros', underline: false },
    { label: 'Equipo Docente', link: '', underline: false },
  ];
  
  const docente_img_url = "assets/images/docentes.webp";
  </script>