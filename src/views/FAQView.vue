<template>
  <FAQAccordionComponent :faqs="faqs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FAQAccordionComponent from '@/components/FAQAccordionComponent.vue';
import faqData from '@/data/faq.json';

export default defineComponent({
  name: 'FAQView',
  components: {
    FAQAccordionComponent,
  },
  data() {
    return {
      faqs: faqData,
    };
  },
});
</script>
