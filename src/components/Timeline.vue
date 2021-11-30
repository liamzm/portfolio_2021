<template>

    <div class="timeline" :class="{ 'fade-out' : (selected_club != club && selected_club != '')} " >

        <div v-for="season in seasons" :key="season">

            <div class="season-indicator" :style="{ 'left' : `${(seasons.indexOf(season)) * 4.545454545}%` }" :class="{ 'transparent' : !inPremierLeague(season) }"></div>

        </div>

        <div v-for="manager_change in manager_changes" :key="Math.random().toString(16).slice(2)">

            <div class="datapoint" :class="{ 'greyed-out' : (show_details != manager_change && show_details.length > 0), 'selected' : (selected_club === club), 'clicked' : show_details === manager_change }" :style="{ 'left' : getPosition(manager_change.date_of_vacancy), 'background-color' : getReasonBorderColour(manager_change['reason of departure']) }"  @click.stop="showDetails(manager_change)" @mouseover="showName(manager_change)"></div>

            <div class="quick-name" v-if="show_name === manager_change" :style="{ 'left' : getPosition(manager_change.date_of_vacancy) }">{{ manager_change.outgoing_manager }}</div>

            <div class="details" v-if="show_details === manager_change && selected_club === club" >

                <div class="exit-button" @click.stop="showDetails(manager_change)"><img src="@/assets/images/exitbutton.svg" /></div>

                <div class="details-header">

                    <img class="icon" :src="require(`../assets/images/pl_icons/${manager_change.team}.png`)" />

                </div>

                <div class="outgoing">

                    <img class="arrow" src="../assets/icons/outgoing_arrow.svg" />

                    <p class="manager-name">{{ manager_change["reason of departure"] }}: <span>{{ manager_change.outgoing_manager }}</span></p>

                    <p class="date">{{ manager_change.date_of_vacancy }}</p>

                </div>

                <div class="incoming">

                    <img class="arrow arrow-small" src="../assets/icons/incoming_arrow.svg" />

                    <p class="manager-name">Replaced by <span>{{ manager_change.incoming_manager }}</span></p>

                    <p class="date">{{ manager_change.date_of_appointment }}</p>

                </div>

            </div>

        </div>
        

    </div>
    

</template>


<script>

export default {
    name: "Timeline",
    props: ["club", "details_shown_for", "selected_club", "seasons"],
    data() {
        return {
            manager_changes: [],
            show_details: [],
            show_name: []
        }
    },
    created() {
        this.getClubTimeline(this.club)
    },
    methods: {
        getClubTimeline(club) {
            const managerData = this.$premier_league_managers_dataset
            const managerChanges = []
            for (let i = 0; i < managerData.length; i++) {
                if (managerData[i].team === club) {
                    managerChanges.push(managerData[i])
                }
            }
            this.manager_changes = managerChanges
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
        showDetailsFor(managerChange) {
            this.$emit('show-details', managerChange)
        },
        showDetails(managerChange) {
            if (this.selected_club === this.club) {
                if (this.show_details != managerChange) {
                    this.show_details = managerChange
                } else {
                    this.show_details = []
                }
            }
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

.datapoint {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
    top: -7.5px;
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
    visibility: hidden;
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
    top: 10px;
    font-size: 11px;
    font-weight: 600;
}

@media(max-width: 700px) {
    .datapoint {
        width: 10px;
        height: 10px;
        top: -5px;
    }
}



</style>