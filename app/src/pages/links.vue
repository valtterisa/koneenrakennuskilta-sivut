<template>
   <div>
      <Head>
         <Title>{{ $t('title_links') }} - Serveri ry</Title>
      </Head>
      <vue-markdown class="rich-text links-content" :source="links[$i18n.locale + '_content']" />
   </div>
</template>

<script setup lang="ts">
   import VueMarkdown from 'vue-markdown-render';
   const config = useRuntimeConfig();

   let links;
   // let updated: Date;
   try {
      const response = await useFetch(config.public['API_URL'] + 'items/links');
      links = response.data.value.data;
      // updated = new Date(links.date_updated);
   } catch (e) {
      links = {
         fi_content: '# Hyödylliset linkit',
         en_content: '# Useful links',
      };
      // updated = new Date();
   }
</script>
