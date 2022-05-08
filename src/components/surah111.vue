<script>
export default {
  name: "surah111",
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
      fetch('https://api.quran.com/api/v4/chapters/111?language=id',{
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
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=111&juz_number=30', {
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
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=111&juz_number=30', {
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
      fetch('https://api.quran.com/api/v4/chapter_recitations/5/111', {
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
      fetch('https://api.quran.com/api/v4/chapters/111/info?language=id', {
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
    <section>
      <h1 class="namasurah text-start" v-if="chapter">{{chapter.name_arabic}} ({{chapter.translated_name.name}})
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
      <div class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
      <hr>
      <div v-for="(verse,index) in verses">
        <p class="ayat text-end">
          {{verse.text_uthmani}} {{verse.verse_key}}
        </p>
        <p class="arti" v-if="translations">{{index+1}}.{{translations[index].text}}</p>
        <hr>
      </div>


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

.info{
  background-color: rgb(231, 169, 0, 0.4);
}
.arti{
  margin-left: 20px;
  margin-right: 20px;
}

</style>
