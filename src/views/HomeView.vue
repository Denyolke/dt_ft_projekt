<template>
  <div>
    <section class="bg-dark text-light p-5 text-center">
      <div class="container p-5">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Join our team!</h1>
            <p class="lead my-4">
              We would be glad if you'd sign up for our newsletter. If you'd like to become a member
              of our research team, you can sign up right here, of course you can read more about us
              down below.
            </p>
            <router-link to="/signup">
              <button class="btn btn-primary btn-lg">Sign up</button>
            </router-link>
          </div>
          <img
            class="img-fluid d-none d-sm-block"
            style="width: 40%"
            src="@/assets/img/us.png"
            alt="Join us"
          />
        </div>
      </div>
    </section>

    <section id="aboutus" class="bgcolor p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>About us</h2>
            <div class="text">
              We are a medical research company, dealing in the testing and making of new medicines.
              With the help of our talented people, we made lifelong changes on the world, are you
              not interested yet?
            </div>
          </div>
          <div class="col-md">
            <img
              class="img-fluid"
              style="width: 60%; border-radius: 10px"
              src="@/assets/img/docandnurse.png"
              alt="About us"
            />
          </div>
        </div>
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <img
              class="img-fluid"
              style="width: 60%; border-radius: 10px"
              src="@/assets/img/office.jpg"
              alt="Office"
            />
          </div>
          <div class="col-md-6">
            <div class="text" style="text-align: right">
              The best technologies in the world are now available for you to expand your knowledge.
              If you'd like to read more about us, you can do it here. We would be really happy if
              you'd join our fleet.
              <br />
              <a href="https://www.lipsum.com/" class="btn btn-dark mt-3" onclick="showAlert()">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark text-light p-5 text-center" id="gallery">
      <div class="container-fluid justify-content center align-items-center">
        <h3 class="text-align: center p-2">Gallery</h3>
        <div
          id="carouselExampleCaptions"
          class="carousel slide align-items-center"
          style="max-width: 50vw; justify-content: center; align-items: center"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/img/r1r.png" class="d-block w-100" alt="Slide 1" />
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/r2r.png" class="d-block w-100" alt="Slide 2" />
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/r3r.png" class="d-block w-100" alt="Slide 3" />
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/r4r.png" class="d-block w-100" alt="Slide 4" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="bgcolor p-5">
      <h2 class="text-center mb-5">Contact</h2>
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-md">
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold">Name:</span> Univerzita Konštantína Filozofa v Nitre
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Location:</span> Tr. A. Hlinku 1, 949 01 Nitra
              </li>
              <li class="list-group-item"><span class="fw-bold">Tel:</span> +421 37 6408 111</li>
              <li class="list-group-item"><span class="fw-bold">Email:</span> ukf@ukf.sk</li>
              <li class="list-group-item"><span class="fw-bold">Ičo:</span> 00157716</li>
              <li class="list-group-item"><span class="fw-bold">Dič:</span> 2021246590</li>
            </ul>
          </div>
          <div class="col-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10614.839764656655!2d18.0910518!3d48.3084298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba2bad032d96b960!2sFakulta%20pr%C3%ADrodn%C3%BDch%20vied%20a%20informatiky!5e0!3m2!1ssk!2ssk!4v1669307792855!5m2!1ssk!2ssk"
              width="650"
              height="280"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
