<script setup>
import Navbar from "../components/Navbar.vue";

</script>


<template>
  <main>
    <Navbar/>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="src/assets/ramadhan.jpg" class="d-block w-100" alt="1">
        </div>
        <div class="carousel-item">
          <img src="src/assets/s.jpg" class="d-block w-100" alt="2">
        </div>
        <div class="carousel-item">
          <img src="src/assets/a.jpg" class="d-block w-100" alt="3">
        </div>
        <div class="carousel-caption d-none d-md-block">
          <div id="jumbotron" class="jumbotron">
            <h1 class="display-4">Welcome To My Website</h1>
            <p class="lead">Ini merupakan Website Front-End yang saya buat menggunakan API yang disediakan oleh Quran.com guna untuk menyelesaikan tugas UTS mata kuliah Pemograman Web.</p>
            <hr class="my-4">
            <p>API Quran.com dapat di akses melalui tombol dibawah ini!</p>
            <a class="btn btn-primary btn-lg" href="#" role="button"> <a href="https://quran.api-docs.io/v4/getting-started/introduction" class="text-white fw-bold">Quran.com</a></a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
  <footer class="text-white text-center pb-1">
    <p> <strong>UTS Pemrograman Web</strong> <i class="bi bi-heart-fill text-danger"></i> By <a href="https://github.com/Dwinurfitrianto?tab=repositories" class="text-white fw-bold" >Dwi Nur Fitrianto</a>
      &copy; {{year}} </p>
  </footer>
</template>

<style>
footer{
  background-color: #b4710e;
}
#jumbotron{
  color: #181818;
  padding:100px;
  height: 690px;
  font-weight: bold;
}
.lead{
  font-family: "Times New Roman";
}
.display-4{
  margin-top: 17rem;
  font-weight: bold;
  font-family: "Rockwell Extra Bold";
}
 .carousel-item{
   height: 700px;
 }
.carousel-item galeri{
  margin-top: -120px;
}

#carouselExampleIndicators{
  box-shadow: 0 4px 20px rgba(0, 0, 0, 2);
  border-radius: 12px;
}
</style>
