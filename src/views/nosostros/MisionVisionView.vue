<template>
  <section class="bg-background text-foreground py-12 mt-16">
    <TitleImage title="Misión y Visión" 
      image="/assets/images/headers/header_3.webp"
    />

    <div class="container mx-auto max-w-6xl px-6">
      <!-- Breadcrumbs -->
      <div class="mb-8">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Contenido principal -->
        <div class="flex-1">
          <!-- Texto principal -->
          <div
            class=" text-justify space-y-12 mr-20"
          >
            <!-- Misión -->
            <section id="mision">
              <h2 class="text-4xl font-bold mb-6 text-secondary-foreground">
                Misión
              </h2>
              <div class="flex justify-center mb-12">
                <img
                  :src="mision_img_url"
                  alt="Misión y Visión"
                  class="w-full h-90 rounded-lg shadow-md"
                />
              </div>
              <p>
                Formar personas que enfrentan y transforman la sociedad actual a
                partir del concepto de justicia e igualdad que promulga Gabriela
                Mistral.
              </p>
            </section>

            <!-- Visión -->
            <section id="vision">
              <h2 class="text-4xl font-bold mb-12 text-secondary-foreground">
                Visión
              </h2>
              <div class="flex justify-center mb-6">
                <img
                  :src="vision_img_url"
                  alt="Misión y Visión"
                  class="w-full h-90 rounded-lg shadow-md"
                />
              </div>
              <p>
                Como colegio pretendemos desarrollar en nuestros estudiantes
                habilidades del siglo XXI con el objetivo de lograr aprendizajes
                profundos y socioemocionales, involucrando a toda la comunidad
                en el proceso de enseñanza-aprendizaje.
              </p>
            </section>
          </div>
        </div>

        <aside class="w-full lg:w-64 bg-card  p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
          <h2 class="font-bold mb-4 uppercase">En esta seccion:</h2>
          <ul class="space-y-3">
            <li>
              <a
                href="#mision"
                class="text-primary hover:underline font-semibold"
              >
                Misión
              </a>
            </li>
            <li>
              <a
                href="#vision"
                class="text-primary hover:underline font-semibold"
              >
                Visión
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import TitleImage from "@/components/TitleImage.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

const mision_img_url = "assets/images/mision.webp";
const vision_img_url = "assets/images/vision.webp";

const breadcrumbs = [
  { label: "Inicio", link: "{name : 'Inicio'}", underline: true },
  { label: "Nosotros", link: "", underline: false },
  { label: "Misión y Visión", link: "", underline: false },
];
</script>
