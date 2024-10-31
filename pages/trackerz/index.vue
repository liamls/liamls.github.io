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
          <NuxtLink class="link" to="https://www.last.fm/home">Via l'API @lastfm</NuxtLink><br />
          <form id="searchForm" @submit.prevent='searchArtists'>
            <div class="recherche">
              <input type="text" id="searchInput" required placeholder="Entre un nom d'artiste">
              <button type="submit"><strong>GO</strong></button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="result" v-if="artists.length > 0">
      <div v-for="artist in artists" :key="artist.name" class="result-item">
        <a class="lien" :href="artist.url" target="_blank" rel="noopener noreferrer">{{ artist.name }}</a>
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
      try {
        this.artists = [];
        const searchInput = document.getElementById('searchInput');
        const query = searchInput.value;
        const apiKey = '26ece191ecec87678d1843a42fa38a06';
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${query}&api_key=${apiKey}&format=json`);
        const data = await response.json();
        const maxArtists = window.innerWidth <= 480 ? 3 : 5; // 3 pour mobile, 5 par défaut
        this.artists = data.similarartists.artist.slice(0, maxArtists);

        if (this.artists.length < 1) { throw (error) }
      } catch (error) {
        alert("Erreur lors de la recherche d'artiste - Aucune données pour cet artiste");
      }
    }
  }
}
</script>


<style scoped>
.window {
  height: auto;
}

.link {
  color: lightgray;
  font-size: 80%;
  opacity: 80%;

}

#searchForm {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  border: 1px solid #ccc;
  height: 2rem;
  border-radius: 4px;
  background-color: rgb(190, 190, 190);
  width: 20vw;
}

input:focus {
  outline: none;
}

#searchForm button {
  background-color: black;
  color: #fff;
  opacity: 80%;
  border: none;
  height: 2.2rem;
  width: auto;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.recherche {
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  width: auto;
  font-size: 16px;
  align-items: center;
}

#searchForm button:hover {
  opacity: 100%;
}

.result {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.result-item {
  margin: 0.5rem;
  padding: 1rem;
  font-weight: bold;
  border-radius: 4px;
  font-size: 16px;
  background-color: rgba(32, 32, 32, 0.918);
}

.result-item a {
  color: white;
  text-decoration: nrgba(77, 76, 76, 0.918);
  text-decoration: none;
}


@media only screen and (max-width: 480px) {
  input[type="text"] {
    width: 80vw;
  }

  .result {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .result-item {
    margin: 0.4rem;
    padding: 0.8rem;
    font-weight: bold;
  }
}
</style>