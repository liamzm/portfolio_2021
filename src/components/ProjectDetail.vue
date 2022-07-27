<template>

    <div class="project-detail">

        <div class="tag">{{ project.tag }}</div>

        <p class="open-source" v-if="project.open_source == true" @click="goToProjectGithub(project.github_link)"><img src="@/assets/icons/git_white.svg" />Open Source</p>

        <div class="header" @click="goToLink(project.video_link)">

            <img :src="require(`../assets/images/${project.image}.png`)" class="image" v-if="project.video_link === ''" />


            <img :src="require(`../assets/images/${project.icon}`)" class="icon" v-if="project.icon != ''" />

        </div>


        <div class="content">

            <vue-vimeo-player ref="player" :video-id="project.video_link" :options="{ responsive: true }" v-if="project.video_link != null" />

            <div class="name-skills">

                <div class="skills">

                    <div class="skills-inner-cont">

                        <p v-for="skill in project.skills" :key="skill">

                            {{ skill }}

                        </p>


                    </div>

                </div>

                <div class="name">

                    <h1>{{ project.name }}</h1>

                    <h2 v-if="project.site != ''" @click="goToProject(project.site)">{{ project.site }}</h2>

                    <p>{{ project.description }}</p>

                </div>

            </div>



        </div>

        <Menulingua :project="project" v-if="$router.currentRoute.params.project === 'menulingua'" />

        <IlsFrequencyLookup :project="project" v-if="$router.currentRoute.params.project === 'ils-frequency-lookup'" />

        <PassengerFlights :project="project" v-if="$router.currentRoute.params.project === 'longest-passenger-flights'" />

        <ChineseTourists :project="project" v-if="$router.currentRoute.params.project === 'chinese-tourists'" />

        <NewTalentFestival :project="project" v-if="$router.currentRoute.params.project === 'new-talent-festival'" />

        <Plastipoint :project="project" v-if="$router.currentRoute.params.project === 'plastipoint'" />

        <RJMT :project="project" v-if="$router.currentRoute.params.project === 'rjmt'" />

    </div>


</template>

<script>
import Menulingua from '@/components/Menulingua'
import IlsFrequencyLookup from '@/components/IlsFrequencyLookup'
import PassengerFlights from '@/components/PassengerFlights'
import ChineseTourists from '@/components/ChineseTourists'
import NewTalentFestival from '@/components/NewTalentFestival'
import Plastipoint from '@/components/Plastipoint'
import RJMT from '@/components/RJMT'
import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
    name: 'ProjectDetail',
    components: {
        Menulingua,
        IlsFrequencyLookup,
        PassengerFlights,
        ChineseTourists,
        NewTalentFestival,
        Plastipoint,
        RJMT,
        vueVimeoPlayer
    },
    props: ['project'],    
    created() {
        this.getProject(this.$router.currentRoute.params.project);
        this.scrollToTop();
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        getProject(project_name) {
            console.log(this.$router.currentRoute.params.project)
            const projects = this.$projects
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].route === project_name) {
                    this.project = projects[i]
                }
            }
        },
        goToLink(link) {
            if (link != null) {
                window.location.replace(link)
            }
        },
        goToProject(site) {
            window.open(`https://${site}`)
        },
        goToProjectGithub(link) {
          window.open(`${link}`, '_blank');
        }
    }
}



</script>

<style scoped>

.project-detail {
    width: 80%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
}

.header {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-top: 20px;
}

.image {
    height: auto;
    width: 60%;
    border-radius: 10px;
}

.video-container {
    width: 100%;
}

.icon {
    width: 30%;
    margin-left: 2%;
    height: auto;
    max-width: 200px;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
}

.name-skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 50px;
}

.skills {
    width: 30%;
    margin-right: 5%;
}

.name {
    width: 65%;
    /* margin-top: -70px;
    background-color: white;
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
    margin-left: -10px; */
    /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); */
    /* padding: 10px; */
}

.name h1 {
    font-size: 40px;
    font-weight: 600;
    margin: 0px 0px 10px 0px;
}

.name h2 {
    font-weight: 400;
    margin: 0px 0px 10px 0px;
    cursor: pointer;
}

.name p {
    font-family: 'Bitter', serif;
}

.skills h4 {
    margin: 5px 0px 20px 0px;
}

.skills-inner-cont {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.skills p {
    margin: 5px 5px 5px 5px;
    width: max-content;
    color: black;
    border: 1px solid black;
    border-radius: 2.5px;
    font-size: 12.5px;
    box-sizing: border-box;
    padding: 2.5px;
}

@media(max-width: 700px) {
    .header {
        flex-direction: column-reverse;
        align-items: flex-start;
    }

    .image {
        width: 100%;
    }

    .icon {
        margin-bottom: 20px;
        margin-left: 0px;
    }

    .name-skills {
        flex-direction: column-reverse;
    }

    .name {
        width: 100%;
        margin: 0px;
    }

    .skills {
        width: 100%;
    }
}


</style>