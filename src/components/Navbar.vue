<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'Navbar',
  components: {},
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow-lg fixed-top ">
    <div class="container">
      <a class="navbar-brand" style="color: white" href="#">Dwi Nur Fitrianto</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/listchapters">List Chapters</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/yasin">Yasin</a>
          </li>
          <!--<li class="nav-item">
            <a class="nav-link" href="/juz">Juz 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/juz2">Juz 2</a>
          </li>-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Juz
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/juz">Juz 1</a></li>
              <li><a class="dropdown-item" href="/juz2">Juz 2</a></li>
              <li><a class="dropdown-item" href="/juz3">Juz 3</a></li>
              <li><a class="dropdown-item" href="/juz4">Juz 4</a></li>
              <li><a class="dropdown-item" href="/juz5">Juz 5</a></li>
              <li><a class="dropdown-item" href="/juz6">Juz 6</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/juz30">Juz 30</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  background-color: #b4710e;
}
.navbar-brand {
  font-family: "Rockwell Extra Bold";
  font-weight: bold;
}
.nav-link:hover {
  font-family: "Rockwell Condensed";
  border-bottom: 3px solid #181818;
}
.container{
  background-color: #e7a900;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 2);
  border-radius: 12px;
}
</style>
