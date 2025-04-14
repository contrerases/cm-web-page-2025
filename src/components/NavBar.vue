<template>
  <nav class="bg-background shadow-md fixed top-0 w-full z-50 border border-border">
    <div class="container mx-auto flex justify-between items-center px-6 py-4 rounded-b-lg">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="/icono.webp" alt="Logo" class="h-20 w-auto" />
        <h1 class="font-semibold text-2xl text-foreground font-inter select-none">
          Colegio Mistral
        </h1>
      </div>

      <!-- Desktop Menu: visible desde md en adelante -->
      <ul class="hidden md:flex space-x-6 font-medium text-foreground justify-end">
        <li>
          <router-link :to="{ name: 'Inicio' }" :class="getLinkClass('Inicio')">
            Inicio
          </router-link>
        </li>
        <li class="relative group">
          <span class="cursor-pointer hover:text-primary uppercase"
                :class="getGroupClass(['Historia', 'MisionVision', 'PEI', 'EquipoDocente', 'EquipoDirectivo'])">
            Nosotros
          </span>
          <ul class="absolute left-0 top-full bg-background shadow-xl rounded-lg p-3 hidden group-hover:block border border-border whitespace-nowrap">
            <li>
              <router-link :to="{ name: 'Historia' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Historia
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'MisionVision' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Misión y Visión
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PEI' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Proyecto Educativo Institucional
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'EquipoDocente' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Equipo Docente
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'EquipoDirectivo' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Equipo Directivo
              </router-link>
            </li>
          </ul>
        </li>
        <li class="relative group">
          <span class="cursor-pointer hover:text-primary uppercase"
                :class="getGroupClass(['ReglamentoInterno', 'Evaluacion', 'Protocolos'])">
            Reglamentos
          </span>
          <ul class="absolute left-0 top-full bg-background shadow-lg rounded-lg p-3 hidden group-hover:block border border-border whitespace-nowrap">
            <li>
              <router-link :to="{ name: 'ReglamentoInterno' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Reglamento Interno de Convivencia Escolar (RICE)
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Evaluacion' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Reglamento de Evaluación
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Protocolos' }" class="block px-2 py-1 hover:bg-primary hover:text-primary-foreground rounded transition">
                Protocolos
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'ConsejoEscolar' }" :class="getLinkClass('ConsejoEscolar')">
            Consejo Escolar
          </router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'CentroDePadres' }" :class="getLinkClass('CentroDePadres')">
            Centro de Padres
          </router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'Noticias' }" :class="getLinkClass('Noticias')">
            Noticias
          </router-link>
        </li>
        <li class="ml-34">
          <router-link :to="{ name: 'Contactanos' }" :class="getLinkClass('Contactanos')">
            Contáctanos
          </router-link>
        </li>
      </ul>



      <!-- Botón del menú móvil: visible en pantallas pequeñas -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil: visible solo en pantallas pequeñas -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden bg-background border-t border-border">
        <ul class="flex flex-col space-y-4 py-4 px-6">
          <li>
            <router-link @click="toggleMenu" :to="{ name: 'Inicio' }" class="block hover:text-primary uppercase">
              Inicio
            </router-link>
          </li>
          <li class="group">
            <div class="flex justify-between items-center">
              <span class="cursor-pointer hover:text-primary uppercase" :class="getGroupClass(['Historia', 'MisionVision', 'PEI', 'EquipoDocente', 'EquipoDirectivo'])">
                Nosotros
              </span>
            </div>
            <ul class="mt-2 pl-4 space-y-2">
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'Historia' }" class="block hover:text-primary">
                  Historia
                </router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'MisionVision' }" class="block hover:text-primary">
                  Misión y Visión
                </router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'PEI' }" class="block hover:text-primary">
                  Proyecto Educativo Institucional
                </router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'EquipoDocente' }" class="block hover:text-primary">
                  Equipo Docente
                </router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'EquipoDirectivo' }" class="block hover:text-primary">
                  Equipo Directivo
                </router-link>
              </li>
            </ul>
          </li>
          <li class="group">
            <div class="flex justify-between items-center">
              <span class="cursor-pointer hover:text-primary uppercase" :class="getGroupClass(['ReglamentoInterno', 'Evaluacion', 'Protocolos'])">
                Reglamentos
              </span>
            </div>
            <ul class="mt-2 pl-4 space-y-2">
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'ReglamentoInterno' }" class="block hover:text-primary">
                  Reglamento Interno de Convivencia Escolar (RICE)
                </router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'Evaluacion' }" class="block hover:text-primary">
                  Reglamento de Evaluación
                </router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" :to="{ name: 'Protocolos' }" class="block hover:text-primary">
                  Protocolos
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link @click="toggleMenu" :to="{ name: 'ConsejoEscolar' }" class="block hover:text-primary uppercase">
              Consejo Escolar
            </router-link>
          </li>
          <!-- <li>
            <router-link @click="toggleMenu" :to="{ name: '' }" class="block hover:text-primary uppercase">
              Centro de Padres
            </router-link>
          </li> -->
          <li>
            <router-link @click="toggleMenu" :to="{ name: 'Noticias' }" class="block hover:text-primary uppercase">
              Noticias
            </router-link>
          </li>
          <!-- Botón "Contáctanos" para menú móvil -->
          <li>
            <router-link @click="toggleMenu" :to="{ name: 'Contactanos' }" class="block hover:text-primary uppercase">
              Contáctanos
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const route = useRoute();

const getLinkClass = (routeName: string) => {
  return route.name === routeName
    ? 'text-primary transition uppercase font-bold'
    : 'hover:text-primary transition uppercase';
};

const getGroupClass = (routeNames: string[]) => {
  return routeNames.includes(route.name as string)
    ? 'text-primary transition uppercase font-bold'
    : 'hover:text-primary transition uppercase';
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>