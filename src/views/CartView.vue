<template>
  <div class="container mt-5 pt-5">
    <h1 class="font text-center mb-4">Shopping Cart</h1>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow">
          <div class="card-body">
            <div v-if="cartItems.length === 0" class="text-center py-4">
              <p class="mb-4">Your cart is empty</p>
              <router-link to="/products" class="btn btn-primary">Continue Shopping</router-link>
            </div>
            <div v-else>
              <div
                v-for="item in cartItems"
                :key="item.productId"
                class="d-flex align-items-center mb-3 pb-3 border-bottom"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="me-3"
                  style="width: 80px; height: 80px; object-fit: contain"
                />
                <div class="flex-grow-1">
                  <h6 class="mb-0">{{ item.name }}</h6>
                  <p class="mb-0 text-muted">{{ item.price }}€</p>
                  <div class="d-flex align-items-center mt-2">
                    <button
                      class="btn btn-sm btn-outline-secondary"
                      @click="updateQuantity(item.productId, item.quantity - 1)"
                    >
                      -
                    </button>
                    <span class="mx-2">{{ item.quantity }}</span>
                    <button
                      class="btn btn-sm btn-outline-secondary"
                      @click="updateQuantity(item.productId, item.quantity + 1)"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div class="ms-3 text-end">
                  <p class="mb-0">{{ (item.price * item.quantity).toFixed(2) }}€</p>
                  <button
                    class="btn btn-sm btn-danger mt-2"
                    @click="removeFromCart(item.productId)"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-4">
                <h5>Total ({{ totalItems }} items):</h5>
                <h5>{{ totalPrice.toFixed(2) }}€</h5>
              </div>
              <div class="d-flex justify-content-between mt-4">
                <router-link to="/products" class="btn btn-outline-primary">
                  Continue Shopping
                </router-link>
                <button class="btn btn-primary" @click="checkout">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'CartView',
  data() {
    const cartStore = useCartStore()
    const { cartItems, totalItems, totalPrice } = storeToRefs(cartStore)

    return {
      cartItems,
      totalItems,
      totalPrice,
    }
  },
  methods: {
    updateQuantity(productId: number, quantity: number) {
      const cartStore = useCartStore()
      cartStore.updateQuantity(productId, quantity)
    },
    removeFromCart(productId: number) {
      const cartStore = useCartStore()
      cartStore.removeFromCart(productId)
    },
    checkout() {
      alert('Thank you for your purchase!')
    },
  },
})
</script>
