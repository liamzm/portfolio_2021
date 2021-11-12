<template>

    <div class="skills-list" :class="{ 'skill-type-selected' : selected_skill != '' }">

        <div v-for="skill in shuffleSkills()" :key="skill.name" class="skill-details">

            <div :class="getClass(skill.category)" class="skill-container" v-if="(selected_skill === '' || selected_skill === skill.category) && shownSkill(skill)" @click="toggleSubskill(skill)">

                {{ skill.name }}

            </div>

            <div class="subskills-container" v-if="selected_skill === skill.category && shownSkill(skill)">

                <div v-for="subskill in skill.subskills" :key="subskill" :class="getSubskillClass(skill.category)">

                    {{ subskill }}

                </div>

            </div>

        </div>

    </div>


</template>


<script>

export default {
    name: 'SkillsList',
    props: ['skills', 'selected_skill'],
    methods: {
        getClass(skill) {
            if (skill === 'tech') {
                return 'black-fill'
            } else if (skill === 'design') {
                return 'purple-fill'
            } else if (skill === 'language') {
                return 'blue-fill'
            }
        },
        getSubskillClass(skill) {
            if (skill === 'tech') {
                return 'tech'
            } else if (skill === 'design') {
                return 'design'
            } else if (skill === 'language') {
                return 'language'
            }          
        },
        toggleSubskill(subskill) {
            this.$store.commit('setSelectedSubskill', subskill)
            // this.$store.commit('setSelectedSkill', subskill.category)
        },
        shownSkill(skill) {
            if (this.$store.getters.getSelectedSubskill.length === 0 || this.$store.getters.getSelectedSubskill === skill) {
                return true
            } else {
                return false
            }
        },
        shuffleSkills() {
            const array = this.skills
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array
        }
    }
}


</script>

<style scoped>

.skills-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.skill-type-selected {
    flex-direction: column;
}

.skill-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: max-content;
    margin: 5px 5px 5px 5px;
    box-sizing: border-box;
    padding: 2.5px 10px 2.5px 10px;
    border-radius: 2.5px;
    -webkit-animation:pop-in 0.2s;
    cursor: pointer;
}

.skill-container:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    transition: 0.5s;
}

.skill-details {
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
}

.subskill {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.subskills-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 0px 0px 20px 0px;
}

.subskills-container div {
    margin: 5px 5px 5px 5px;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    display: flex;
    align-items: center;
    border-radius: 2.5px;
    font-size: 12.5px;
}

.subskill-name {
    background-color: lightgray;
    color: white;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    margin: 0px 10px 0px 10px;
}

.tech {
    border: 1px solid #3D3D32;
    color: #3D3D32;
}

.design {
    border: 1px solid #91268F;
    color: #91268F;
}

.language {
    border: 1px solid #27A9E1;
    color: #27A9E1;
}

@keyframes pop-in {
    0% { opacity: 0; transform: scale(0); }
    100% { opacity: 1; transform: scale(1); margin: 5px 5px 5px 5px }
}

@media(max-width: 900px) {
    .skills-list {
        width: 90%;
        margin: auto;
    }
}

</style>