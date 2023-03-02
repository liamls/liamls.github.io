<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="home">
          <NuxtLink to="/">Liam.</NuxtLink>
        </div>
        <div class="menu">
          <NuxtLink to="/trackerz">Trackerz</NuxtLink>
          <NuxtLink to="/umami">Umami</NuxtLink>
        </div>
        <div class="contact">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </nav>
    </header>
    <div class="bodycontainer">
      <slot />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Monsterrat"),
    url(../assets/Montserrat-VariableFont_wght.ttf) format("truetype");
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body {
  background-image: url('../assets/background.jpg');
  margin: 0;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

html {
  height: 100%;
  font-family: "Montserrat";
}

header {
  height: 2vh;
  margin: 2vw;
}

.navbar {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  height: 100%;
  padding-left: 2vw;
  padding-right: 2vw;
}

.navbar a {
  margin-top: 1vh;
  text-decoration: none;
  color: white;
}

.navbar a:hover {
  font-weight: 600;
}

.menu a {
  margin: 0 2vw;
}

.home,
.contact {
  margin: 0 1vw;
}

.bodycontainer {
  margin: 2vw;
}

</style>
