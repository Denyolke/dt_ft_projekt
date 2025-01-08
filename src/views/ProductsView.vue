<template>
  <div class="container mt-5 pt-5">
    <!-- Page Title -->
    <h1 class="text-center mb-4">Our Products</h1>

    <!-- Products Grid -->
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
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Import images with correct path
import medicine1 from '@/assets/img/medicine1.jpg'
import medicine2 from '@/assets/img/medicine2.jpg'
import medicine3 from '@/assets/img/medicine3.jpg'

export default defineComponent({
  name: 'ProductsView',
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
          description: 'Premium healthcare solution.',
          price: 49.99,
          image: medicine3,
        },
      ],
    }
  },
})
</script>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.btn-primary {
  background-color: #0d6efd;
  border: none;
  padding: 0.5rem 1rem;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
</style>
