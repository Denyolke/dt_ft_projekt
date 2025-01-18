<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    FooterComponent,
  },
  mounted() {},
})
</script>

<template>
  <div id="app">
    <Navbar />

    <div class="d-flex flex-column min-vh-100">
      <div class="flex-grow-1 bgcolor">
        <router-view />
      </div>

      <FooterComponent />
    </div>
  </div>
</template>
