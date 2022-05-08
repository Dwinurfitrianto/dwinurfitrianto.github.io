<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>
export default {
  name: "List Chapters",
  data(){
    return{
      chapters: [],
      audio_files: [],
    }
  },
  methods: {
    getChapter2() {
      fetch('https://api.quran.com/api/v4/chapters?language=id', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.chapters = json.chapters;
        })
    },
    getAudioFull() {
      fetch('https://api.quran.com/api/v4/chapter_recitations/5?language=id', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          //console.log(json)
          this.audio_files = json.audio_files;
          //this.audio_file = this.getAudio(audio_file.audio.url);

        });
    },
  },
  mounted() {
    this.getChapter2();
    this.getAudioFull();
  }
}
</script>

<template>
  <main>
    <Navbar />
    <section class="banner">
        <div class="after"></div>
      <div class="pembukaan">
        <p class="list text-center text-black">
          "List Chapters"
        </p>
        <p class="kata text-center text-black">
          Al Qur'an atau Qur'an, adalah sebuah kitab suci utama dalam agama Islam, yang umat Muslim percaya bahwa kitab ini diturunkan oleh Allah, kepada Nabi Muhammad. Kitab ini terbagi ke dalam beberapa surah dan setiap surahnya terbagi ke dalam beberapa ayat. Al-Qur'an terdiri dari 30 juz yang di dalamnya terdapat 114 Surah dan 6666 Ayat.
        </p>
      </div>
      </section>
    <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
    <hr>

    <div id="kumpulan" v-for="(chapters,index) in chapters">
      <p class="surah text-start">
        Surah {{chapters.id}}
        <br>{{chapters.name_simple}} ({{chapters.name_arabic}})
        <br>({{chapters.translated_name.name}})
        <br>{{chapters.verses_count}} Ayat
        <br>{{chapters.revelation_place}}
      </p>
      <p class="audio" v-if="audio_files">
        <audio controls>
          <source :src=audio_files[index].audio_url type="audio/mpeg">Your browser does not support the audio element.</audio> </p>
      <hr>
    </div>



    </main>
  <footer class="text-white text-center pb-1">
    <p> <strong>UTS Pemrograman Web</strong> <i class="bi bi-heart-fill text-danger"></i> By <a href="https://github.com/Dwinurfitrianto?tab=repositories" class="text-white fw-bold" >Dwi Nur Fitrianto</a>
      &copy; {{year}} </p>
  </footer>
  </template>
<!--List Chapters-->
<!--List of all surah audio files for specific reciter-->

  <style>
  .bismilah{
    font-weight: bold;
    font-size: 30px;
    background-color: #e7a900;
  }
  .surah{
    font-size: 20px;
    margin-left: 20px;
    font-family: "Times New Roman";
    font-weight: bold;
    margin-top: 1rem;
  }
  .after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(231, 169, 0, 0.4);
  }
  .banner{
    height: 60vh;
    background-image: url("src/assets/kom.jpg");
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bernard MT Condensed";
    box-shadow: 0 3px 20px rgba(0, 0, 0, 2);
  }
  .pembukaan{
    font-size: 20px;
    margin-top: 2rem;
    z-index: 1;
    padding: 250px 270px;

  }
  .list{
    font-size: 50px;
    border: 4px solid #000000;
  }
  .kata{
    font-family: "Times New Roman";
    font-weight: bold;
    font-size: 18px;
  }
  .suara{
    background-color: #e7a900;
    padding: 10px;
    font-weight: bold;
    font-family: "Rockwell Extra Bold";
  }
  </style>