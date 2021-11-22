<template>

    <div class="countries">

        <h4>Countries</h4>

        <div class="countries-box">

            <div v-for="country in selected_countries" :key="country.name" class="country" :class="{ 'selected' : selected_countries.includes(country), 'cannot-select' : selected_countries.length === 5 }" @click="toggleCountry(country)">

                {{ country.name }}

            </div>

        </div>

        <div class="change" @click="toggleCountriesModal()">{{ getText() }}</div>

        <transition name="fade">


            <div class="countries-modal" v-if="view_countries_modal === true">

                <h4>Select countries to view (maximum 5)</h4>

                <div class="countries-box">

                    <div v-for="country in all_countries" :key="country.name" class="country" :class="{ 'selected' : (selected_countries.filter(e => e.name === country.name).length === 1), 'cannot-select' : selected_countries.length === 5 }" @click="toggleCountry(country)">

                        <country-flag :country="country.code" :rounded="true" size='small'/>

                        <p>{{ country.name }}</p>

                    </div>
                
                </div>

            </div>

        </transition>

    </div>


    
</template>


<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'SelectedCountries',
    props: ['selected_countries', 'all_countries'],
    components: {
        CountryFlag
    },
    data() {
        return {
            view_countries_modal: false
        }
    },
    methods: {
        toggleCountry(country) {
            if (this.selected_countries.filter(e => e.name === country.name).length > 0) {
                if (this.selected_countries.length > 2) {
                    const index = this.selected_countries.findIndex( s => s.name === country.name);
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
        },
        getText() {
            var newtext = ''
            if (this.view_countries_modal === true) {
                newtext = 'Hide countries'
            } else {
                newtext = 'Change countries'
            }
            return newtext
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
    margin: 20px 10px 0px 0px;
    border-radius: 5px;
    cursor: pointer;
}

.country p {
    margin: 0px 0px 0px 10px;
}

.selected {
    background-color: #27A9E1;
    border: 1px solid #27A9E1 !important;
    color: white !important;
}

.cannot-select {
    color: gray;
    /* border: 1px solid lightgray; */
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

@media(max-width: 700px) {
    .countries-box {
        font-size: 10px;
    }
}

</style>