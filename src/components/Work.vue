<template>

    <div id="work">
        
        <h3 class="category-identifier">Work</h3>

        <div class="projects-container">

            <div v-for="project in projects" :key="project.name" class="project" @click="$router.replace(`${project.router_name}`)">

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
            projects: [
               {
                    name: 'Menulingua',
                    router_name: 'menulingua',
                    image: 'menulingua',
                    icon: 'menulingua_logo',
                    tag: 'Progressive Web App • Full Stack',
                    colour: '#94C13D',
                    secondary_colour: '#EBE9FF',
                    description: 'Menulingua is a digital restaurant menu service in use across 19 countries. Focused on QR code-based menus, the service was launched in 2019 and has emerged a popular app in Southeast Asia, particularly in the Philippines and Indonesia.',
                    skills: [
                        'Payment integration', 
                        'Progressive Web App',
                        'Ruby on Rails',
                        'PostgreSQL',
                        'Vue.js',
                        'Mandarin Chinese',
                        'Bahasa Indonesia',
                        'Modern CSS Technologies',
                        'Javascript',
                        'Git',
                        'Heroku',
                        'REST APIs'
                    ],
                    site: 'menulingua.com'
                },
               {
                    name: 'ILS frequency lookup',
                    router_name: 'ils-frequency-lookup',
                    image: 'ils-lookup',
                    icon: 'ils-lookup_logo',
                    tag: 'Progressive Web App • Frontend',
                    colour: '#113E4D',
                    secondary_colour: '#EBE9FF',
                    description: 'ILS Frequency Lookup gives flight simulator enthusiasts a way to find airport information that ensures they can continue flying the virtual skies without incident.',
                    skills: [
                        'Payment integration', 
                        'Progressive Web App',
                        'Ruby on Rails',
                        'PostgreSQL',
                        'Vue.js',
                        'Mandarin Chinese',
                        'Bahasa Indonesia',
                        'Modern CSS Technologies',
                        'Javascript',
                        'Git',
                        'Heroku',
                        'REST APIs'
                    ],
                    site: 'ils-lookup.com'
                },
            ]
        }
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

@media(max-width: 700px) {
    .project {
        width: 100%;
    }
}




</style>