<template>
  <div class="container">
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
    </div>
    <div class="resume">

    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 20vh;
}
.content {
  padding-top: 2vh;
}
.avatar img{
  transform: translateX(+6vw);
  transition: all 0.1s;
}
.avatar img:hover{
  transition: all 0.1s;
  transform: translateX(+9vw);
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
.title{
  font-weight: 600;
}
.window:hover{
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

</style>
