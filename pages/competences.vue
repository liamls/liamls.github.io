<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar_mac.png" alt="avatar"/>
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
            <p class="title">Mes compétences</p>
            <p>Que ce soit lors de mon parcours professionnel ou personnel, j'ai pu appréhender de nombreuses technologies.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 1">
            <p class="title">Back-end</p>
            <p>
              Du côté back-end, j'ai beaucoup travaillé avec Java et Spring. Que ce soit sur des projets existants, ou alors des projets from scratch.
              <br/><br/>
              Dans le cadre de mon projet de fin d'études, j'ai par exemple développé une API Rest communiquant avec une base de données MySQL. J'ai utilisé de nombreuses librairies utiles tels quel Spring Security pour la gestion de token JWT.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 2">
            <p class="title">Front-end</p>
            <p>
              En front-end, j'ai appris à développer initialement des sites web en HTML/CSS/JS. Puis, dans le cadre de projets, j'ai ensuite appris à utiliser des frameworks tels que Vue & Nuxt ou encore React.
              <br/><br/>
              J'ai également certaines notions en UX/UI ayant appris à utiliser Figma, un outil permettant de créer des maquettes dynamiques de site.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 3">
            <p class="title">Dev-Ops</p>
            <p>
              J'ai travaillé au sein d'équipes devant elles-mêmes gérer et déployer leurs projets. J'ai donc appris à utiliser des outils tels que Jenkins/GitLab CI, Docker ou encore Kubernetes.
              <br/><br/>
              Par exemple, j'ai participé à la migration de pipelines dans le cloud via Jenkins. J'ai également mis en place des pipelines de déploiement via GitLab CI et K8s.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 4">
            <p class="title">Travail en équipe</p>
            <p>
              Selon moi, l'une des compétences les plus importantes est la capacité à travailler en équipe. J'ai pu apprendre à travailler avec les méthodes agiles telles que scrum ou encore safe.
              J'ai pu par exemple animer certaines cérémonies (daily, retro, ...).
              <br/><br/>
              J'ai également appris à travailler avec des outils tels que Jira, ou encore Git.
               </p>
          </div>
          <div class="content" v-else-if="itemAdds === 5">
            <p class="title">Langues</p>
            <p>
              Ayant travaillé au sein d'un projet international avec des équipes en Roumanie, j'ai pu apprendre à travailler en anglais. J'ai passé la certification TOEIC et obtenu le score de 915 pts.
              <br/><br/>
              J'ai également appris le chinois durant mes études et j'ai passé le HSK 3.
            </p>
          </div>
        </transition>
      </div>
      <div class="arrow" :key="itemAdds">
        <button v-if="itemAdds !== 5" @click="nextAdds" class="legend">></button>
        <button v-else-if="itemAdds === 5" @click="nextAdds" class="legend">«</button>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'Competences',
  data() {
    return {
      display: false,
      itemAdds: 0
    }
  },
  methods: {
    nextAdds() {
      if (this.itemAdds === 5) {
        this.itemAdds = 0
      } else {
        this.itemAdds++
      }
    }
  }
}
</script>
