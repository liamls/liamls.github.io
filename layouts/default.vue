<template>
  <div class="html">
    <header>
      <nav class="navbar">
        <div class="home">
          <NuxtLink to="/">Liam.</NuxtLink>
        </div>
        <div class="menu">
          <NuxtLink to="/trackerz">Trackerz</NuxtLink>
          <NuxtLink hidden to="/umami">Umami</NuxtLink>
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

body.transition {
  opacity: 0;
  filter: blur(1rem);
}

body.transition-active {
  transition: all 0.6s;
  opacity: 1;
  filter: none;
}

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

.content {
  padding-top: 2vh;
  height: 100%;
  overflow: auto;
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
  height: 30vh;
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

@media only screen and (max-width: 480px) {
  header {
    margin: 0;
    width: 100vw;
  }
  .navbar {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    transform: translateY(+5vh);
  }
  .banner{
    flex-direction: column-reverse;
  }
  .arrow{
    display: none;
  }
  .window {
    margin-top: 5vh;
    width: 90vw;
    margin-left: 0;
  }
  .title-bar-controls {
    display: none;
  }
  body{
    background-size: 100vh;
  }
}
</style>

<script>
export default {
  mounted() {
    document.body.classList.add("transition");
    setTimeout(() => {
      document.body.classList.add("transition-active");
    }, 0);
  },
};
</script>
