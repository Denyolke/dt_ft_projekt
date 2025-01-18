import { defineStore } from 'pinia'

interface CartItem {
  productId: number
  quantity: number
  name: string
  price: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartItem[],
  }),

  getters: {
    totalItems(state): number {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0)
    },

    totalPrice(state): number {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },

  actions: {
    initializeCart() {
      try {
        const savedCart = localStorage.getItem('cart')
        this.cartItems = savedCart ? JSON.parse(savedCart) : []
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    },

    saveCart() {
      try {
        localStorage.setItem('cart', JSON.stringify(this.cartItems))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
    },

    addToCart(product: { id: number; name: string; price: number; image: string }) {
      const existingItem = this.cartItems.find((item) => item.productId === product.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartItems.push({
          productId: product.id,
          quantity: 1,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      }
      this.saveCart()
    },

    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter((item) => item.productId !== productId)
      this.saveCart()
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.cartItems.find((item) => item.productId === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
          this.saveCart()
        }
      }
    },
  },
})
