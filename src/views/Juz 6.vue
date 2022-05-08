<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "Juz6",
  data() {
    return {
      Annisa: [],
      Almaidah : [],
      translateNisa: [],
      translateMaidah: [],
    }
  },
  methods: {
    getAnnisa() {
      fetch('https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=4&juz_number=6', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(json => {
          this.Annisa = json.verses;
        })
    },
    getAlmaidah() {
      fetch('https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=5&juz_number=6', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(json => {
          this.Almaidah = json.verses;
        })
    },
    getTranslateAnnisa() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=4&juz_number=6', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translateNisa = json.translations;
        });
    },
    getTranslateAlmaidah() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=5&juz_number=6', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translateMaidah = json.translations;
        });
    },
  },
  mounted() {
    this.getAnnisa();
    this.getAlmaidah();
    this.getTranslateAnnisa();
    this.getTranslateAlmaidah();
  }
}
</script>

<template>
  <main>
    <Navbar/>

    <section className="banner">
      <div className="after"></div>
      <div className="text">
        <p className="title text-black text-center">
          "Juz 6"
        </p>
        <p className="subtitle text-center text-black">
          Surah An-Nisa 148-176 & Surah Al-Maidah 1-81
        </p>
      </div>
    </section>
    <hr>

    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>
    <div v-for="(verse,index) in Annisa">
      <p className="ayat text-end">
        {{ verse.verse_key }} {{ verse.text_imlaei}}
      </p>
      <p class="arti" v-if="translateNisa">{{index+148}}. {{translateNisa[index].text}}</p>
      <hr>
    </div>
    <p class="baqoroh m-1 "><strong>Al-Maidah 1-81 </strong></p>
    <hr>
    <div v-for="(verse,index) in Almaidah">
      <p class="ayat text-end">
        {{verse.verse_key}} {{verse.text_imlaei}}
      </p>
      <p class="arti" v-if="translateMaidah">{{index+1}}. {{translateMaidah[index].text}}</p>
      <hr>
    </div>

  </main>
  <footer className="text-white text-center pb-1">
    <p><strong>UTS Pemrograman Web</strong> <i className="bi bi-heart-fill text-danger"></i> By <a
      href="https://github.com/Dwinurfitrianto?tab=repositories" className="text-white fw-bold">Dwi Nur Fitrianto</a>
      &copy; {{ year }} </p>
  </footer>
</template>

<!--Get Uthmani simple script of ayah-->

<style>
.baqoroh {
  background-color: #b4710e;
  padding: 5px;
}

.fatihah {
  background-color: #b4710e;
  padding: 5px;
}
</style>