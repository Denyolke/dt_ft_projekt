<template>
  <footer
    class="p-5 bg-dark text-white text-center position-relative"
    style="font-family: 'Segoe UI', Tahoma, Verdana, sans-serif"
  >
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-md p-5">
          <p class="lead">
            Website of the TatyiPharmacy research company.<br />
            Made using VUE JS & Bootstrap. <i class="bi bi-bootstrap"></i>
          </p>
        </div>

        <div class="col-md">
          <p class="lead">Copyright &copy; 2025 Dániel Tátyi</p>
        </div>

        <div class="col-md">
          <p class="lead">
            Constantine the Philosopher University<br />
            Nitra
          </p>
        </div>

        <div class="col-12">
          <a href="#" class="position-absolute bottom-0 end-0 px-5">
            <i class="bi bi-arrow-up-circle h1 text-white"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
})
</script>
