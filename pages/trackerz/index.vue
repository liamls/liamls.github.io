<template>
  <div class="bodycontainer">
    <h1>Bienvenue sur Trackers</h1>
    <h2>Tu vas pouvoir trouver des artistes similaires à tes goûts</h2>
    <form id="searchForm">
      <label for="searchInput">Entre un nom d'artiste :</label>
      <input type="text" id="searchInput" required>
      <button @click.prevent='searchArtists'>Go</button>
    </form>
    <div v-if="artists!==[]">
      <div v-for="artist in artists" :key="artist.name" class="result-item">
        <h3>{{ artist.name }}</h3>
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
      let searchInput = document.getElementById('searchInput');
      let resultContainer = document.getElementById('resultContainer');
      let query = searchInput.value;
      let apiKey = '26ece191ecec87678d1843a42fa38a06'; // Replace with your own API key
      let response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${query}&api_key=${apiKey}&format=json`);
      let data = await response.json();
      console.log(data);
      this.artists = data.similarartists.artist;
      return this.artists;
    }
  }
}
</script>

<style scoped>
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
}

button[type="submit"] {
  padding: 5px 10px;
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.result-item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
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
</style>
