<template>

    <div class="container">
        
        <h1>Urban sprawl</h1>

        <h2>Comparing the cities of the world with populations of more than 1 million people.</h2>

        <SelectedCountries :selected_countries="selected_countries" :all_countries="all_countries" v-on:countries_changed="updateCountries()" />

        <div class="cities-container">

            <div v-for="country in selected_countries" :key="country.name" class="country">

                <div class="country-name-container" :style="{ 'margin-bottom' : getTopMargin(country.name) }">

                    <country-flag :country="country.code" size='medium'/>

                    <p class="country-name">{{ country.name.toUpperCase() }}</p>
                    
                </div>

                <div v-for="city in cities" :key="city['Coordinates']" class="city-parent-container" v-if="(city['Country name EN'].toLowerCase()) === country.name" >

                    <City :city="city" :country="String(country)"  />

                </div>

            </div>


        </div>

        <div class="important-stuff">

            <h2>Important stuff</h2>

            <div class="limitations">

                <h4>This approach is to population analysis is limited.</h4>

                <p>A "city" can be defined in many different ways, and some cities in this graphic are undoubtedly under- or over-represented because of defined city borders.</p>


            </div>

            <div class="sources">

                <h4>Data source</h4>

                <p>opendatasoft.com <a href="https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.cou_name_en&sort=name">Click to view dataset.</a></p>

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
            selected_countries: [{name: 'china', code: 'cn'}, {name: 'india', code: 'in'}, {name: 'united states', code: 'us'}, {name: 'indonesia', code: 'id'}, {name: 'brazil', code: 'br'}],
            all_countries: []
        }
    },
    created() {
        this.scrollToTop();
        this.getCountries();
        this.getCities();
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        getCities() {
            this.cities = this.$world_cities_dataset
        },
        getCountries() {
            const cities = this.$world_cities_dataset
            const countries = []
            for (let i = 0; i < cities.length; i++) {
                if (countries.filter(e => e.name === cities[i]["Country name EN"].toLowerCase()).length < 1) {
                    countries.push({ name: cities[i]["Country name EN"].toLowerCase(), code: cities[i]["Country Code"].toLowerCase() })
                }
            }
            var sortedCountries = countries .sort(function(a, b) {
                        var textA = a.name.toUpperCase();
                        var textB = b.name.toUpperCase();
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
            this.all_countries = sortedCountries
        },
        getTopMargin(country) {
            const cities = this.$world_cities_dataset
            const populations = []
            const max = 22315474
            for (let i = 0; i < cities.length; i++) {
                if (cities[i]["Country name EN"].toLowerCase() === country) {
                    populations.push(Number(cities[i]["Population"]))
                }
            }         
            var largest = Math.max.apply(Math, populations);
            var proportion = (1 - (largest / max)) * 50
            return `${proportion}%`
        }
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
    margin-top: 50px;
    border-top: 1px dotted lightgray;
}

.country {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
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
    height: 100px;
    justify-content: center;
    font-size: 12.5px;
}

.country-name {
    font-weight: 600;
    font-size: 12.5px;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    border-radius: 2.5px;
    text-align: center;
    display: flex;
    margin: 0px 0px 0px 0px;
    /* flex-direction: column; */
    align-items: center;
}

.important-stuff {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    box-sizing: border-box;
    padding-top: 50px;
    border-top: 1px dotted lightgray;
}

.important-stuff h2 {
    margin: 0px 0px 20px 0px;
}

.important-stuff h4 {
    margin: 0px 0px 10px 0px;
}

.important-stuff p {
    font-family: 'Bitter', serif;
    margin: 0px 0px 30px 0px;
}

.important-stuff a {
    font-family: 'Bitter', serif;
    text-decoration: none;
    margin: 0px 0px 10px 0px;
    font-weight: 600;
}

@media(max-width: 700px) {
    .country-name {
        font-size: 11px;
    }
}



</style>