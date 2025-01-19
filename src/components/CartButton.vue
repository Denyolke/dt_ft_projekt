<template>
  <router-link to="/cart" class="btn btn-dark position-relative">
    <i class="bi bi-cart"></i> Cart
    <span
      v-if="totalItems > 0"
      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    >
      {{ totalItems }}
    </span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'CartButton',
  computed: {
    totalItems() {
      const cartStore = useCartStore()
      return storeToRefs(cartStore).totalItems.value
    },
  },
})
</script>
