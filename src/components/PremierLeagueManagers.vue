<template>

    <div id="container">

        <h1>Premier League managerial changes</h1>

        <h2>Beginning in 2000-01 season</h2>

   

        <div id="graph-container">

            <div class="yaxis">

                <div v-for="club in clubs" :key="club" class="club">

                    <img class="icon" :src="require(`../assets/images/pl_icons/${club}.png`)" />

                    {{ club }}

                </div>

            </div>

            <div class="plane">

                <div class="xaxis">

                    <div v-for="season in seasons" :key="season" class="season">

                        {{ season }}

                    </div>

                </div>

                <div v-for="club in clubs" :key="club" class="row" :class="{ 'selected' : selected_club === club, 'unselected' : selected_club != club }" @click="selectClub(club)">

                    <Timeline :club="club" v-on:select-tenure="selectTenure" :selected_club="selected_club" :seasons="seasons" :selected_tenure="selected_tenure" />

                </div>

            </div>

        </div>

    </div>
    


</template>


<script>
import Timeline from '@/components/Timeline.vue'

export default {
    name: 'PremierLeagueManagers',
    components: {
        Timeline
    },
    data() {
        return {
            seasons: [],
            clubs: [],
            months: ["May", "June", "July", "August", "September", "October", "November", "December", "January", "March", "April"],
            datapoints: [],
            details_shown_for: [],
            selected_club: '',
            selected_tenure: [],
            reasons: []
        }
    },
    created() {
        this.getSeasons();
        this.getClubs();
        this.getReasonsForSacking();
    },
    methods: {
        getSeasons() {
            const managerData = this.$premier_league_managers_dataset
            const seasons = []
            for (let i = 0; i < managerData.length; i++) {
                if (!seasons.includes(managerData[i].year)) {
                    seasons.push(managerData[i].year)
                }
            }
            this.seasons = seasons
        },
        getReasonsForSacking() {
            const managerData = this.$premier_league_managers_dataset
            const reasons = []
            for (let i = 0; i < managerData.length; i++) {
                if (!reasons.includes(managerData[i]["reason of departure"])) {
                    reasons.push(managerData[i]["reason of departure"])
                }
            }
            this.reasons = reasons
        },
        getData(season) {
            const managerData = this.$premier_league_managers_dataset
            const seasonData = []
            for (let i = 0; i < managerData.length; i++) {
                if (managerData[i].year === season) {
                    seasonData.push(managerData[i])
                }
            }
            return seasonData
        },
        getClubs() {
            const managerData = this.$premier_league_managers_dataset
            const clubsList = []
            for (let i = 0; i < managerData.length; i++) {
                if (!clubsList.includes(managerData[i].team)) {
                    clubsList.push(managerData[i].team)
                }
            }
            this.clubs = clubsList.sort((a, b) => a.localeCompare(b))     
        },
        selectTenure: function(tenure)  {
            this.selected_tenure = []
            this.selected_tenure = tenure
        },
        selectClub(club) {
            if (this.selected_club != club) {
                this.details_shown_for = []
                this.selected_club = club
            } else {
                this.selected_club = ''
                this.details_shown_for = []
            }
        },
        getReasonBorderColour(reason) {
            if (reason === 'Signed by another club') {
                return "#C8A2CB"
            }
            if (reason === 'Sacked') {
                return "#BDDFB9"
            }
            if (reason === 'End of caretaker spell') {
                return "#C6B8DA"
            }
            if (reason === 'Mutual consent') {
                return "#B9AD8F"
            }
            if (reason === 'Resigned') {
                return "#AED4D7"
            }
            if (reason === 'Change in position') {
                return "#968FB2"
            }
            if (reason === 'Illness') {
                return "#E9E5CD"
            }
            if (reason === 'End of contract') {
                return "#FBF6B5"
            }
            if (reason === 'Medical break') {
                return "#88C3C8"
            }
            if (reason === 'Mutual agreement') {
                return "#E3D0B9"
            }
            if (reason === 'Retired') {
                return "#ABB899"
            }
        }
    }
}



</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Arvo:ital@0;1&family=Quicksand:wght@300;500;700&display=swap');

#container {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

h2 {
    margin: 0px 0px 40px 0px;
    font-size: 15px;
}

#graph-container {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.yaxis {
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

.club {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
}

.icon {
    max-width: 20px;
    max-height: 20px;
    margin-right: 5px;
}

.season {
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: inherit;
}

.plane {
    width: 80%;
    display: flex;
    flex-direction: column;
}

.xaxis {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.row {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
}

.unselected:hover {
    /* background-color: #F9F9ED; */
    transition: 0.2s;
}

.selected {
    /* background-color: #F4F6D4; */
}

.reasons-for-departure {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.flex {
    display: flex;
    flex-direction: row; 
    align-items: center;
    font-size: 12.5px;
    font-weight: 600;
    color: gray;
    margin-right: 20px;
}

.reason-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
}

@media(max-width: 1100px) {

    .season {
        visibility: hidden;
        font-size: 8px;
    }

    .season:nth-child(4n) {
        visibility: visible;
    }
}

@media(max-width: 1000px) {
    .club {
        font-size: 10px;
    }
}

@media(max-width: 700px) {
    .club {
        font-size: 0px;
    }
}

</style>