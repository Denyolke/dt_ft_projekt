import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  productId: number
  quantity: number
  name: string
  price: number
  image: string
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])

  const initializeCart = () => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      cartItems.value = JSON.parse(savedCart)
    }
  }

  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }

  const addToCart = (product: any) => {
    const existingItem = cartItems.value.find((item) => item.productId === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({
        productId: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
    saveCart()
  }

  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter((item) => item.productId !== productId)
    saveCart()
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = cartItems.value.find((item) => item.productId === productId)
    if (item) {
      item.quantity = quantity
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        saveCart()
      }
    }
  }

  const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    initializeCart,
  }
})
