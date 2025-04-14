<template>
    <section class="bg-background text-foreground py-12">
      <!-- Título de la página -->
      <TitleImage 
        :title="'Centro de Padres'" 
        image="assets/images/headers/header_3.webp" 
      />
  
      <div class="container mx-auto max-w-6xl px-6">
        <!-- Breadcrumbs -->
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
  
      </div>
    </section>
  </template>
  

  <script setup lang="ts">
import { ref } from 'vue';
import TitleImage from '@/components/TitleImage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';


const breadcrumbs = [
    { label: 'Inicio', link: '/', underline: true },
    { label: 'Centro de Padres', link: '', underline: false },
  ];

</script>
