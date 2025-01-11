<template>
  <section class="p-5">
    <div class="container p-5">
      <h2 class="text-center mb-4">Frequently Asked Questions</h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              @click="toggleAccordion(index)"
              :aria-expanded="isExpanded(index)"
              :aria-controls="'flush-collapse' + index"
            >
              {{ faq.question }}
            </button>
          </h2>
          <div
            :class="['accordion-collapse collapse', { show: activeIndex === index }]"
            :id="'flush-collapse' + index"
          >
            <div class="accordion-body">{{ faq.answer }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FAQAccordionComponent',
  props: {
    faqs: {
      type: Array as () => { question: string; answer: string }[],
      required: true,
    },
  },
  setup() {
    const activeIndex = ref<number | null>(null)

    const toggleAccordion = (index: number) => {
      activeIndex.value = activeIndex.value === index ? null : index
    }

    const isExpanded = (index: number): boolean => {
      return activeIndex.value === index
    }

    return {
      activeIndex,
      toggleAccordion,
      isExpanded,
    }
  },
})
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: rgba(0, 0, 0, 0.03);
  color: var(--bs-accordion-active-color);
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.125);
}
</style>
