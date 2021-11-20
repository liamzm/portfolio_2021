<template>

    <div class="container">
        
        <h1>Urban sprawl</h1>

        <h2>Comparing the cities of the world with populations of more than 1 million people.</h2>

        <!-- <h4>World's 10 most populous countries only</h4> -->

        <SelectedCountries :selected_countries="selected_countries" :all_countries="all_countries" v-on:countries_changed="updateCountries()" />

        <div class="cities-container">

            <div v-for="country in selected_countries" :key="country" class="country">

                <div class="country-name-container">

                    <p class="country-name">{{ country.toUpperCase() }}</p>

                </div>

                <div v-for="city in cities" :key="city['Coordinates']" class="city-parent-container">

                    <City :city="city" :country="String(country)" v-if="(city['Country name EN'].toLowerCase()) === country" />

                </div>

            </div>


        </div>


    </div>



</template>


<script>
import City from '@/components/City.vue'
import SelectedCountries from '@/components/SelectedCountries.vue'
import CountryFlag from 'vue-country-flag'

export default {
    name: "WorldCities",
    components: {
        City,
        SelectedCountries,
        CountryFlag
    },
    data() {
        return {
            cities: [],
            selected_countries: ['china', 'india', 'united states', 'indonesia', 'brazil'],
            all_countries: []
        }
    },
    created() {
        // this.getCitiesByCountry();
        this.getCountries();
        this.getCities();
    },
    methods: {
        getCities() {
            this.cities = this.$world_cities_dataset
        },
        getCountries() {
            const cities = this.$world_cities_dataset
            const countries = []
            for (let i = 0; i < cities.length; i++) {
                if (!countries.includes(cities[i]["Country name EN"].toLowerCase())) {
                    countries.push(cities[i]["Country name EN"].toLowerCase())
                }
            }
            this.all_countries = countries.sort()
        }
        // getCitiesByCountry() {
        //     var china = []
        //     var india = []
        //     var usa = []
        //     var indonesia = []
        //     var brazil = []
        //     var bangladesh = []
        //     var nigeria = []
        //     var pakistan = []
        //     var russia = []
        //     var japan = []
        //     const cities = this.$world_cities_dataset
        //     for (let i = 0; i < cities.length; i++) {
        //         if (cities[i]["Country Code"] === "CN") {
        //             china.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "IN") {
        //             india.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "US") {
        //             usa.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "ID") {
        //             indonesia.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "BR") {
        //             brazil.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "BD") {
        //             bangladesh.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "NG") {
        //             nigeria.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "RU") {
        //             russia.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "PK") {
        //             pakistan.push(cities[i])
        //         } else if (cities[i]["Country Code"] === "JP") {
        //             japan.push(cities[i])
        //         }
        //     }
        //     this.china = china
        //     this.india = india
        //     this.usa = usa
        //     this.indonesia = indonesia
        //     this.brazil = brazil
        //     this.bangladesh = bangladesh
        //     this.nigeria = nigeria
        //     this.pakistan = pakistan
        //     this.russia = russia
        //     this.japan = japan
        // }
    }
}



</script>

<style scoped>

.container {
    width: 90%;
    margin: auto;
    max-width: 1200px;
}

h1 {
    font-size: 50px;
    font-weight: 200;
}

h2 {
    font-size: 20px;
    margin: 0px 0px 10px 0px;
}

.cities-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 100px;
}

.country {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    /* justify-content: center; */
}

.country h3 {
    margin: 0px 0px 20px 0px;
    font-weight: 400;
    font-size: 17px;
}

.city-parent-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

}

.country-name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60px;
    justify-content: center;
}

.country-name {
    font-weight: 600;
    font-size: 14px;
    /* margin-bottom: 50px; */
    /* border: 1px solid black; */
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    border-radius: 2.5px;
    text-align: center;
    /* width: max-content; */
}

.country .city-parent-container:first-child {
    /* width: 100%;
    height: 240px;
    display: flex;
    align-items: center; */
}

@media(max-width: 700px) {
    .country-name {
        font-size: 11px;
    }
}



</style>