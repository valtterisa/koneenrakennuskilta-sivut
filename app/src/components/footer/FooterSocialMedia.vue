<template>
   <a :href="SoMe.link" :title="SoMe.name" class="">
      <ClientOnly fallback-tag="span" fallback="">
         <font-awesome-icon :icon="SoMe.icon" class="h-8 hover:text-custom-primary" />
      </ClientOnly>
      <span class="sr-only" :aria-label="SoMe.name">{{ SoMe.name }}</span>
   </a>
</template>

<script setup lang="ts">
   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

   const SoMe = defineProps({
      name: {
         type: String,
         default: 'Default Title',
         required: true,
      },
      link: {
         type: String,
         default: 'fab instagram',
         required: true,
      },
      icon: {
         type: String,
         default: '#event',
         required: true,
      },
   });
</script>

<script lang="ts">
   export default {
      name: 'FooterSocialMedia',
   };
</script>

<style scoped></style>
