<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>

export default {
  name: "Asy-Syams",
  data(){
    return{
      chapter: null,
      verses: [],
      translations: [],
      audio_file: null,
      chapter_info:null,
    }
  },
  methods: {
    getChapter(){
      fetch('https://api.quran.com/api/v4/chapters/36?language=id',{
        method: 'GET'
      })
        .then(response => {
          if(response.ok){
            return response.json();
          }
        })
        .then(json => {
          this.chapter = json.chapter;
        })
    },
    getQuran(){
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=36', {
        method: 'GET'
      })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.verses = json.verses;
        })
    },
    getTranslate() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=36', {
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
    getAudio() {
      fetch('https://api.quran.com/api/v4/chapter_recitations/5/36', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          //console.log(json)
          this.audio_file = json.audio_file;
          //this.audio_file = this.getAudio(audio_file.audio.url);

        });

    },
    getInfo() {
      fetch('https://api.quran.com/api/v4/chapters/36/info?language=id', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.chapter_info=json.chapter_info;
        });
    },
  },



  mounted() {
    this.getChapter();
    this.getQuran();
    this.getTranslate();
    this.getAudio();
    this.getInfo();
  }
}
</script>

<template>
  <main>
    <Navbar/>
    <section class="heeder">
      <div class="atas"></div>
      <div class="text">
        <p class="title text-black">
          QS. Yasin (Makkiyah)
        </p>
        <p class="subtitle text-center text-black">
          Surah ke 36
        </p>
      </div>
    </section>
    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>
    <section>
      <h1 class="namasurah text-start" v-if="chapter">{{chapter.name_arabic}}
        <br>{{chapter.verses_count}} Ayat</h1>
      <hr>
      <p class="info" v-if="chapter_info">{{chapter_info.text}}</p>
      <p v-if="audio_file" class="audio">
        <audio controls>
          <source :src=audio_file.audio_url type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </p>
      <hr>
      <div v-for="(verse,index) in verses">
        <p class="ayat text-end">
          {{verse.text_uthmani}} {{verse.verse_key}}
        </p>
        <p class="arti" v-if="translations">{{index+1}}.{{translations[index].text}}</p>
        <hr>
      </div>

      <footer class="text-white text-center pb-1">
        <p> <strong>UTS Pemrograman Web</strong> <i class="bi bi-heart-fill text-danger"></i> By <a href="https://github.com/Dwinurfitrianto?tab=repositories" class="text-white fw-bold" >Dwi Nur Fitrianto</a>
          &copy; {{year}} </p>
      </footer>


    </section>
  </main>
</template>
<!--Get Chapter-->
<!--Get Uthmani Script of ayah-->
<!--Get a single translation-->
<!--Get single Surah audio for specific reciter-->
<!--Chapter Info-->


<style>
.text-end{
  margin-right: 20px;
}
.namasurah{
  margin-left: 20px;
  font-weight: bold;
  font-size: 35px;
}

.ayat{
  font-weight: bold;
  font-size: 25px;
  margin-right: 20px;
  margin-left: 20px;
}
.heeder{
  height: 50vh;
  background-image: url("src/assets/kom.jpg");
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bernard MT Condensed";
  box-shadow: 0 3px 20px rgba(0, 0, 0, 2);
}

.atas{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(231, 169, 0, 0.4);
}
.text{
  margin-top: 3rem;
  z-index: 1;
  padding: 20px 25px;
  border: 4px solid #000000;
  font-size: 35px;
}
.info{
  background-color: rgb(231, 169, 0, 0.4);
}
.arti{
  margin-left: 20px;
  margin-right: 20px;
}

</style>
