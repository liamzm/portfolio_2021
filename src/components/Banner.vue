<template>

    <div id="banner">

        <h1 @click="setSkill('tech')" :class="{ 'gray' : (this.$store.getters.getSelectedSkill != '' && this.$store.getters.getSelectedSkill != 'tech'), 'small' : this.$store.getters.getSelectedSkill != '' }">Web & App Development</h1>

        <h1 class="purple" @click="setSkill('design')" :class="{ 'gray' : (this.$store.getters.getSelectedSkill != '' && this.$store.getters.getSelectedSkill != 'design'), 'small' : this.$store.getters.getSelectedSkill != ''  }">Visual storytelling</h1>

        <h1 class="blue" @click="setSkill('language')" :class="{ 'gray' : (this.$store.getters.getSelectedSkill != '' && this.$store.getters.getSelectedSkill != 'language'), 'small' : this.$store.getters.getSelectedSkill != ''  }">Language</h1>

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
}

#banner h1 {
    font-size: 50px;
    margin: 0px 0px 0px 0px;
    width: max-content;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0);
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
}

#banner h1:hover {
    border-bottom: 1px dotted black;
    transition: 0.2s;
}

.small {
    font-size: 20px !important;
}

@media(max-width: 800px) {
    #banner h1 {
        font-size: 30px;
        padding: 0px 0px 0px 0px;
    }

    #banner {
        padding: 10px 0px 0px 0px;
    }
}

@media(max-width: 400px) {
    #banner h1 {
        font-size: 22.5px;
    }
}

</style>