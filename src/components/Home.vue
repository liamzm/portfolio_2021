<template>

    <div class="home-container">

        <Banner />

        <Skills />

        <Work />

        <transition name="fade">

            <div class="github-refer" @click="redirectToGithub()">
                
                <img src='../assets/icons/git.svg' />
                <p><span>View the code</span> for this site on Github</p>

            </div>

        </transition>

    </div>



</template>

<script>
import Banner from '@/components/Banner.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        Skills,
        Work
    },
    methods: {
        redirectToGithub() {
            window.location.replace('https://github.com/liamzm/portfolio_2021')
        }
    }
}



</script>

<style scoped>

.github-refer {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    background-color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    width: max-content;
    box-sizing: border-box;
    padding: 5px 20px 5px 5px;
    border-radius: 0px 5px 0px 0px;
    cursor: pointer;
}

.github-refer img {
    width: 30px;
    height: 30px;
}

.github-refer p {
    margin: 0px 0px 0px 20px;
    font-size: 12.5px;
}

.github-refer p span {
    font-weight: 600;
}

.home-container {
    margin-top: 100px;
}


</style>