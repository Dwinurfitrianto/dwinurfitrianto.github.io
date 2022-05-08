<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "Juz1",
  data(){
    return{
    Alfatihah : [],
    Albaqoroh : [],
      translations: [],
      translateBaqoroh: [],
    }
  },
  methods: {
    getAlfatihah(){
      fetch('https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=1&juz_number=1', {
        method: 'GET'
      })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.Alfatihah = json.verses;
        })
    },
    getAlbaqoroh(){
      fetch('https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=2&juz_number=1', {
        method: 'GET'
      })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.Albaqoroh = json.verses;
        })
    },
    getTranslateAlfatihah() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=1&juz_number=1', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translations = json.translations;
        });
    },
    getTranslateAlbaqoroh() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=2&juz_number=1', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translateBaqoroh = json.translations;
        });
    },
  },
  mounted() {
    this.getAlfatihah();
    this.getAlbaqoroh();
    this.getTranslateAlfatihah();
    this.getTranslateAlbaqoroh();
  }
}
</script>

<template>
  <main>
    <Navbar />

    <section class="banner">
      <div class="after"></div>
      <div class="text">
        <p class="title text-black text-center">
          "Juz 1"
        </p>
        <p class="subtitle text-center text-black">
          Surah Al-Fatihah 1-7 & Surah Al-Baqoroh 1-141
        </p>
      </div>
    </section>
    <hr>

    <p class="fatihah  mt-3 p-2"><strong>Al-Fatihah 1-7</strong></p>
    <hr>
    <div v-for="verse in Alfatihah">
      <p class="ayat text-end">
        {{verse.verse_key}} {{verse.text_imlaei}}
      </p>
    </div>
    <hr>
    <p class="baqoroh m-1 "><strong>Al-Baqoroh 1-141</strong></p>
    <hr>
    <div v-for="verse in Albaqoroh">
      <p class="ayat text-end">
        {{verse.verse_key}} {{verse.text_imlaei}}
      </p>
    </div>
    <p class="terjemahan m-1">Terjemahan</p>
    <hr>
    <p class="fatihah m-1"><strong>Al-Fatihah 1-7</strong></p>
    <hr>
    <div v-for="translations in translations">
      <p class="translate text-start">
        {{translations.text}}
      </p>
      <hr>
    </div>
    <p class="fatihah m-1 "><strong>Al-Baqoroh 1-141</strong></p>
    <hr>
    <div v-for="translations in translateBaqoroh">
      <p class="translate text-start">
        {{translations.text}}
      </p>
      <hr>
    </div>

   </main>
  <footer class="text-white text-center pb-1">
    <p> <strong>UTS Pemrograman Web</strong> <i class="bi bi-heart-fill text-danger"></i> By <a href="https://github.com/Dwinurfitrianto?tab=repositories" class="text-white fw-bold" >Dwi Nur Fitrianto</a>
      &copy; {{year}} </p>
  </footer>
</template>

<!--Get Imlaei Script of ayah-->

<style>
.baqoroh{
  background-color: #b4710e;
  padding: 5px;
}
.fatihah{
  background-color: #b4710e;
  padding: 5px;
}
</style>