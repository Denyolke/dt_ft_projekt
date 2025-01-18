<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div v-for="product in products" :key="product.id" class="col">
      <div class="card h-100 shadow-sm">
        <img
          :src="product.image"
          :alt="product.name"
          class="card-img-top p-3"
          style="object-fit: contain; height: 200px"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="h5 mb-0">${{ product.price }}</span>
            <button class="btn btn-dark" @click="$emit('add-to-cart', product.id)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default defineComponent({
  name: 'ProductsComponent',
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  emits: ['add-to-cart'],
})
</script>
