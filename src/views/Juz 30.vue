<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "Juz30",
  data() {
    return {
      juz30: [],
      translatejuz30: [],
    }
  },
  methods: {
    getJuz30() {
      fetch('https://api.quran.com/api/v4/quran/verses/indopak?juz_number=30', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(json => {
          this.juz30 = json.verses;
        })
    },
    getTranslatejuz30() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?juz_number=30', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translatejuz30 = json.translations;
        });
    },
  },
  mounted() {
    this.getJuz30();
    this.getTranslatejuz30();
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
          "Juz 30"
        </p>
        <p className="subtitle text-center text-black">
          Surah Al-Naba' s/d Surah An-Nas
        </p>
      </div>
    </section>
    <hr>

    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>
    <div v-for="verse in juz30">
      <p className="ayat text-end">
        {{ verse.verse_key }} {{ verse.text_indopak }}
      </p>
      <hr>
    </div>
    <p className="terjemahan m-1">Terjemahan</p>
    <hr>
    <div v-for="translations in translatejuz30">
      <p className="translate text-start">
        {{ translations.text }}
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

<!--Get Imlaei Script of ayah-->

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