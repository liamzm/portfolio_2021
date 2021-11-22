<template>

    <div id="work">
        
        <h3 class="category-identifier">Work</h3>

        <div class="projects-container">

            <div v-for="project in projects" :key="project.name" :class="{ 'minor-project' : project.major_project === false }" class="project" @click="$router.replace(`${project.route}`)">

                <Project :project="project" />

            </div>

        </div>

    </div>


</template>

<script>
import Project from '@/components/Project.vue'

export default {
    name: 'Work',
    components: {
        Project
    },
    data () {
        return {
            projects: []
        }
    },
    created() {
        this.projects = this.$projects
    }
}



</script>

<style scoped>

#work {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 1200px;
    margin-bottom: 50px;
    margin-top: 50px;
    width: 90%;
}

.projects-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-between;
}

.project {
    width: 49%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.minor-project {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;   
    /* padding: 50px; */
}

@media(max-width: 700px) {
    .project {
        width: 100%;
    }
}




</style>