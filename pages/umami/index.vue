<template>
  <div>
    <h1>Recherche de recettes</h1>
    <form>
      <label for="ingredients">Ingrédients :</label>
      <input type="text" id="ingredients" name="ingredients"
             placeholder="Entrez vos ingrédients séparés par une virgule">
      <button id="searchBtn">Rechercher</button>
    </form>
    <div id="resultContainer"></div>
  </div>
</template>

<script>
const searchBtn = document.getElementById('searchBtn');
const resultContainer = document.getElementById('resultContainer');

searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const ingredientsInput = document.getElementById('ingredients');
  const query = ingredientsInput.value.trim().toLowerCase();
  if (!query) {
    return;
  }
  const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=260ff45f&app_key=478c12f0a2cd8aa7ba2420857a795a87`;

  $.ajax({
    url: url,
    type: 'GET',
    success: function (response) {
      const hits = response.hits;
      if (hits.length > 0) {
        resultContainer.innerHTML = '<h2>Résultats de la recherche :</h2><ul>' + hits.map(function (hit) {
          return '<li><h2>' + hit.recipe.label + '</h2>' +
              '<p>' + hit.recipe.ingredientLines.join('<br>') + '</p><p>' +
              '<a href="' + hit.recipe.url + '" target="_blank"> </a>Voir la recette complète</a></li>';
        }).join('') + '</ul>';
      } else {
        resultContainer.innerHTML = '<p>Aucun résultat trouvé pour ces ingrédients.</p>';
      }
    },
    error: function (xhr, status, error) {
      resultContainer.innerHTML = '<p>Une erreur est survenue lors de la recherche : ' + error + '</p>';
    }
  });
});
</script>

<style scoped>
h1, h2 {
  margin-top: 0;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type=text] {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}

li h2 {
  margin-top: 0;
}

li p {
  margin-top: 0;
  font-size: 14px;
}
</style>
