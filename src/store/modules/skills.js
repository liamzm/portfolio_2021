

const state = () => ({
    selected_skill: '',
    selected_subskill: []
})


const mutations = {
    setSelectedSkill (state, skill) {
        if (state.selected_skill === skill) {
            state.selected_skill = ''
            state.selected_subskill = []
        } else {
            state.selected_skill = skill
            state.selected_subskill = []
        }
    },
    setSelectedSubskill (state, subskill) {
        if (state.selected_subskill === subskill) {
            state.selected_subskill = []
            state.selected_skill = ''
        } else {
            state.selected_subskill = subskill
            state.selected_skill = subskill.category
        }       
    }
}


const getters = {
    getSelectedSkill (state) {
        return state.selected_skill
    },
    getSelectedSubskill (state) {
        return state.selected_subskill
    }
}


export default {
    state,
    getters,
    mutations
}