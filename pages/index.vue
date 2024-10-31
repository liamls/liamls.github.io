<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar_hi.png" alt="avatar" />
      </div>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-controls">
            <button aria-label="Close"></button>
            <button aria-label="Minimize"></button>
            <button aria-label="Zoom"></button>
          </div>
        </div>
        <p class="title">Bienvenue sur mon portfolio.</p>
        <p>Je m'appelle Liam Le Strat, ingénieur diplômé de l'IMT Nord Europe et développeur Full Stack.</p>
        <p>Actuellement, je suis développeur à l'INSEE, travaillant sur un site de datavisualisation et un projet Open
          Data. Vous trouverez ici certains de mes projets.</p>
        <p>Je suis à la recherche d'un poste de développeur Full Stack ou Front. N'hésitez pas à me contacter !</p>
      </div>
    </div>
    <p class="mobile-only">Ceci est la version mobile du site, bien que responsive je vous encourage à vous rendre sur
      la portfolio via un ordinateur.</p>
  </div>
</template>

<style scoped>
.window {
  cursor: default;
}
</style>