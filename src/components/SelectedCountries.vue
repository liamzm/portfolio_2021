<template>

    <div class="countries">

        <h4>Countries</h4>

        <div class="countries-box">

            <div v-for="country in selected_countries" :key="country" class="country" :class="{ 'selected' : selected_countries.includes(country), 'cannot-select' : selected_countries.length === 5 }" @click="toggleCountry(country)">

                {{ country }}

            </div>

        </div>

        <div class="change" @click="toggleCountriesModal()">Change countries</div>

        <transition name="fade">

            <div class="countries-modal" v-if="view_countries_modal === true">

                <h4>Select countries to view (maximum 5)</h4>

                <div class="countries-box">

                    <div v-for="country in all_countries" :key="country" class="country" :class="{ 'selected' : selected_countries.includes(country), 'cannot-select' : selected_countries.length === 5 }" @click="toggleCountry(country)">

                        {{ country }}

                    </div>
                
                </div>

            </div>

        </transition>

    </div>


    
</template>


<script>
export default {
    name: 'SelectedCountries',
    props: ['selected_countries', 'all_countries'],
    data() {
        return {
            view_countries_modal: false
        }
    },
    methods: {
        toggleCountry(country) {
            if (this.selected_countries.includes(country)) {
                if (this.selected_countries.length > 2) {
                    const index = this.selected_countries.indexOf(country);
                    if (index > -1) {
                        this.selected_countries.splice(index, 1);
                    }
                }
            } else {
                if (this.selected_countries.length < 5) {
                    this.selected_countries.push(country)
                }
            }
        },
        toggleCountriesModal() {
            this.view_countries_modal = !this.view_countries_modal
        }
    }
}
</script>


<style scoped>

.countries {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    margin-top: 50px;
}

.countries-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.country {
    box-sizing: border-box;
    width: max-content;
    padding: 5px 10px 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin: 10px 5px 0px 0px;
    border-radius: 2.5px;
    cursor: pointer;
    border: 1px solid lightgray;
}

.selected {
    background-color: #27A9E1;
    border: 1px solid #27A9E1 !important;
    color: white !important;
}

.cannot-select {
    color: gray;
    border: 1px solid lightgray;
}

h4 { 
    margin: 0px 0px 10px 0px;
    width: 100%;
}

.change {
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 5px 10px 5px 10px;
    border: 1px solid black;
    width: max-content;
    font-weight: 600;
    border-radius: 2.5px;
    cursor: pointer;
    margin-bottom: 30px;
}

.countries-modal {
    display: flex;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    background-color: white;
}

</style>