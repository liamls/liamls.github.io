<template>
  <div class="container">
    <div class="grid">
      <div class="grid-item" id="item-0"><img src="../assets/logo/spring.png" alt="spring"></div>
      <div class="grid-item" id="item-1"></div>
      <div class="grid-item" id="item-2"><img src="../assets/logo/java.png" alt="java"></div>
      <div class="grid-item" id="item-3"><img src="../assets/logo/nuxt.png" alt="nuxt"></div>
      <div class="grid-item" id="item-4">Java</div>
      <div class="grid-item" id="item-5">Java</div>
      <div class="grid-item" id="item-6">Java</div>
      <div class="grid-item" id="item-7">Java</div>
      <div class="grid-item" id="item-8">Java</div>
      <div class="grid-item" id="item-9">Java</div>
      <div class="grid-item" id="item-10">Java</div>
      <div class="grid-item" id="item-11">Java</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top:10vh;
  height: 70vh;
  display: flex;
  align-items: center;
}
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
	'label0 label0 label0 label2 label2 label3 label3 label3'
	'label0 label0 label0 label2 label2 label3 label3 label3'
	'label1 label1 label11 label4 label4 label4 label5 label5'
	'label1 label1 label11 label4 label4 label4 label5 label5'
	'label6 label6 label7 label7 label7 label8 label8 label9'
	'label6 label6 label7 label7 label7 label8 label8 label10';
  gap: 1vw;
  height: 100%;

}
.grid-item img{
  height: 75%;
  align-items: center;
  margin:5%;
}
.grid-item{
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  opacity: 80%;
}

#item-0 {
  grid-area: label0;

}
#item-1 {
  grid-area: label1;

}
#item-2 {
  grid-area: label2;

}
#item-3 {
  grid-area: label3;

}
#item-4 {
  grid-area: label4;

}
#item-5 {
  grid-area: label5;

}
#item-6 {
  grid-area: label6;

}
#item-7 {
  grid-area: label7;

}
#item-8 {
  grid-area: label8;

}
#item-9 {
  grid-area: label9;

}
#item-10 {
  grid-area: label10;

}
#item-11 {
  grid-area: label11;

}
</style>
