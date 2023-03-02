<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="home">
          <NuxtLink to="/">Home</NuxtLink>
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
body {
  background-image: url('../public/assets/background.jpg');
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Lato', sans-serif;
}

html {
  height: 100%;
}

header {
  height: 6vh;
  margin: 3vw;
}

.navbar {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  height: 100%;
  padding-left: 2vw;
  padding-right: 2vw;
  border-radius: 20px;
}

.navbar a {
  margin-top: 1vh;
  text-decoration: none;
  color: black;
}

.menu a {
  margin: 0 2vw;
}

.home,
.contact {
  margin: 0 1vw;
}

.bodycontainer {
  margin: 3vw;
}
.window{
  padding: 1vh;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
}

</style>
