<template>
    <div class="container">
        <div class="banner">
            <div class="avatar">
                <img src="../assets/avatar_wink.png" alt="avatar" />
            </div>
            <div class="window" @click="nextProjects">
                <div class="title-bar">
                    <div class="title-bar-controls">
                        <button aria-label="Close"></button>
                        <button aria-label="Minimize"></button>
                        <button aria-label="Zoom"></button>
                    </div>
                </div>
                <transition name="fade" mode="out-in">
                    <div>
                        <div class="content" v-if="itemAdds === 0">
                            <p class="title">Portfolio</p>
                            <p>
                                J'ai réalisé mon portfolio afin de me présenter de manière complète, mais également afin
                                de montrer mes différents projets.
                                <br /><br />
                                Ce site a été développé avec le framework NuxtJS durant ma dernière année d'école
                                d'ingénieur, ce qui me permet de maintenir mes connaissances sur ce dernier lorsque je
                                l'actualise.
                            </p>
                        </div>
                        <div class="content" v-if="itemAdds === 1">
                            <p class="title">Mikha Prod</p>
                            <p>
                                J'ai réalisé le portfolio de Michael, créateur de contenu et vidéaste freelance
                                travaillant notamment avec le média RapMinute.
                                <br /><br />Nous avons réalisé le design ensemble, et j'ai codé de manière simple pour
                                qu'il puisse lui-même rajouter ses projets.
                                <a class="lien" href="https://mikhaprod.com" target="_blank" rel="noopener noreferrer"
                                    @click.stop>
                                    <strong>Découvrez le site ici</strong>
                                </a>.
                                <br /><br />Ce site a été réalisé avec le framework React.
                            </p>
                        </div>
                        <div class="content" v-else-if="itemAdds === 2">
                            <p class="title">Trackerz</p>
                            <p>
                                Trackerz est un outil très simple conçu pour aider les utilisateurs à découvrir des
                                artistes
                                similaires. Plutôt qu'un réel projet, cet outil montre comment
                                intégrer une API externe pour fournir des recommandations musicales personnalisées.
                                <br /><br />
                                Vous pouvez explorer cette application en cliquant
                                ci-dessous.
                                <NuxtLink class="lien" to="/trackerz" @click.stop>
                                    <strong>Essayez Trackerz ici</strong>
                                </NuxtLink>.
                            </p>
                        </div>
                        <div class="content" v-else-if="itemAdds === 3">
                            <p class="title">Shogi Quest</p>
                            <p>
                                Shogi Quest est un projet de jeu de Shogi simplifié en passant par des lettres plutôt
                                que les idéogrammes japonais.
                                La logique du jeu est effectué en JavaScript via le ReactJS et permet de faire des
                                parties pour apprendre à jouer aux échecs nippons.
                                <br /><br />
                                N'hésitez pas à tester une partie.
                                <a class="lien" href="https://shogi-quest-hkegci9ym-liamls-projects.vercel.app/"
                                    target="_blank" rel="noopener noreferrer" @click.stop>
                                    <strong>Découvrez le site ici</strong>
                                </a>.
                            </p>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="arrow" :key="itemAdds">
                <button v-if="itemAdds < 3" @click="nextProjects" class="legend">></button>
                <button v-else @click="nextProjects" class="legend">⟳</button>
            </div>
        </div>
        <p class="mobile-only">Cliquez sur la fenêtre pour afficher les prochaines informations.</p>
    </div>
</template>

<script>
export default {
    name: 'Projets',
    data() {
        return {
            itemAdds: 0,
        }
    },
    methods: {
        nextProjects() {
            this.itemAdds = (this.itemAdds + 1) % 4;
        },
    }
}
</script>