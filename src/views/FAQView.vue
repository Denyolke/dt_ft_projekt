<template>
  <div>
    <section class="bg-gray-200 text-gray-800 py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <ul class="space-y-4">
          <li class="bg-white shadow p-4 rounded">
            <h3 class="font-bold">What does TATYL Pharmacy do?</h3>
            <p>We specialize in medical research, testing, and developing innovative medicines.</p>
          </li>
          <li class="bg-white shadow p-4 rounded">
            <h3 class="font-bold">How can I join the research team?</h3>
            <p>You can sign up on our website or contact us directly for more information.</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FAQView',
})
</script>
