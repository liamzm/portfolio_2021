<template>

    <div class="project-detail">

        <div class="tag">{{ project.tag }}</div>

        <div class="header">

            <img :src="require(`../assets/images/${project.image}.png`)" class="image" />

            <img :src="require(`../assets/images/${project.icon}.svg`)" class="icon" />

        </div>


        <div class="content">

            <div class="name-skills">

                <div class="skills">

                    <h4>Skills</h4>

                    <div class="skills-inner-cont">

                        <p v-for="skill in project.skills" :key="skill">

                            {{ skill }}

                        </p>


                    </div>

                </div>

                <div class="name">

                    <h1>{{ project.name }}</h1>

                    <h2>{{ project.site }}</h2>

                    <p>{{ project.description }}</p>

                </div>

            </div>



        </div>

        <Menulingua :project="project" />

    </div>


</template>

<script>
import Menulingua from '@/components/Menulingua'
import IlsFrequencyLookup from '@/components/IlsFrequencyLookup'

export default {
    name: 'ProjectDetail',
    components: {
        Menulingua,
        IlsFrequencyLookup
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
}

.name h1 {
    font-size: 40px;
    font-weight: 600;
    margin: 0px 0px 10px 0px;
}

.name h2 {
    font-weight: 400;
    margin: 0px 0px 10px 0px;
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
    /* background-color: gray; */
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