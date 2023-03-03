<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="avatar"/>
      </div>
      <div class="window">
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
              apprentissage avec Orange à Saint-Malo en tant que technicien d'intervention ou Orange Business Services à
              Rennes en tant que développeur.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 2">
            <p class="title">Métier</p>
            <p>Je travaille sur le projet IoT M2M Malima, composé d'environ 80 personnes dont la moitié en Roumanie.
              J'ai
              travaillé au sein de l'équipe gérant les composants back-end France, mais j'ai récemment changé d'équipe
              dans le cadre de mon projet de fin d'études : la refonte d'une application Orange from scratch (front,
              back
              et CI/CD).</p>
          </div>
          <div class="content" v-else-if="itemAdds === 3">
            <p class="title">Projet</p>
            <p>Sur ce site, vous pourrez trouver certains de mes projets personnels, développés durant mon temps
              libre.<br/><b>Trackerz</b> est un outil qui vous permet de rechercher des artistes similaires à ceux que
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

<style>
.container {
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 20vh;
}

.banner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.adds .window {
  margin-top: 5vh;
  width: 45vw;
  margin-left: 5vw;
}

.content {
  padding-top: 2vh;
}

.avatar img {
  transform: translateX(+6vw);
}

.window {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin: 3vw;
  padding: 1vw;
  margin-top: 10vh;
  padding-bottom: 0;
  width: 30vw;
  height: 25vh;
}

.title {
  font-weight: 600;
}

.window:hover {
  background: rgba(255, 255, 255, 0.15);
}

.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.title-bar-controls {
  display: flex;
}

.title-bar-controls button {
  width: 14px;
  height: 14px;
  margin-left: 8px;
  border-radius: 50%;
  border: none;
  margin-top: 10px;
  opacity: 65%;
}

.title-bar-controls button:hover {
  opacity: 100%;
}

.title-bar-controls button:nth-child(1) {
  background-color: #f94339;
}

.title-bar-controls button:nth-child(2) {
  background-color: #f9b31b;
}

.title-bar-controls button:nth-child(3) {
  background-color: #16c430;
}

.legend {
  color: rgb(166, 165, 165);
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  margin: auto;
  width: 40%;
  font-size: 90px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

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
