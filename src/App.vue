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
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap');

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
  transition: 0.2s;
}

.purple-fill {
  background-color: #91268F;
  color: white;
}

.blue {
  color: #27A9E1;
  transition: 0.2s;
}

.blue-fill {
  background-color: #27A9E1;
  color: white;
}

.black {
  color: #231F20;
  transition: 0.2s;
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


.highlight-selected {
    background: linear-gradient(120deg, #F8ED31 0%, #F8ED31 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 0 90%;
}

.tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    color: gray;
    border: 1px solid gray;
    border-radius: 2.5px;
    width: max-content;
    margin: 10px 0px 10px 0px;
    text-transform: uppercase;
}

.project-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 100px;
}

.sidebar {
  width: 30%;
  margin-right: 5%;
}

.project-cat {
  width: 65%;
  display: flex;
  flex-direction: column;
}

.project-cat-full-width {
  width: 100%;
}

.project-cat h3 {
  margin: 0px 0px 20px 0px;
}

.project-cat p {
  font-family: 'Bitter', serif;
  margin-bottom: 50px;
}

.image-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image-cont img {
  border-radius: 5px;
}

.open-source {
  top: 0px;
  background-color: #38B449;
  box-sizing: border-box;
  border-radius: 2.5px;
  padding: 2.5px 5px 2.5px 5px;
  color: white;
  font-weight: 600;
  font-size: 12.5px;
  width: max-content;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
}

.open-source img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.one-image img {
  width: 100%;
  object-fit: cover;
}

.two-image img {
  width: 49%;
  object-fit: cover;
  max-height: 300px;
}

.mobile-view img {
  max-height: 700px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media(max-width: 700px) {
  .sidebar {
    width: 100%;
    margin: 20px 0px 0px 0px;
  }

  .project-cat {
    width: 100%;
  }

  .project-container {
    flex-direction: column-reverse;
  }
}


</style>
