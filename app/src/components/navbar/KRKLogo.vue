<template>
   <div class="w-20">
      <img :src="img" />
   </div>
</template>

<script setup>
   const props = defineProps({
      img: {
         type: String,
         default: '/images/krk-logo.png',
      },
   });
</script>

<script>
   export default {
      name: 'KRKLogo',
   };
</script>

<style lang="css">
   svg {
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linejoin: round;
      stroke-miterlimit: 2;
   }
   img {
      max-width: 100%;
      height: auto;
   }
</style>
