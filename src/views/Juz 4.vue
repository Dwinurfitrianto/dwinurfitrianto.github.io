<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "Juz4",
  data() {
    return {
      Alimran : [],
      Annisa : [],
      translateImran: [],
      translatenisa: [],
    }
  },
  methods: {
    getAlimran() {
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=3&juz_number=4', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(json => {
          this.Alimran = json.verses;
        })
    },
    getAnnisa() {
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=4&juz_number=4', {
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
    getTranslateAlimran() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=3&juz_number=4', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translateImran = json.translations;
        });
    },
    getTranslateAnnisa() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=4&juz_number=4', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translatenisa = json.translations;
        });
    },
  },
  mounted() {
    this.getAlimran();
    this.getAnnisa();
    this.getTranslateAlimran();
    this.getTranslateAnnisa();
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
          "Juz 4"
        </p>
        <p className="subtitle text-center text-black">
          Surah Al-Imran 93-200 & Surah An-Nisa 1-23
        </p>
      </div>
    </section>
    <hr>

    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>
    <div v-for="verse in Alimran">
      <p className="ayat text-end">
        {{ verse.verse_key }} {{ verse.text_uthmani }}
      </p>
      <hr>
    </div>
    <p class="baqoroh m-1 "><strong>An-Nisa 1-23</strong></p>
    <hr>
    <div v-for="verse in Annisa">
      <p class="ayat text-end">
        {{verse.verse_key}} {{verse.text_uthmani}}
      </p>
      <hr>
    </div>
    <p className="terjemahan m-1">Terjemahan</p>
    <hr>
    <p class="baqoroh m-1 "><strong>Al-Imran 93-200</strong></p>
    <hr>
    <div v-for="translations in translateImran">
      <p className="translate text-start">
        {{ translations.text }}
      </p>
      <hr>
    </div>
    <p class="fatihah m-1 "><strong>An-Nisa 1-23</strong></p>
    <hr>
    <div v-for="translations in translatenisa">
      <p class="translate text-start">
        {{translations.text}}
      </p>
      <hr>
    </div>

  </main>
  <footer className="text-white text-center pb-1">
    <p><strong>UTS Pemrograman Web</strong> <i className="bi bi-heart-fill text-danger"></i> By <a
      href="https://github.com/Dwinurfitrianto?tab=repositories" className="text-white fw-bold">Dwi Nur Fitrianto</a>
      &copy; {{ year }} </p>
  </footer>
</template>

<!--Get Uthmani script of ayah-->

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