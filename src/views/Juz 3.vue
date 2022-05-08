<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "Juz3",
  data() {
    return {
      Albaqoroh: [],
      Alimran : [],
      translateBaqoroh: [],
      translateImran: [],
    }
  },
  methods: {
    getAlbaqoroh() {
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani_simple?chapter_number=2&juz_number=3', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(json => {
          this.Albaqoroh = json.verses;
        })
    },
    getAlimran() {
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani_simple?chapter_number=3&juz_number=3', {
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
    getTranslateAlbaqoroh() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=2&juz_number=3', {
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
    getTranslateAlimran() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=3&juz_number=3', {
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
  },
  mounted() {
    this.getAlbaqoroh();
    this.getAlimran();
    this.getTranslateAlbaqoroh();
    this.getTranslateAlimran();
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
          "Juz 3"
        </p>
        <p className="subtitle text-center text-black">
          Surah Al-Baqoroh 253-286 & Surah Al-Imran 1-92
        </p>
      </div>
    </section>
    <hr>

    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>
    <div v-for="(verse,index) in Albaqoroh">
      <p className="ayat text-end">
        {{ verse.verse_key }} {{ verse.text_uthmani_simple }}
      </p>
      <p class="arti" v-if="translateBaqoroh">{{index+253}}. {{translateBaqoroh[index].text}}</p>
      <hr>
    </div>
    <p class="baqoroh m-1 "><strong>Al-Imran 1-92</strong></p>
    <hr>
    <div v-for="(verse,index) in Alimran">
      <p class="ayat text-end">
        {{verse.verse_key}} {{verse.text_uthmani_simple}}
      </p>
      <p class="arti" v-if="translateImran">{{index+1}}. {{translateImran[index].text}}</p>
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