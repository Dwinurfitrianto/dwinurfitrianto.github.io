<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "Juz",
  data() {
    return {
      Albaqoroh: [],
      translateBaqoroh: [],
    }
  },
  methods: {
    getAlbaqoroh() {
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=2', {
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
    getTranslateAlbaqoroh() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?juz_number=2', {
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
    this.getAlbaqoroh();
    this.getTranslateAlbaqoroh();
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
          "Juz 2"
        </p>
        <p className="subtitle text-center text-black">
          Surah Al-Baqoroh 142-252
        </p>
      </div>
    </section>
    <hr>

    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>
    <div v-for="verse in Albaqoroh">
      <p className="ayat text-end">
        {{ verse.verse_key }} {{ verse.text_uthmani }}
      </p>
      <hr>
    </div>
    <p className="terjemahan m-1">Terjemahan</p>
    <hr>
    <div v-for="translations in translateBaqoroh">
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