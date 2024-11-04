<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar_think.png" alt="avatar" />
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
            <p>Au cours de mon parcours professionnel et personnel, j'ai eu l'opportunité de développer des compétences
              variées qui me permettent de m’adapter aux nombreux défis du monde du développement.</p>
            <p>Cette polyvalence me permet aujourd'hui d'avoir une vue d'ensemble sur la conception et la mise en œuvre
              de solutions techniques, en tenant compte des exigences de performance, de sécurité et d'expérience
              utilisateur.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 1">
            <p class="title">Back-end</p>
            <p>
              En ce qui concerne le back-end, j'ai acquis une solide expérience avec Java et Spring, que ce soit sur des
              projets existants ou en partant de zéro.
              <br /><br />
              Par exemple, dans le cadre de mon projet de fin d'études, j'ai développé une API REST capable de
              communiquer avec une base de données MySQL. J'ai également utilisé plusieurs bibliothèques utiles, comme
              Spring Security, pour la gestion des tokens JWT.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 2">
            <p class="title">Front-end</p>
            <p>
              Sur le front-end, j'ai commencé par développer des sites web en HTML, CSS et JavaScript. Par la suite,
              j'ai approfondi mes compétences en utilisant des frameworks tels que Vue, Nuxt et React.
              <br /><br />
              J'ai également exploré certaines notions d'UX/UI à travers l'utilisation de Figma, un outil qui permet de
              créer des maquettes dynamiques de sites.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 3">
            <p class="title">Dev-Ops</p>
            <p>
              J'ai eu l'occasion de travailler au sein d'équipes responsables de la gestion et du déploiement de leurs
              projets. Cela m'a permis d'apprendre à utiliser des outils tels que Jenkins, GitLab CI, Docker et
              Kubernetes.
              <br /><br />
              Par exemple, j'ai contribué à la migration de pipelines vers le cloud en utilisant Jenkins et j'ai
              également mis en place des pipelines de déploiement via GitLab CI et K8s.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 4">
            <p class="title">Gestion de projet</p>
            <p>
              Je considère que l'une des compétences les plus précieuses est la capacité à travailler en équipe. J'ai eu
              la chance d'apprendre à travailler selon des méthodes agiles telles que Scrum et SAFe.
              J'ai par exemple eu l'occasion d'animer certaines cérémonies (daily, rétro, etc.).
              <br /><br />
              J'ai également acquis une expérience avec des outils tels que Jira et Git, indispensables pour le travail
              collaboratif au sein d'une équipe.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 5">
            <p class="title">Langues</p>
            <p>
              Mon expérience au sein d'un projet international avec des équipes en Roumanie m'a permis d'améliorer mon
              anglais. J'ai passé la certification TOEIC et obtenu un score de 915 points.
              <br /><br />
              J'ai également eu l'opportunité d'échanger avec des équipes internationales à l'INSEE, notamment avec des
              développeurs de l'INS en Bulgarie.
            </p>
          </div>
        </transition>
      </div>
      <div class="arrow" :key="itemAdds">
        <button v-if="itemAdds !== 5" @click="nextAdds" class="legend">></button>
        <button v-else-if="itemAdds === 5" @click="nextAdds" class="legend">⟳</button>
      </div>
    </div>
    <p class="mobile-only">Cliquez sur la fenêtre pour afficher les prochaines informations.</p>
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
      this.itemAdds = (this.itemAdds + 1) % 6; // Cycle through items
    }
  }
}
</script>
