<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="avatar"/>
      </div>
      <div class="window" @click="nextAdds">
        <div class="title-bar">
          <div class="title-bar-controls">
            <button aria-label="Close"></button>
            <button aria-label="Minimize"></button>
            <button aria-label="Zoom"></button>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div class="content" v-if="itemAdds === 0">
            <p class="title">Bienvenue sur mon portfolio.</p>
            <p>Je m'appelle Liam Le Strat et je suis un développeur full-stack.</p>
            <p>Vous pourrez ici trouver certains de mes projets. N'hésitez pas à me contacter.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 1">
            <p class="title">Parcours</p>
            <p>Je suis en dernière année de cycle ingénieur à IMT Nord Europe, j'ai effectué tout mon cursus en
              apprentissage. <br/><br/>Avec Orange à Saint-Malo en tant que technicien d'intervention pendant mon IUT puis chez Orange Business Services à
              Rennes en tant que développeur durant ma formation d'ingénieur.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 2">
            <p class="title">Métier</p>
            <p>Je travaille sur le projet IoT M2M Malima : projet avec environ 80 personnes dont la moitié en Roumanie.<br/><br/>
              J'ai travaillé au sein du groupe gérant les composants back-end France. <br/> Dans le cadre de mon projet de fin d'études j'ai rejoint l'équipe Smartsim
              afin d'effectuer la refonte d'une application Orange from scratch (front, back et CI/CD).</p>
          </div>
          <div class="content" v-else-if="itemAdds === 3">
            <p class="title">Projet</p>
            <p>Sur ce site, vous pourrez trouver certains de mes projets personnels, développés durant mon temps
              libre.<br/><br/>Passionné de musique, j'ai développé <b><a href="/trackerz">Trackerz</a></b> : un outil permettant de rechercher des artistes similaires à ceux que
              vous aimez.</p>
          </div>
        </transition>
      </div>
      <div class="arrow" :key="itemAdds">
        <button v-if="itemAdds !== 3" @click="nextAdds" class="legend">></button>
        <button v-else-if="itemAdds === 3" @click="nextAdds" class="legend">«</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      display: false,
      itemAdds: 0
    }
  },
  methods: {
    nextAdds() {
      if (this.itemAdds === 3) {
        this.itemAdds = 0
      } else {
        this.itemAdds++
      }
    }
  }
}
</script>
