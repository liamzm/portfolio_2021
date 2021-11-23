<template>

    <div class="skill-container">

        <div class="skill-name-icon" :style="{  'background-color' : `${skill.secondary_colour}` }">

            <span class="skill">Skill • {{ skill.category }}</span>

            <img :src="require(`../assets/icons/${skill.icon}.svg`)" />

            <h2 :style="{ 'color' : `${skill.colour}` }">{{ skill.name }}</h2>

            <p>{{ skill.description }}</p>

        </div>

        <div class="subskills" :style="{ 'border-color' : `${skill.colour}` }">

            <h4>Specifics</h4>

            <div v-for="subskill in skill.subskills" :key="subskill">

                <span :style="{ 'border-bottom' : `1px solid ${skill.secondary_colour}`}"></span>

                <p :style="{ 'border' : `1px solid ${skill.secondary_colour}`, 'color' : `${skill.colour}`, 'background-color' : `${skill.secondary_colour}` }">{{ subskill }}</p>

            </div>

        </div>

        <div class="projects">

            <h4>Projects</h4>

            <div v-for="project in skill.projects" :key="project" @click="goToProject(project.route)">

                <p :style="{ 'color' : `${skill.colour}` }">{{ project.name }}</p>

            </div>

        </div>


    </div>

</template>


<script>

export default {
    name: 'SkillDetail',
    props: ['skill'],
    methods: {
        getSkillColour(skill) {
            if (skill === 'tech') {
                return 'black'
            } else if (skill === 'design') {
                return 'purple'
            } else if (skill === 'language') {
                return 'blue'
            }
        },
        goToProject(project) {
            this.$router.replace(`/${project}`)
        }
    }
}



</script>

<style scoped>

.skill-container {
    width: 100%;
    margin: auto;
    display: flex;
    box-sizing: border-box;
    border-radius: 5px 5px 5px 5px;
    border: 1px solid lightgray;
    /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); */
}

.skill-name-icon img {
    margin-right: 20px;
    max-height: 75px;
    max-width: 75px;
}

h2 {
    font-size: 20px;
    box-sizing: border-box;
    white-space: nowrap;
}

h4 {
    font-size: 12.5px;
    font-weight: 200;
    box-sizing: border-box;
    padding: 2.5px 0px 2.5px 0px;
    border-bottom: 1px dotted lightgray;
    width: max-content;
}

.skill-name-icon {
    display: flex;
    flex-direction: column;
    width: max-content;
    background-color: lightgray;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px 0px 0px 5px;
    width: 33%;
    padding-bottom: 40px;
}

.skill-name-icon p {
    font-family: 'Bitter', serif;
}

.subskills {
    display: flex;
    flex-direction: column;
    width: 33%;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 25px;
    padding-right: 20px;
}

.subskills h4 {
    margin-left: 50px;
}

.subskills div, .projects div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.subskills div span {
    width: 50px;
    height: 1px;
}

.projects {
    display: flex;
    flex-direction: column;
    width: 33%;
    box-sizing: border-box;
    padding-left: 50px;
    border-left: 1px solid lightgray;
    /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); */
}

.subskill p {
    font-size: 15px;
    margin: 5px 0px 5px 0px;
}

.subskills p {
    width: max-content;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    border-radius: 2.5px;
}

.projects p {
    cursor: pointer;
    font-weight: 600;
}

.skill {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    color: gray;
    border: 1px solid gray;
    border-radius: 2.5px;
    width: max-content;
    margin-bottom: 25px;
    text-transform: uppercase;
}

@media(max-width: 900px) {
    .skill-container {
        flex-direction: column;
        box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
        border-bottom: 0px solid black;
        border-right: 0px solid black;
        border-left: 0px black;
    }

    .skill-name-icon {
        width: 100%;
        border-radius: 0px 0px 0px 0px;
    }

    .subskills {
        width: 90%;
        margin: auto;
    }

    .subskills h4, .projects h4 {
        margin-left: 0px;
        margin-bottom: 0px;
    }

    .subskills div span {
        width: 0px;
    }

    .projects {
        width: 90%;
        margin: auto;
        padding-left: 0px;
        border-left: 0px;
    }
}

@media(max-width: 600px) {
    p {
        font-size: 12.5px;
        font-weight: 600;
    }

    .projects p {
        font-size: 12.5px;
        margin-top: 10px;
        font-weight: 600;
    }
}

</style>