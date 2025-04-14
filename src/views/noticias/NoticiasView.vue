<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <TitleImage
      title="Noticias"
      image="/assets/images/headers/header_5.webp"
    />

    <div class="container mx-auto max-w-6xl px-6">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>

      <!-- Transición para las noticias -->
      <div class="relative">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 transition-opacity duration-300"
          :class="isFading ? 'opacity-0' : 'opacity-100'"
          @transitionend="isFading = false"
        >
          <!-- Card de Noticia -->
          <NewsCard
            v-for="noticia in currentNoticias"
            :key="noticia.id"
            :noticia="noticia"
          />
        </div>
      </div>

      <!-- Paginación -->
      <div class="flex justify-center space-x-2 mt-12">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded bg-secondary text-primary-foreground hover:bg-secondary/80 transition disabled:opacity-50 cursor-pointer"
        >
          Anterior
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-4 py-2 rounded transition',
            page === currentPage
              ? 'bg-primary text-primary-foreground'
              : 'bg-background text-foreground hover:bg-secondary cursor-pointer',
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded bg-secondary text-primary-foreground hover:bg-secondary/80 transition disabled:opacity-50 cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import NewsCard from "@/components/NewsCard.vue";
import TitleImage from "@/components/TitleImage.vue";
import type Noticia from "@/interfaces/noticias_model.ts";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

// Breadcrumbs para navegación
const breadcrumbs = [
  { label: "Inicio", link: "name: {'Inicio'}", underline: true },
  { label: "Noticias", link: "", underline: false },
];

// Lista de noticias de ejemplo
const noticias = ref<Noticia[]>([
  {
    id: "1",
    image: "/assets/images/noticias/cuenta-publica-2024.webp",
    title: "Cuenta Pública 2024",
    date: "31 de Marzo de 2025",
    description: 
      "El colegio presenta su cuenta pública 2024.",
    slug: "cuenta-publica-2024",
    content: "El colegio presenta su cuenta pública 2024, donde se detallan los logros y avances del año anterior. Este evento es una oportunidad para que la comunidad educativa conozca el estado de la institución y los planes futuros.",
    video: "/assets/videos/cuenta-publica.mp4",
    },
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
   
    
 
]);

const itemsPerPage = ref(9);
const currentPage = ref(1);
const isFading = ref(false);

const totalPages = computed(() =>
  Math.ceil(noticias.value.length / itemsPerPage.value)
);
const currentNoticias = computed(() =>
  noticias.value.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    currentPage.value * itemsPerPage.value 
  )
);

// Cambio de página con animación
const changePage = (newPage: number) => {
  isFading.value = true; // Activa el fade-out
  setTimeout(() => {
    currentPage.value = newPage;
    isFading.value = false; // Activa el fade-in
  }, 500); // Duración igual a `duration-500` en Tailwind
};

const prevPage = () => {
  if (currentPage.value > 1) changePage(currentPage.value - 1);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) changePage(currentPage.value + 1);
};

const goToPage = (page: number) => {
  changePage(page);
};
</script>
