<template>

    <div id="skills">

        <div class="container">
        
            <h3 class="category-identifier">Skills</h3>

            <p v-if="!individualSkillSelected()">Click on a category or skill to see more details</p>

            <div class="categories">
                
                <div class="black" @click="setSkill('tech')" :class="{ 'gray' : $store.getters.getSelectedSkill != '' && $store.getters.getSelectedSkill != 'tech' }">
                    
                    <span class="black-fill circle" :class="{ 'gray-fill' : $store.getters.getSelectedSkill != '' && $store.getters.getSelectedSkill != 'tech' }"></span>

                    <p :class="{ 'highlight-selected' : $store.getters.getSelectedSkill === 'tech' }">Technology</p>

                </div>

                <div class="purple" @click="setSkill('design')" :class="{ 'gray' : $store.getters.getSelectedSkill != '' && $store.getters.getSelectedSkill != 'design' }">

                    <span class="purple-fill circle" :class="{ 'gray-fill' : $store.getters.getSelectedSkill != '' && $store.getters.getSelectedSkill != 'design' }"></span>

                    <p :class="{ 'highlight-selected' : $store.getters.getSelectedSkill === 'design' }">Design</p>

                </div>

                <div class="blue" @click="setSkill('language')" :class="{ 'gray' : $store.getters.getSelectedSkill != '' && $store.getters.getSelectedSkill != 'language' }">

                    <span class="blue-fill circle" :class="{ 'gray-fill' : $store.getters.getSelectedSkill != '' && $store.getters.getSelectedSkill != 'language' }"></span>

                    <p :class="{ 'highlight-selected' : $store.getters.getSelectedSkill === 'language' }">Language & Localisation</p>

                </div>

            </div>

        </div>

        <SkillsList :skills="skills" :selected_skill="this.$store.getters.getSelectedSkill" v-if="!individualSkillSelected()"/>

        <transition name="fade">
            
            <SkillDetail :skill="this.$store.getters.getSelectedSubskill" v-if="individualSkillSelected()" />

        </transition>


    </div>



</template>

<script>
import SkillsList from '@/components/SkillsList.vue'
import SkillDetail from '@/components/SkillDetail.vue'

export default {
    name: 'Skills',
    components: {
        SkillsList,
        SkillDetail
    },
    data() {
        return {
            selected_skill: '',
            skills: [
               {
                    name: 'Payment integrations',
                    category: 'tech',
                    icon: 'payments',
                    colour: '#231F20',
                    secondary_colour: '#EBE9FF',
                    description: 'Payment service providers enable companies who sell products online to safely and efficiently charge customers, without having to store any confidential payment information themselves.',
                    subskills: [
                        'Stripe', 
                        'Midtrans',
                        'Subscription model implementation',
                        'Online payment compliance',
                        'Stripe Connect'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' }
                    ]
                },
                {
                    name: 'Heroku',
                    category: 'tech',
                    icon: 'heroku',
                    colour: '#7E3F98',
                    secondary_colour: '#DACEE5',
                    description: 'Heroku is a popular hosting platform for web-based applications, including those using popular web frameworks such as Ruby on Rails. Heroku allows for rapid deployment and code pushes with little or no downtime.',
                    subskills: [
                        'Heroku CLI', 
                        'Integration with Github',
                        'Heroku Dynos',
                        'Application health management',
                        'Heroku PostgreSQL'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' }
                    ]
                },
                {
                    name: 'Javascript',
                    category: 'tech',
                    icon: 'js',
                    colour: '#231F20',
                    secondary_colour: '#EFE99E',
                    description: 'Javascript is a widely-used programming language that is at the forefront of modern web technologies. Some of the many benefits of using Javascript include reactive single-page apps, seamless connectivity to backend configurations in various languages and a wide programmer base.',
                    subskills: [
                        'Vanilla JS', 
                        'ES5/ES6',
                        'Javascript for web',
                        'Single page apps'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: 'This very site', route: '/' }
                    ]
                },
               {
                    name: 'Vector art & iconography',
                    category: 'design',
                    icon: 'icon',
                    colour: '#8CC63E',
                    secondary_colour: '#EEF4E4',
                    description: 'SVG and other types of graphics can bring a project to life. Web and app design along with iconography and vector art creation brings continuity to a project.',
                    subskills: [
                        'Illustrator', 
                        'Dynamic SVGs',
                        'Web optimisation',
                        'Usage across Adobe CS'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: 'This very site', route: '/' },
                        { name: 'Chinese tourism: facts and figures', route: 'chinese-tourists'}
                    ]
                },
               {
                    name: 'REST APIs',
                    category: 'tech',
                    icon: 'rest',
                    colour: '#F7931D',
                    secondary_colour: '#F9F1E4',
                    description: 'Communication from server-to-server adhering to web standards. Able to make app consumable by anyone granted permission.',
                    subskills: [
                        'Web standards', 
                        'Readable',
                        'Well documented',
                        'Robust security paramters'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' }
                    ]
                },
                {
                    name: 'Modern CSS technologies',
                    category: 'tech',
                    icon: 'css',
                    colour: '#262261',
                    secondary_colour: '#FEFFE6',
                    description: 'Modern CSS technologies including Flexbox, Grid, SCSS, SASS and others can make development of eye-catching websites seamless and easy to maintain.',
                    subskills: [
                        'Flexbox', 
                        'Grid',
                        'CSS animations',
                        'Tailwind'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: 'This very site', route: '/' }
                    ]
                },
                {
                    name: 'UI/UX design',
                    category: 'design',
                    icon: 'ui',
                    colour: '#450F43',
                    secondary_colour: '#FACFFF',
                    description: 'Mobile-first, responsive approach to design, making a single codebase usable across platforms.',
                    subskills: [
                        'Responsive design', 
                        'PWA-ready',
                        'Modern, compelling typography',
                        'Wireframing',
                        'Modern, easy-to-use forms',
                        'User interactivity'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: 'This very site', route: '/' }
                    ]
                },
                {
                    name: 'Progressive Web Apps',
                    category: 'tech',
                    icon: 'pwa',
                    colour: '#59595B',
                    secondary_colour: '#E2E1E9',
                    description: 'Progressive Web Apps are powerful, modern and allow management across web, Android and iOS all from a single codebase. PWAs are the future! ',
                    subskills: [
                        'Modern web technologies', 
                        'PWA requirements',
                        'Service workers',
                        'Push notifications',
                        'Easy install',
                        'Run on all platforms'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' }
                    ]
                },    
                {
                    name: 'PostgreSQL',
                    category: 'tech',
                    icon: 'postgres',
                    colour: '#53537F',
                    secondary_colour: '#EFEFF4',
                    description: 'PostgreSQL is a powerful open source relational database that is widely used in apps in a production environment, including apps hosted on Heroku. It is robust, reliable and performs well.',
                    subskills: [
                        'Usage with Active Record (Rails)', 
                        'Database queries',
                        'Database security',
                        'Associations',
                        'Datatypes'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' }
                    ]
                },      
                {
                    name: 'Git',
                    category: 'tech',
                    icon: 'git',
                    colour: '#010101',
                    secondary_colour: '#FDFAD9',
                    description: 'Git is the industry-standard version management system that allows developers to maintain clean and organised code. Coding is simply not possible without it!',
                    subskills: [
                        'Github', 
                        'Push and pull safely',
                        'No downtime deployments',
                        'Best practices',
                        'Git with open source'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: 'This very site', route: '/' }
                    ]
                },               
                {
                    name: 'Infographics & data visualization',
                    category: 'design',
                    icon: 'chart',
                    colour: '#8EC241',
                    secondary_colour: '#E5EFD4',
                    description: 'Bringing data to life for web, video and print. Knowledge of modern data visualization frameworks and the best way to visualize given a particular dataset.',
                    subskills: [
                        'Charts and graphs', 
                        'Mapping',
                        'Charts js',
                        'Data parsing',
                        'UI/UX principles for data visualization'
                    ],
                    projects: [
                        { name: 'Chinese tourism: facts and figures', route: 'chinese-tourists'}
                    ]
                },



                {
                    name: 'Ruby on Rails',
                    category: 'tech',
                    icon: 'ruby',
                    colour: '#994645',
                    secondary_colour: '#EDE1DE',
                    description: 'Ruby on Rails is a well-known and well established web framework based on the Ruby programming language. Rails is known for its flexibility and reliance on standard Object Oriented Programming (OOP) and Model View Controller (MVC) principles.',
                    subskills: [
                        'Rails as an API', 
                        'Authentication & user authorization',
                        'Deployment (Heroku)',
                        'Unit tests (Capybara, Rspec)',
                        'JWT with Rails API backend',
                        'Cross Origin Resource Sharing',
                        'OOP principles'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' }
                    ]
                },
                { 
                    name: 'Adobe Illustrator',
                    category: 'design',
                    icon: 'ai',
                    colour: '#301D13',
                    secondary_colour: '#F9F1EA',
                    description: 'Vector graphics made in Adobe Illustrator are applicable to a multitude of projects in web and video medium. I use it in nearly every project I work on to generate vector artwork and try out ideas before writing code.',
                    subskills: [
                        'SVG graphic generation', 
                        'Creative, unique iconography',
                        'Wireframes and concepts',
                        'Vector artwork'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: "World's longest passenger flights", route: 'longest-passenger-flights' },
                        { name: 'Chinese tourism: facts and figures', route: 'chinese-tourists'}
                    ]
                },
                { 
                    name: 'Adobe After Effects',
                    category: 'design',
                    icon: 'ae',
                    colour: '#1D1B54',
                    secondary_colour: '#E0DFE5',
                    description: 'After Effects is a powerful animation tool used widely in video production. A wide range of versatile animation tools make After Effects useful in projects large and small.',
                    subskills: [
                        'Animation', 
                        'Short, creative video creation',
                        'Compelling visual storytelling',
                        'Data visualization',
                        'Web-optimised videos',
                        'Wireframing and video planning'
                    ],
                    projects: [
                        { name: 'Chinese tourism: facts and figures', route: 'chinese-tourists'},
                        { name: "World's longest passenger flights", route: 'longest-passenger-flights' }
                    ]
                },
                { 
                    name: 'Mandarin Chinese',
                    category: 'language',
                    icon: 'zh',
                    colour: '#2A388F',
                    secondary_colour: '#D4D3EF',
                    description: 'With more than 1.3 billion speakers, Mandarin Chinese is a useful skill in interacting with people not just in China or even East Asia in general, but the entire world.',
                    subskills: [
                        'Spoken Chinese', 
                        'Written Chinese',
                        'Translation and language conventions',
                        'Multilingual web design for written Chinese'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'Chinese tourism: facts and figures', route: 'chinese-tourists'}
                    ]
                },
                { 
                    name: 'Bahasa Indonesia',
                    category: 'language',
                    icon: 'id',
                    colour: '#D91B5B',
                    secondary_colour: '#F8E1E1',
                    description: 'Spoken by more than 200 million people across Indonesia, Bahasa Indonesia serves as a lingua franca, bringing the achipelago together.',
                    subskills: [
                        'Spoken Indonesian', 
                        'Written Indonesian',
                        'Translation and language conventions',
                        'Multilingual apps with Indonesian',
                        'Formal and informal Indonesian'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' }
                    ]
                },
                {
                    name: 'Vue.js',
                    category: 'tech',
                    icon: 'vue',
                    colour: '#354A5D',
                    secondary_colour: '#D9ECE0',
                    description: 'Vue.js is a versatile, reactive and component-based Javascript framework known for flexibility and performance.',
                    subskills: [
                        'Reusable component creation',
                        'JWT authorization with backend',
                        'HTTP conventions',
                        'Axios',
                        'Vue Router',
                        'Vuex',
                        'Vue CLI'
                    ],
                    projects: [
                        { name: 'Menulingua', route: 'menulingua' },
                        { name: 'ILS Frequency Lookup', route: 'ils-frequency-lookup' },
                        { name: 'This very site', route: '/' }
                    ]
                }
            ]
        }
    },
    methods: {
        setSkill(skill) {
            this.$store.commit('setSelectedSkill', skill)
        },
        individualSkillSelected() {
            if (this.$store.getters.getSelectedSubskill.length != 0) {
                return true
            } else {
                return false
            }
        }
    }
}



</script>

<style scoped>

#skills {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  margin-bottom: 50px;
  margin-top: 50px;
  width: 90%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  /* padding: 25px; */
  /* border-radius: 25px; */
  /* box-shadow: 0 0 16px rgba(0, 0, 0, 0.1); */
  
}

.container {
  position: relative;
  z-index: 2;
  
}

.categories {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
}

.categories p {
    font-family: "Cabin", sans-serif;
    text-transform: uppercase;
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.5px;
}

.categories div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 2.5px;
    box-sizing: border-box;
    padding: 5px 5px 5px 5px;
}

.categories div p {
    margin: 0px 0px 0px 0px;
    white-space: nowrap;
}

.circle {
    width: 7.5px;
    height: 7.5px;
    border-radius: 50%;
    margin-right: 5px;
}

@media(max-width: 900px) {
    #skills {
        width: 100%;
        border-bottom: 1px solid lightgray;
        padding-bottom: 25px;
    }

    .container {
        width: 90%;
        margin: auto;
    }
}

@media(max-width: 700px) {
    .categories {
        flex-direction: column;
        align-items: flex-start;
    }

    #skills h3 {
        font-size: 15px;
        margin-bottom: 0px;
    }

    p {
        font-size: 12.5px;
    }
}

</style>