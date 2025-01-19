<template>
  <div class="container mt-5 pt-5 p-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="font">Our Products</h1>
      <CartButton />
    </div>
    <ProductsComponent :products="products" @add-to-cart="handleAddToCart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsComponent from '@/components/ProductsComponent.vue'
import CartButton from '@/components/CartButton.vue'
import { useCartStore } from '@/stores/cartStore'

import medicine1 from '@/assets/img/medicine1.jpg'
import medicine2 from '@/assets/img/medicine2.jpg'
import medicine3 from '@/assets/img/medicine3.jpg'

export default defineComponent({
  name: 'ProductsView',
  components: {
    ProductsComponent,
    CartButton,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Medicine 1',
          description: 'High-quality medicine for your health needs.',
          price: 29.99,
          image: medicine1,
        },
        {
          id: 2,
          name: 'Medicine 2',
          description: 'Advanced formula for better well-being.',
          price: 39.99,
          image: medicine2,
        },
        {
          id: 3,
          name: 'Medicine 3',
          description: 'Premium healthcare solution, for our premium customers.',
          price: 49.99,
          image: medicine3,
        },
      ],
    }
  },
  created() {
    this.cartStore.initializeCart()
  },
  methods: {
    handleAddToCart(productId: number) {
      const product = this.products.find((p) => p.id === productId)
      if (product) {
        this.cartStore.addToCart(product)
      }
    },
  },
  computed: {
    cartStore() {
      return useCartStore()
    },
  },
})
</script>
