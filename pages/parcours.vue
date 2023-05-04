<template>
  <div class="container">
    <div class="banner">
      <div class="avatar">
        <img src="../assets/avatar_v.png" alt="avatar"/>
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
            <p class="title">Mon parcours</p>
            <p>C'est ici que je vais me présenter, afin que vous puissiez me connaître un peu plus mais également mon parcours scolaire et professionnel.</p>
          </div>
          <div class="content" v-else-if="itemAdds === 1">
            <p class="title">Lycée</p>
            <p>Ayant grandi à Rennes, j'ai effectué ma scolarité dans le lycée Emile Zola. J'ai obtenu mon baccalaureat scientifique spé maths mention bien en 2018.
              <br/><br/>
                Petite spécificité, j'ai eu la chance d'avoir des cours de chinois, histoire et géographie de la chine en chinois durant toute ma scolarité dans le secondaire. J'ai également effectué un voyage en chine en 2015.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 2">
            <p class="title">IUT de Saint-Malo</p>
            <p>
              Après le bac, je me suis dirigé vers un DUT Réseaux et télécoms en apprentissage chez Orange dès la première année.
              En cours, j'ai pu appréhender de nombreuses matières telles que la programmation, la sécurité, les réseaux, la téléphonie, la gestion de projet, etc.
              <br/><br/>
              En parallèle, j'ai appris le métier de technicien d'intervention en alternance chez Orange. </p>
          </div>
          <div class="content" v-else-if="itemAdds === 3">
            <p class="title">IMT Nord Europe</p>
            <p>J'ai ensuite souhaité me spécialiser dans l'informatique, c'est ainsi que j'ai intégré IMT Nord Europe à Lille au sein de la formation ingénieur informatique et télécoms par apprentissage.
              <br/><br/>
              J'ai eu de nombreux cours intéressants pendant ma formation au sein de cette école. Notamment mes modules de spécialité de dernière année, le premier en I.A. et le deuxième en ingénérie logicielle.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 4">
            <p class="title">Orange Business Services</p>
            <p>
              En parallèle de cette formation, j'ai effectué mon apprentissage chez Orange Business Services en tant que développeur sur le projet international Malima (un projet IoT M2M visant à gérer des flottes de cartes SIM).
              <br/><br/>
              J'ai pu dans un premier temps appréhender les méthodes agiles ainsi que le travail en équipe. J'ai appréhendé de nombreuses technologies que ce soit du côté back-end, front-end ou encore dev-ops.
            </p>
          </div>
          <div class="content" v-else-if="itemAdds === 5">
            <p class="title">Projet de fin d'études</p>
            <p>
              Etant actuellement dans ma dernière année de cycle ingénieur, j'effectue mon projet de fin d'études au sein de l'équipe visant à gérer la partie I.A. et data de Malima. Mon rôle pour cette dernière étape est de faire une refonte du portail de démonstration qu'ils utilisent.
              <br/><br/>
              Pour ce faire, j'interviens sur toute la chaîne de production en refaisant le back-end via Spring, le front-end via Nuxt.Js et en mettant en place la CI/CD via GitLab CI et K8s.
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
  name: 'Parcours',
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
