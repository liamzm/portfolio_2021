<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components : {
    Header,
    Footer
  }
}



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;600&display=swap');

#app {
  min-height: 100%;
}

html {
  min-height: 100%;
}

a {
  text-decoration: none;
  color: black;
}

h2 {
  font-weight: 600;
}

.category-identifier {
  font-weight: 600;
  margin: 0px 0px 10px 0px;
  box-sizing: border-box;
  padding: 0px 0px 10px 0px;
  border-bottom: 1px dotted lightgray;
  width: max-content;
}

body {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  height: 100%;
}

.green {
  color: #8CC63E;
}

.green-fill {
  background-color: #8CC63E;
  color: white;
}

.purple {
  color: #91268F;
}

.purple-fill {
  background-color: #91268F;
  color: white;
}

.blue {
  color: #27A9E1;
}

.blue-fill {
  background-color: #27A9E1;
  color: white;
}

.black {
  color: #231F20;
}

.black-fill {
  background-color: #231F20;
  color: white;
}

.gray {
  color: #A7A9AB;
}

.gray-fill {
  color: white;
  background-color: #A7A9AB;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



</style>
