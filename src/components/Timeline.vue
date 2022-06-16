<template>

    <div class="timeline" :class="{ 'fade-out' : (selected_club != club && selected_club != '')} " >

        <div v-for="season in seasons" :key="season">

            <div class="season-indicator" :style="{ 'left' : `${(seasons.indexOf(season)) * 4.545454545}%` }" :class="{ 'transparent' : !inPremierLeague(season) }"></div>


        </div>

        <div v-for="tenure in tenures" :key="Math.random().toString(16).slice(2)" :style="{ 'left' : getPosition(tenure.start_date), 'width' : getWidth(tenure.start_date, tenure.end_date) }" class="tenure" @click="selectTenure(tenure)" @mouseover="selectTenure(tenure)">

            <div class="quick-name" v-if="selected_tenure === tenure" :style="{ 'left' : getPosition(tenure.end_date) }">{{ tenure.manager_name }}</div>

        </div>

        <div v-for="manager_change in manager_changes" :key="Math.random().toString(16).slice(2)">

            <div class="datapoint" :style="{ 'left' : getPosition(manager_change.date_of_vacancy) }"></div>

        </div>
        

    </div>
    

</template>


<script>

export default {
    name: "Timeline",
    props: ["club", "details_shown_for", "selected_club", "seasons", "selected_tenure"],
    data() {
        return {
            manager_changes: [],
            show_details: [],
            show_name: [],
            tenures: []
        }
    },
    created() {
        this.getClubTimeline(this.club)
    },
    methods: {
        getClubTimeline(club) {
            const managerData = this.$premier_league_managers_dataset
            const managerChanges = []
            const tenures = []
            for (let i = 0; i < managerData.length; i++) {
                if (managerData[i].team === club) {
                    managerChanges.push(managerData[i])
                }
            }
            this.manager_changes = managerChanges
            for (let i = 0; i < this.manager_changes.length; i++) {
                const tenure = {}
                tenure.end_date = this.manager_changes[i].date_of_vacancy
                tenure.manager_name = this.manager_changes[i].outgoing_manager
                if (this.manager_changes.indexOf(this.manager_changes[i]) === 0) {
                    tenure.start_date = '2000-06-01'
                } else {
                    tenure.start_date = this.manager_changes[i-1].date_of_appointment
                }
                tenures.push(tenure)
            } 
            const last_tenure = {}
            last_tenure.start_date = this.manager_changes.slice(-1).pop().date_of_appointment 
            const endDate = new Date() 
            last_tenure.end_date = endDate.toISOString().split('T')[0]
            last_tenure.manager_name = this.manager_changes.slice(-1).pop().incoming_manager
            tenures.push(last_tenure)
            this.tenures = tenures
        },
        showName(manager_change) {
            this.show_name = manager_change
        },
        getPosition(dateOfSacking) {
            const max = 8096
            const startDate = '2000-06-01'
            const endDate = dateOfSacking
            const diffInMs = new Date(endDate) - new Date(startDate)
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
            return `${(diffInDays / max) * 100}%`
        },
        getWidth(dateOfAppointment, dateOfSacking) {
            const max = 8096
            const startDate = dateOfAppointment
            const endDate = dateOfSacking
            const diffInMs = new Date(endDate) - new Date(startDate)
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
            return `${(diffInDays / max) * 100}%`
        },
        selectTenure(tenure) {
            this.selected_tenure = tenure
        },
        selectTenure(tenure) {
            this.$emit('select-tenure', tenure)
        },
        hideDetails() {
            this.show_details = []
        },
        inPremierLeague(season) {
            const allSeasons = this.$premier_league_seasons
            for (let i = 0; i < allSeasons.length; i++) {
                if (allSeasons[i].year === season) {
                    if (allSeasons[i].clubs.includes(this.club)) {
                        return true
                    } else {
                        return false
                    }
                }
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

.timeline {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 1;
}

.season-indicator {
    position: absolute;
    border-bottom: 1px solid lightgray;
    width: 4.761904761%;
}

.hide-season {
    position: absolute;
    width: 4.761904761%;
    background-color: white;
    height: 20px;
}

.datapoint {
    position: absolute;
    width: 5px;
    height: 15px;
    /* border-radius: 50%; */
    cursor: pointer;
    z-index: 1;
    top: -7.5px;
    background-color: white;
    /* border: 2px solid rgba(255, 255, 255, 0.0); */
}

.fade-out {
    opacity: 0.1;
    transition: 0.5s;
}

.datapoint:hover {
    transition: 0.2s;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
}

.details {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid lightgray;
    box-sizing: border-box;
    padding: 10px;
    z-index: 2;
    bottom: 0px;
    left: 0px;
    right: 0px;
    justify-content: center;
    height: 50vh;
}

.exit-button {
    width: 200px;
    height: 20px;
}

.exit-button img {
    height: 20px;
    width: 20px;
}

.details-header {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

.details-header h3 {
    font-size: 3vw;
    font-weight: 400;
    margin: 0px 0px 0px 0px;
}

.reason-for-departure {
    background-color: black;
    color: white;
    font-size: 10px;
    box-sizing: border-box;
    padding: 2.5px 5px 2.5px 5px;
    width: max-content;
    border-radius: 2.5px;
}

.name {
    font-weight: 600;
    font-size: 3vw;
}

.arrow {
    width: 40px;
}

.arrow-small {
    width: 40px;
}

.outgoing {
    margin: 20px;
}

.incoming {
    margin: 20px;
}

.transparent {
    background-color: white;
    height: 20px;
    border-bottom: 0px;
    z-index: 50;
    top: -10px;
}

.date {
    font-size: 12.5px;
    font-weight: 600;
}

.manager-name span {
    font-weight: 600;
}

.icon {
    width: 40px;
    height: auto;
    margin-bottom: 10px;
}

.greyed-out {
    background-color: lightgray;
}

.clicked {
    border: 2px solid black;
    top: -8.5px;
}

.quick-name {
    position: absolute;
    top: 15px;
    font-size: 11px;
    font-weight: 600;
}

.tenure {
    background-color: rgba(145, 38, 143, 0.5);
    height: 15px;
    position: absolute;
    top: -7.5px;
    margin-right: 5px;
}

.tenure:hover {
    background-color: rgba(145, 38, 143, 1);
    transition: 0.2s;
}

.selected-club {
    flex-direction: column;
}

@media(max-width: 700px) {
    .datapoint {
        width: 10px;
        height: 10px;
        top: -5px;
    }
}



</style>