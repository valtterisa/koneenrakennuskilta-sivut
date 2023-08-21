<template>
   <div
      class="flex items-center justify-center bg-no-repeat bg-opacity-100 bg-[url('/images/krk-background.jpg')] bg-center bg-cover w-screen h-[30rem] md:h-[40rem]"
   >
      <div class="absolute inset-0 bg-black opacity-60 h-[35rem] md:h-[45rem]"></div>
      <div class="flex w-full justify-center items-center text-center absolute">
         <div class="flex flex-col justify-center items-center md:max-w-[50%] h-fit">
            <h1 class="text text-3xl font-extrabold text-gray-900 dark:text-gray-900 sm:text-5xl lg:text-7xl pb-5">
               <span class="text-transparent bg-clip-text bg-custom-primary">
                  {{ content.title }}
               </span>
            </h1>
            <h2 class="text-xl md:text-2xl mb-8 md:mb-16 text-white">
               {{ content.subtitle }}
            </h2>
            <div class="flex gap-5">
               <nuxt-link :to="content.button.link" class="">
                  <div
                     class="p-3 sm:py-4 sm:px-6 text-sm text-white bg-custom-primary hover:bg-custom-secondary rounded-lg text-center uppercase font-bold md:text-lg tracking-wider mx-auto"
                     role="button"
                  >
                     {{ content.button.title }}
                  </div>
               </nuxt-link>
               <nuxt-link :to="content.button.link" class="">
                  <div
                     class="p-3 sm:py-4 sm:px-6 text-sm text-white bg-custom-primary hover:bg-custom-secondary rounded-lg text-center uppercase font-bold md:text-lg tracking-wider mx-auto"
                     role="button"
                  >
                     Tapahtumat
                  </div>
               </nuxt-link>
            </div>
         </div>
      </div>
      <!-- curve -->
      <!-- <div class="flex items-end h-80 md:h-[36rem]">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
               fill-opacity="1"
               d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,192C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
         </svg>
      </div> -->
   </div>
</template>

<script setup>
   import { computed } from 'vue';
   const props = defineProps({
      content: {
         type: Object,
         required: true,
      },
   });
   // Use a computed property to derive a new value based on the prop's value
   const content = computed(() => props.content);
</script>

<style scoped>
   svg {
      @apply fill-white dark:fill-zinc-800;
   }
</style>
