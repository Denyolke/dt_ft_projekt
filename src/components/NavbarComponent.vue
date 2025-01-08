<template>
  <nav
    class="navbar navbar-expand-lg bg-dark fixed-top navbar-dark py-1 px-5"
    style="font-family: 'Segoe UI', Tahoma, Verdana, sans-serif"
  >
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/img/TatyiLekaren.png" style="width: 130px" alt="Tatyi Pharmacy Logo" />
      </router-link>

      <!-- Toggler Button for Mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Items -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-0">
          <!-- Changed from ms-auto to ms-0 to align items to the left -->
          <li v-for="(link, name) in menuItems" :key="name" class="nav-item">
            <router-link
              :to="link"
              class="nav-link"
              active-class="active"
              exact-active-class="active"
            >
              {{ name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineComponent({
  name: 'NavbarComponent',
  data() {
    return {
      menuItems: {
        Home: '/',
        Researchers: '/researchers',
        Products: '/products',
        FAQ: '/faq',
      },
      isCollapsed: true,
    }
  },
  methods: {
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed
    },
  },
})
</script>
