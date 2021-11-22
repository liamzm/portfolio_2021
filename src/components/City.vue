<template>



        <div class="city-container">

            <div class="pop-circle" :class="{ 'selected' : this.$store.getters.getSelectedCity === this.city }" :style="{ 'width' : getWidth(city['Population']), 'padding-bottom' : getWidth(city['Population']), 'background-color' : getBackgroundColour(city['Population']) }" @click="showDetails()" @mouseover="showConditionalDetails()" @mouseout="hideConditionalDetails()"></div>
        
            <div class="city-details" :class="{ 'visible' : (show_details === true) }">
                <h3>{{ city['ASCII Name'] }}</h3>
                <p>{{ getReadablePopulation(city['Population']) }}</p>

            </div>

            <transition name="fade">

                <div class="modal" v-if="this.$store.getters.getSelectedCity === this.city">

                    <div class="enhanced-details">

                        <div class="header">

                            <div class="exit-button" @click="clearSelectedCity()">

                                <img src="@/assets/images/exitbutton.svg" />

                            </div>

                            <div class="header-content">

                                <div class="flag-container">

                                    <country-flag :country="city['Country Code']" size='medium'/>

                                </div>

                                <h5>{{ city["Country name EN"] }}</h5>
                                <h3>{{ city['ASCII Name'] }}</h3>
                                <p>Population <span>{{ getReadablePopulation(city['Population']) }}</span></p>   

                            </div>

                        </div>

                        <GmapMap
                            v-if="this.$store.getters.getSelectedCity === this.city"
                            :center="{lat:Number(this.latitude), lng:Number(this.longitude)}"
                            :zoom="10"
                            :options="{
                                zoomControl: true,
                                mapTypeControl: false,
                                scaleControl: false,
                                streetViewControl: false,
                                rotateControl: false,
                                fullscreenControl: false,
                                disableDefaultUi: false
                            }"
                            map-type-id="terrain"
                            style="width: 50%; height: 500px"
                        >  
                        </GmapMap>
                    
                    </div>
                    
                </div>

            </transition>

        </div>



    
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'City',
    props: ['city', 'country'],
    components: {
        CountryFlag
    },
    data() {
        return {
            show_details: false,
            latitude: '',
            longitude: ''
        }
    },
    created() {
        this.getCoordinates();
    },
    methods: {
        getReadablePopulation(population) {
            const pop = Number(population)
            return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        getWidth(population) {
            const max = 22315474
            var pop = Number(population)
            var size = (pop / max) * 100
            return size + '%'
        },
        getTopPadding(population) {
            const max = 22315474
            var pop = Number(population)
            var size = ((pop / max) * 100) / 1.5
            return size + '%'
        },
        getBackgroundColour(population) {
            const pop = Number(population)
            const max = 22315474
            var opacity = (pop / max)
            return `rgba(190, 30, 45, ${opacity})`
        },
        getClass() {
            return this.country
        },
        showDetails() {
            this.$store.commit('setSelectedCity', this.city)
        },
        clearSelectedCity() {
            this.$store.commit('setSelectedCity', [])
        },
        showConditionalDetails() {
            this.show_details = true
        },
        getCoordinates() {
            const coordinates = this.city["Coordinates"]
            const fullCoordinates = coordinates.split(',')
            const long = []
            const lat = []
            lat.push(fullCoordinates[0])
            long.push(fullCoordinates[1])
            this.latitude = lat
            this.longitude = long
        },
        hideConditionalDetails() {
            this.show_details = false   
        }
    }
}
</script>

<style scoped>

.city-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.pop-circle {
    border-radius: 50%;
    margin: 10px 0px 10px 0px;
    position: relative;
    height: 0;
    border: 3px solid rgba(0, 0, 0, 0.0);
    cursor: pointer;
}

.pop-circle:hover {
    border: 3px solid rgba(0, 0, 0, 0.5);
    transition: 0.5s;
}

.city-details {
    background-color: rgba(255, 255, 255, 0.5);
    flex-direction: column;
    box-sizing: border-box;
    padding: 2.5px;
    border-radius: 2.5px;
    display: flex;
    max-width: 225px;
    z-index: 5;
}

.visible {
    display: flex;
    align-items: center;
    justify-content: center;
}

.city-details h3 {
    margin: 0px 0px 2.5px 0px;
    font-size: 14px;
    text-align: center;
}

.city-details p {
    margin: 0px 0px 2.5px 0px;
    font-size: 12.5px;
    text-align: center;
}

.top {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 0 !important;
    margin-bottom: 20px;
    margin-top: 20px;
}

.modal {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    box-sizing: border-box;
    padding: 0px 0px 0px 20px;
    background-color: rgba(255, 255, 255, 1);
    z-index: 10;
    border-top: 1px solid lightgray;
}

.enhanced-details {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
}

.header {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.header h3 {
    font-size: 35px;
    margin: 0px 0px 30px 0px;
}

.header p {
    margin: 5px 0px 5px 0px;
    color: gray;
}

.header p span {
    font-weight: 600;
    color: black;
}

.exit-button {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    margin: 25px 0px 25px 0px;
    cursor: pointer;
}

.exit-button img {
    width: 20px;
    height: 20px;
}

.selected {
    border: 3px solid black;
}

.header h5 {
    margin: 0px 0px 20px 0px;
    color: gray;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.header-content {
    margin: auto;
}

.flag-container {
    margin-left: -10px !important;
}

@media(max-width: 700px) {
    .city-details h3 {
        font-size: 10px;
        margin: 0px 0px 2.5px 0px;
    }

    .city-details p {
        font-size: 10px;
        margin: 0px 0px 0px 0px;
    }

    .header h3 {
        font-size: 20px;
    }
}

</style>