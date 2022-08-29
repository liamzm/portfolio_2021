<template>

  <div>

    <div class="banner-background"></div>

    <img class="icon" src="@/assets/icons/dots-illo.svg" />

    <div id="banner">

        <h1 @click="setSkill('tech')" :class="{ 'gray' : (this.$store.getters.getSelectedSkill != '' && this.$store.getters.getSelectedSkill != 'tech'), 'highlight-selected' : $store.getters.getSelectedSkill === 'tech' }">Web & App Development</h1>

        <h1 class="purple highlight" @click="setSkill('design')" :class="{ 'gray' : (this.$store.getters.getSelectedSkill != '' && this.$store.getters.getSelectedSkill != 'design'), 'highlight-selected' : $store.getters.getSelectedSkill === 'design' }">Visual storytelling</h1>

        <h1 class="blue highlight" @click="setSkill('language')" :class="{ 'gray' : (this.$store.getters.getSelectedSkill != '' && this.$store.getters.getSelectedSkill != 'language'), 'highlight-selected' : $store.getters.getSelectedSkill === 'language' }">Language</h1>

    </div>

  </div>

</template>


<script>

export default {
    name: 'Banner',
    methods: {
        setSkill(skill) {
            this.$store.commit('setSelectedSkill', skill)
        }
    }
}


</script>


<style scoped>

#banner {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 25px 0px 25px 0px;
  position: relative;
  z-index: 3;
}

.banner-background {
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 400px;
  background: linear-gradient(120deg, #91258F 0%, #26A9E1 100%);
  z-index: 2;
  opacity: 0.15;
}

#banner h1 {
    font-size: 50px;
    margin: 0px 0px 0px 0px;
    width: max-content;
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
}

.gray {
  opacity: 0.5;
}

.icon {
  position: absolute;
  left: 2.5%;
  top: 0%;
  width: 450px;
  z-index: 1;
  opacity: 0.1;
}

@media(max-width: 800px) {
  #banner h1 {
      font-size: 30px;
      padding: 0px 0px 0px 0px;
  }

  #banner {
      padding: 10px 0px 0px 0px;
  }

  .banner-background {
    height: 250px;
  }

  .icon {
    width: 140px;
    left: 0px;
    top: 0;
  }
}

@media(max-width: 400px) {
    #banner h1 {
        font-size: 22.5px;
    }
}

</style>