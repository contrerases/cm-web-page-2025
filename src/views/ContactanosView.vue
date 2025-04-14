<template>
  <section class="bg-background text-foreground py-12">
      <!-- Encabezado con Título -->
      <TitleImage 
        :title="'Contáctanos'" 
        image="assets/images/headers/header_1.webp" 
      />
  
      <div class="container mx-auto max-w-6xl px-6">
        <!-- Breadcrumbs -->
        <div class="mb-6">
          <Breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Columna Principal -->
          <div class="md:col-span-2">
            <h1 class="text-3xl font-bold mb-4">Información de Contacto</h1>
            <p class="text-lg mb-6">
              Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros a través de la información proporcionada a continuación.
            </p>
  
            <!-- Información de Contacto -->
            <div class="mb-6">
              <h2 class="text-2xl font-bold mb-2">Información General</h2>
              <ul class="space-y-2 text-lg">
                <li><strong>Teléfono Sector Pre-Básica:</strong> +56 9 63341426</li>
                <li><strong>Teléfono Sector Básica:</strong> 72 2 501654</li>
                <li><strong>Teléfono Sector Media:</strong> 72 2 501716</li>
                <li><strong>Correo Electrónico:</strong> <a href="mailto:colmistral@hotmail.com" class="text-primary hover:text-primary-focus">colmistral@hotmail.com</a></li>
                <li><strong>Dirección:</strong> Bernardo O'Higgins N° 501, Las Cabras, VI Región</li>
              </ul>
            </div>
  
            <!-- Mapa -->
            <div class="mb-6">
              <h2 class="text-2xl font-bold mb-2">Ubicación</h2>
              <div class="rounded overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9486438278034!2d-72.0193012846901!3d-34.045701280611334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662b9c73e607a13%3A0xd40e90df9b1b387e!2sBernardo%20O&#39;Higgins%20501%2C%20Las%20Cabras%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1688154412932!5m2!1ses!2scl"
                  width="100%"
                  height="350"
                  style="border:0;"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
  
          <!-- Aside: Redes Sociales -->
          <aside class="bg-card border-l border-border pl-4">
            <h2 class="text-2xl font-bold mb-4">Conéctate con Nosotros</h2>
            <div class="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/colegiomistral"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                class="text-primary hover:text-primary-focus"
              >
                <i class="fab fa-facebook-square text-3xl"></i>
              </a>
              <a
                href="https://www.instagram.com/colegio.mistral/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                class="text-primary hover:text-primary-focus"
              >
                <i class="fab fa-instagram text-3xl"></i>
              </a>
            </div>
  
            <div>
              <h3 class="text-xl font-semibold mb-2  ">Últimas Publicaciones</h3>
            
           
              <div class="">
                <blockquote 
                  class="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/reel/DHvvrDkx152/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                  data-instgrm-version="14"
                  style="max-width:540px; min-width:326px; width:100%; margin:auto;">
                  
                </blockquote>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import TitleImage from '@/components/TitleImage.vue';
  
  // Definición de los breadcrumbs
  const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Contáctanos', link: '', underline: false },
  ];


  if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const instaScript = document.createElement('script');
      instaScript.src = "https://www.instagram.com/embed.js";
      instaScript.async = true;
      document.body.appendChild(instaScript);
      instaScript.onload = () => {
       
      };
    } 
    

  </script>
  
 