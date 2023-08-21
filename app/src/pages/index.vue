<template>
   <div class="flex flex-col justify-center items-center">
      <Head>
         <!-- <Title>{{ $t('title_front-page') }} - Serveri ry</Title> -->
      </Head>
      <section>
         <HeroSection class="w-screen" :content="heroData" />
      </section>
   </div>
</template>

<script setup lang="ts">
   import HeroSection from '@/components/langingpage/HeroSection.vue';
   const query = groq`*[_type == "reusableSection"]`;
   const { data } = await useSanityQuery(query);
   const heroData = data._rawValue[0].content[0];
</script>

<!-- <script lang="ts">
   export default {
      computed: {
         showDiv() {
            if (process.client) {
               // Check the cookie value and return a boolean
               const cookieValue = this.getCookieValue('cookieconsent_status');
               return cookieValue === 'deny'; // if cookie value is not allow, return true
            }
         },
      },
      methods: {
         getCookieValue(cookieName: string) {
            if (process.client) {
               const name = cookieName + '=';
               const decodedCookie = decodeURIComponent(document.cookie);
               const cookieArray = decodedCookie.split(';');

               for (let i = 0; i < cookieArray.length; i++) {
                  let cookie = cookieArray[i];
                  while (cookie.charAt(0) === ' ') {
                     cookie = cookie.substring(1);
                  }
                  if (cookie.indexOf(name) === 0) {
                     return cookie.substring(name.length, cookie.length);
                  }
               }
               return '';
            }
         },
         setCookieValue(cookieName: string, value: string) {
            if (process.client) {
               document.cookie = `${cookieName}=${value}; path=/`;
            }
         },
      },
   };
</script> -->

<style>
   p {
      @apply tracking-wide;
   }
</style>
