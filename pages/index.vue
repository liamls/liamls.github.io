<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="avatar" />
      </div>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-controls">
            <button aria-label="Close"></button>
            <button aria-label="Minimize"></button>
            <button aria-label="Zoom"></button>
          </div>
        </div>
        <div class="content">
          <p class="title">Bienvenue sur mon portfolio.</p>
          <p>Je m'appelle Liam Le Strat et je suis un développeur full-stack.</p>
          <p>Vous pourrez ici trouver certains de mes projets. N'hésitez pas à me contacter.</p>
        </div>
        <button @click="display = !display" class="legend">En savoir plus</button>
      </div>
    </div>
    <div v-show="display" class="adds">
      <div class="window">
        <div class="content2" v-if="itemAdds === 1">
          <p class="title">Parcours</p>
          <p>Je suis en dernière année de cycle ingénieur à IMT Nord Europe, j'ai effectué tout mon cursus en
            apprentissage avec Orange à Saint-Malo en tant que technicien d'intervention ou Orange Business Services à
            Rennes en tant que développeur.</p>
        </div>
        <div class="content2" v-else-if="itemAdds === 2">
          <p class="title">Métier</p>
          <p>Je travaille sur le projet IoT M2M Malima, composé d'environ 80 personnes dont la moitié en Roumanie. J'ai
            travaillé au sein de l'équipe gérant les composants back-end France, mais j'ai récemment changé d'équipe
            dans le cadre de mon projet de fin d'études : la refonte d'une application Orange from scratch.</p>
        </div>
        <button @click="nextAdds" class="legend">Suivant</button>
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

.adds {
  bottom: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}
.adds .window {
  margin-top: 5vh;
  width: 40vw;
}
.content {
  padding-top: 2vh;
}
.content2 {
  padding-top: 0;
  transition: all 0.2s;
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
  height: 100%;
  width: 30vw;
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
  align-items: left;
}

.title-bar-controls button {
  width: 14px;
  height: 14px;
  margin-left: 8px;
  border-radius: 50%;
  border: none;
  margin-top: 10px;
  opacity: 75%;
}

.title-bar-controls button:hover {
  cursor: pointer;
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
}
</style>

<script>
export default {
  name: 'Index',
  data() {
    return {
      display: false,
      itemAdds: 1
    }
  },
  methods: {
    nextAdds() {
      if (this.itemAdds === 2) {
        this.itemAdds = 1
      } else {
        this.itemAdds++
      }
    }
  }
}
</script>
