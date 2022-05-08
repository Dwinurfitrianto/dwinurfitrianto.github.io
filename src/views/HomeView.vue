<script setup>
import Navbar from "../components/Navbar.vue";

</script>


<template>
  <main>
    <Navbar/>
    <section class="home">
      <div class="awal"></div>
      <div class="opening">
        <p class="welcome text-center text-black">
          "Welcome To My Website"
        </p>
        <p class="kata text-center text-black">
          Ini merupakan Website Front-End yang saya buat menggunakan API yang disediakan oleh Quran.com guna untuk menyelesaikan tugas UTS mata kuliah Pemograman Web.
        </p>
        <p class="api text-center">API Quran.com dapat di akses melalui tombol dibawah ini!</p>
        <a class="btn btn-danger btn-lg" href="#" role="button"> <a href="https://quran.api-docs.io/v4/getting-started/introduction" class="text-dark fw-bold">Quran.com</a></a>
      </div>
    </section>
  </main>
  <hr>
  <footer class="text-white text-center pb-1">
    <p> <strong>UTS Pemrograman Web</strong> <i class="bi bi-heart-fill text-danger"></i> By <a href="https://github.com/Dwinurfitrianto?tab=repositories" class="text-white fw-bold" >Dwi Nur Fitrianto</a>
      &copy; {{year}} </p>
  </footer>
</template>

<style>
footer{
  background-color: #b4710e;
}
.awal{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(231, 169, 0, 0.4);
}
.home{
  height: 90vh;
  background-image: url("src/assets/kom.jpg");
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bernard MT Condensed";
  box-shadow: 0 3px 20px rgba(0, 0, 0, 2);
}
.opening{
  font-size: 20px;
  margin-top: 2rem;
  z-index: 1;
  padding: 250px 270px;

}
.welcome{
  font-size: 50px;
  border: 4px solid #000000;
}
.api{
  z-index: 1;
}
.btn{
  margin-left: 430px;
}
</style>
