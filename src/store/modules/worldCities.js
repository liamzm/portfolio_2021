

const state = () => ({
    selected_city: []
})


const mutations = {
    setSelectedCity (state, city) {
        state.selected_city = city
    }
    // clearSelectedCity (state) {
    //     console.log('this fired')
    //     state.selected_city = []
    // }
}


const getters = {
    getSelectedCity (state) {
        return state.selected_city
    }
}


export default {
    state,
    getters,
    mutations
}