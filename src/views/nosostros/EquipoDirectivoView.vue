<template lang="">
    <section class="bg-background text-foreground py-12 mt-16">
      <!-- Título con imagen -->
      <TitleImage
        title="Equipo Directivo"
        image="/assets/images/headers/header_2.webp"
        
      />
  
   
      <div class="container mx-auto px-6 max-w-6xl mb-6">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/> 
      </div>
  
      <div class="container mx-auto max-w-6xl px-6 flex flex-col lg:flex-row gap-8">
   
        <div class="flex-1">
          
          <section id="direccion">
            <h2 class="text-4xl font-bold text-primary mb-20">Dirección</h2>
            <div class="flex items-center justify-center gap-8 flex-wrap">
              <DirectivaCard
                v-for="(member, index) in direccion"
                :key="index"
                :directiva="member"
              />
            </div>
          </section>
  
        
          <section id="utp" class="mt-16">
            <h2 class="text-4xl font-bold text-primary mb-20">UTP</h2>
            <div class="flex items-center justify-center gap-8 flex-wrap">
              <DirectivaCard
                v-for="(member, index) in utp"
                :key="index"
                :directiva="member"
              />
            </div>
          </section>
  
          
          <section id="convivencia" class="mt-16">
            <h2 class="text-4xl font-bold text-primary mb-20">Encargado de Convivencia</h2>
            <div class="flex items-center justify-center gap-8">
              <DirectivaCard
                v-for="(member, index) in convivencia_escolar"
                :key="index"
                :directiva="member"
              />
            </div>
          </section>
  
         
          <section id="inspectores" class="mt-16">
            <h2 class="text-4xl font-bold text-primary mb-20">Inspectores</h2>
            <div class="flex items-center justify-center gap-8 flex-wrap">
              <DirectivaCard
                v-for="(member, index) in inspectores"
                :key="index"
                :directiva="member"
              />
            </div>
          </section>
        </div>
  
       
        <aside class="w-full lg:w-64 bg-card  p-6 self-start lg:sticky lg:top-[8rem] border-l border-border">
          <h2 class="font-bold mb-4 uppercase">En esta sección:</h2>
          <ul class="space-y-3">
            <li>
              <a href="#direccion" class="text-primary hover:underline font-semibold">Dirección</a>
            </li>
            <li>
              <a href="#utp" class="text-primary hover:underline font-semibold">UTP</a>
            </li>
            <li>
              <a href="#convivencia" class="text-primary hover:underline font-semibold">Encargado de Convivencia</a>
            </li>
            <li>
              <a href="#inspectores" class="text-primary hover:underline font-semibold">Inspectores</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import TitleImage from '../../components/TitleImage.vue';
  import Breadcrumbs from '../../components/Breadcrumbs.vue';
  import DirectivaCard from '../../components/DirectivaCard.vue';
  
  interface DirectivaCardProps {
    image: string;
    name: string;
    position: string;
  }
  
  // Datos para el Breadcrumb
  const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Nosotros', link: '', underline: false },
    { label: 'Equipo Directivo', link: '', underline: false },
  ];
  
  // Datos para Dirección
  const direccion: DirectivaCardProps[] = [
    {
      name: 'Hugo Martinez Cabello',
      image: 'assets/images/directiva/Hugo.webp',
      position: 'Director',
    },
    {
      name: 'Sandra Navarro Donoso',
      image: 'assets/images/directiva/Sandra.webp',
      position: 'Directora Académica',
    },
  ];
  
  // Datos para UTP
  const utp: DirectivaCardProps[] = [
    {
      name: 'Danitza Vargas Fuentes',
      image: 'assets/images/directiva/Danitza.webp',
      position: 'UTP (Pre-Básica)',
    },
    {
      name: 'M. Angelica Castro ',
      image: 'assets/images/directiva/Angelica.webp',
      position: 'UTP (Básica)',
    },
    {
      name: 'Esteban Hernandez Donoso',
      image: 'assets/images/directiva/Esteban.webp',
      position: 'UTP (Media)',
    },
  ];
  
  // Datos para Convivencia Escolar
  const convivencia_escolar: DirectivaCardProps[] = [
    {
      name: 'M. Teresa Cartagena',
      image: 'assets/images/directiva/MariaT.webp',
      position: 'Encargada de Convivencia (Media)',
    },
    {
      name: 'Pamela Urra',
      image: 'assets/images/directiva/Pamela.webp',
      position: 'Encargada de Convivencia (Básica)',
    },
  ];
  
  // Datos para Inspectores
  const inspectores: DirectivaCardProps[] = [
    {
      name: 'Ingrid Nuñez Ramirez',
      image: 'assets/images/directiva/ingrid.webp',
      position: 'Inspectora General (Media)',
    },
  ];
  </script>