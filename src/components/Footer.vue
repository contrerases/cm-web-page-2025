<template>
    <footer class="bg-secondary text-primary-foreground py-12">
      <div class="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Sección del Logo -->
        <div class="flex flex-col items-center">
          <img
            src="/icono.webp"
            alt="Logo"
            class="w-32 h-32 object-contain mb-4"
          />
          <p class="text-center text-sm font-semibold">
            Inspirando aprendizaje y comunidad.
          </p>
        </div>
  
        <!-- Sección de Redes Sociales -->
        <div class="flex flex-col items-center">
          <h2 class="text-lg font-bold mb-4">Síguenos en Redes Sociales</h2>
          <div class="flex space-x-6">
            <a :href="facebook" aria-label="Facebook" class="text-primary-foreground hover:text-primary cursor-pointer">
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
            <a :href="instagram" aria-label="Instagram" class="text-primary-foreground hover:text-primary cursor-pointer">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
  
        <!-- Sección de Contacto -->
        <div class="flex flex-col items-center">
          <h2 class="text-lg font-bold mb-4">Contáctanos</h2>
          <ul class="space-y-2 text-sm text-center">
            <li><strong>Sector Media:</strong> 72 2 501716</li>
            <li><strong>Sector Básica:</strong> 72 2 501654</li>
            <li><strong>Sector Pre-Básica:</strong> +56 9 63341426</li>
            <li>
             <strong> Dirección:</strong> Bernardo O'Higgins N° 501, Las Cabras, VI Región
            </li>
            <li>
              <strong>Correo:</strong> <a href="mailto:colmistral@hotmail.com" class="text-muted hover:text-primary-focus">colmistral@hotmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Línea inferior del footer -->
      <div class="border-t border-secondary-focus mt-8 pt-4 text-center text-sm ">
        © 2025 Colegio Mistral. Todos los derechos reservados.
      </div>
    </footer>
  </template>
  
  <script lang="ts" setup>

const facebook = "https://www.facebook.com/colegiomistral";
const instagram = "https://www.instagram.com/colegio.mistral/";
  </script>
  
