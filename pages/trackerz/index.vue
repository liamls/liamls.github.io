<template>
  <div class="container">
    <div class="banner">
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-controls">
            <button aria-label="Close"></button>
            <button aria-label="Minimize"></button>
            <button aria-label="Zoom"></button>
          </div>
        </div>
        <div class="content">
          <h1>Bienvenue sur Trackerz</h1>
          <p>Trackerz est un outil qui vous permet de rechercher des artistes similaires à ceux que vous aimez.</p>
          <NuxtLink class="legend" to="https://www.last.fm/home">Via l'API @lastfm</NuxtLink>
          <form id="searchForm">
            <label for="searchInput">Entre un nom d'artiste :</label>
            <input type="text" id="searchInput" required>
            <button @click.prevent='searchArtists'>Go</button>
          </form>
        </div>
      </div>
    </div>
    <div class="result" v-if="artists !== []">
      <div v-for="artist in artists" :key="artist.name" class="result-item">
        <a :href="artist.url" target="_blank" rel="noopener noreferrer">{{ artist.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trackerz',
  data() {
    return {
      artists: []
    }
  },
  methods: {
    async searchArtists() {
      this.artists = [];
      this.artistName = [];
      this.artistData = [];
      let searchInput = document.getElementById('searchInput');
      let resultContainer = document.getElementById('resultContainer');
      let query = searchInput.value;
      let apiKey = '26ece191ecec87678d1843a42fa38a06';
      let response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${query}&api_key=${apiKey}&format=json`);
      let data = await response.json();
      this.artists = data.similarartists.artist;
      if (this.artists.length >= 5) {
        this.artists = this.artists.slice(0, 5);
      }
      console.log(this.artists);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 5vh;
  flex-direction: column;
  align-items: center;
}

.result {
  display: flex;
  margin-top: 5vh;
}

.result-item {
  background-color: rgba(255, 255, 255, 0.396);
}
.result-item a{
  color: white;
  text-decoration: none;
}
.window {
  margin: 0;
  height: 100%;
}

form {
  margin: 20px 0;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.396);
}

#searchForm button {
  padding: 5px 10px;
  background-color: black;
  opacity: 60%;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

#searchForm button:hover {
  opacity: 80%;
}

.result-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.legend {
  font-size: 15px;
}

.result-item img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.result-item h3 {
  font-size: 18px;
  margin: 0;
}

@media only screen and (max-width: 480px) {
  .window {
    margin-top: 10vh;
    width: 90vw;
    margin-left: 0;
    font-size: 15px;
    padding: 2vw;
  }

  h1 {
    font-size: 18px;
  }
}
</style>
