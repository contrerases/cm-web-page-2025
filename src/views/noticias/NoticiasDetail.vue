<template>
    <section class="bg-background text-foreground py-12">
      <!-- Mostrar el título de la noticia desde el objeto 'noticia' -->
      <TitleImage
:title="noticia?.title || 'No encontrado'"
      image="/assets/images/headers/header_1.webp"
    />
  
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-6">
          <Breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
  
        <div v-if="noticia" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contenido Principal -->
          <div class="lg:col-span-2">
            <img
              :src="noticia.image"
              :alt="noticia.title"
              class="w-full h-auto object-fill rounded-lg mb-6"
            />
            <h1 class="text-3xl font-bold text-primary mb-4">
            </h1>
            <p class="text-sm text-muted mb-4">Fecha: {{ noticia.date }}</p>
            <p class="text-lg text-secondary-foreground mb-6">
              {{ noticia.description }}
            </p>
            <!-- Se muestra el content adicional en el detalle -->
            <div class="prose prose-primary mb-6">
              <p>{{ noticia.content }}</p>
            </div>
            <!-- Video si existe -->
            <video
              v-if="noticia.video"
              class="w-full h-auto rounded-lg shadow-3xl mb-6"
              controls
              loop
            >
              <source :src="noticia.video" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
            <button
              @click="goBack"
              class="mt-8 px-6 py-2 rounded bg-secondary text-primary-foreground hover:bg-secondary-focus transition cursor-pointer"
            >
              Volver
            </button>
          </div>
  
          <!-- Aside -->
          <aside class="bg-card p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-primary mb-4">Más Noticias</h2>
            <ul class="space-y-4">
              <li
                v-for="item in relatedNoticias"
                :key="item.slug"
                class="flex items-start space-x-4"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 class="text-md font-bold text-secondary">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm text-muted">{{ item.date }}</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
  
        <div v-else class="text-center">
          <p class="text-lg font-bold text-red-500">Noticia no encontrada.</p>
          <button
            @click="goBack"
            class="mt-8 px-6 py-2 rounded bg-secondary text-primary-foreground hover:bg-secondary-focus transition cursor-pointer"
          >
            Volver
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import TitleImage from '@/components/TitleImage.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import type Noticia from '@/interfaces/noticias_model.ts';

  const noticias: Noticia[] = [
    {
      id: "4",
      image: "/assets/images/noticias/dia-del-alumno.webp",
      title: "Dia del Alumno",
      date: "12 de junio de 2024",
      description: "El colegio le da libertad a sus alumnos para realizar actividades como comunidad",
      slug: "dia-del-alumno",
      video: null,
      content: "En el marco de la celebración del día del alumno, el colegio le da libertad a sus alumnos para realizar actividades como comunidad y disfrutar de un día diferente.",
    },
    {
      id: "2",
      image: "/assets/images/noticias/concierto-primavera-2022.webp",
      title: "Concierto Primavera 2022",
      date: "20 de octubre de 2022",
      description: "La primavera llega y las flores hacen relucir sus colores y aromas, logrando que los sentimientos de amor ...",
      slug: "concierto-primavera-2022",
      video: null,
      content: "La primavera llega y las flores hacen relucir sus colores y aromas, logrando que los sentimientos de amor y felicidad se despierten en cada uno de nosotros. Por ello, el colegio organiza el Concierto de Primavera 2022, un evento lleno de música y alegría.",
    },
    {
      id: "3",
      image: "/assets/images/noticias/dia-del-libro.webp",
      title: "Dia del Libro",
      date: "23 de abril de 2024",
      description: "En el marco de la celebración del día del libro",
      slug: "dia-del-libro",
      video: null,
      content: "En el marco de la celebración del día del libro, el colegio organiza una serie de actividades para fomentar la lectura y el amor por los libros. Los alumnos podrán disfrutar de cuentacuentos, charlas y talleres de escritura creativa.",
    },
    {
    id: "1",
    image: "/assets/images/noticias/cuenta-publica-2024.webp",
    title: "Cuenta Pública 2024",
    date: "31/03/2025",
    description: 
      "El colegio presenta su cuenta pública 2024.",
    slug: "cuenta-publica-2024",
    content: "El colegio presenta su cuenta pública 2024, donde se detallan los logros y avances del año anterior. Este evento es una oportunidad para que la comunidad educativa conozca el estado de la institución y los planes futuros.",
    video: "/assets/videos/cuenta-publica.mp4",
    },
    

  ];

  
  // Ruta y router
  const route = useRoute();
  const router = useRouter();
  
  // Buscar la noticia actual basada en el slug
  const noticia = computed(() =>
    noticias.find((item) => item.slug === route.params.slug)
  );
  
  // Noticias relacionadas
  const relatedNoticias = computed(() =>
    noticias.filter((item) => item.slug !== route.params.slug)
  );
  
  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Noticias', link: '/noticias', underline: true },
    {
      label: noticia.value?.title || 'Detalle de Noticia',
      link: '',
      underline: false,
    },
  ];
  
  // Método para volver
  function goBack() {
    router.push('/noticias');
  }

  </script>