<template>

    <!-- <div class="manager-change" @click="showDetails()">

        <div class="datapoint manager-leaving" :style="{ 'left' : getRelativePosition(datapoint.date_of_vacancy) }">

            <img class="icon" :src="require(`../assets/images/pl_icons/${datapoint.team}.png`)" :class="{ 'bw' : details_shown_for != datapoint }" />

        </div>

        <div class="details" v-if="details_shown_for === datapoint" :style="{ 'left' : getRelativePosition(datapoint.date_of_vacancy) }">

            <h3>{{ datapoint.team }}</h3>

            <div>

                <img class="arrow" src="../assets/icons/outgoing_arrow.svg" />

                <p class="outgoing">Outgoing <span>{{ datapoint.outgoing_manager }}</span></p>

                <p class="date">{{ datapoint.date_of_vacancy }}</p>

            </div>

            <div class="incoming">

                <img class="arrow arrow-small" src="../assets/icons/incoming_arrow.svg" />

                <p class="incoming">Replaced by <span>{{ datapoint.incoming_manager }}</span></p>

                <p class="date">{{ datapoint.date_of_appointment }}</p>

            </div>


        </div>

    </div> -->



</template>
    
<script>

export default {
    name: "ManagerChange",
    props: ['datapoint', 'season_start_date', 'details_shown_for'],
    data() {
        return {
            show_details: false,
        }
    },
    methods: {
        getRelativePosition(date) {
            const max = 365
            const startDate = this.season_start_date
            const endDate = date
            const diffInMs = new Date(endDate) - new Date(startDate)
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
            return `${(diffInDays / max) * 100}%`
        },
        showDetails() {
            // this.show_details = !this.show_details
            this.$emit('show-details', this.datapoint)
        }
    }
}




</script>

<style scoped>

.manager-change {
    display: flex;
    cursor: pointer;
}

.manager-change:hover {
    background-color:rgba(0, 0, 0, 0.1);
}

.datapoint {
    position: absolute;
    /* width: 10px;
    height: 10px; */
    margin-top: -5px;
    border-radius: 50%;
}

/* .manager-leaving {
    background-color: white;
    border: 1px solid black;
}

.manager-entering {
    background-color: black;
    border: 1px solid black;
} */

.details {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid lightgray;
    box-sizing: border-box;
    padding: 10px;
    z-index: 10;
    border-radius: 10px;
    top: 70px;
}

.details h3 {
    margin: 0px 0px 10px 0px;
}

.details div {
    margin: 10px 0px 10px 0px;
}

.details p {
    margin: 0px 0px 0px 0px;
}

.details p span {
    font-weight: 600;
}

.arrow {
    width: 25px;
}

.arrow-small {
    width: 17.5px;
}

.outgoing {
    font-size: 15px;
}

.incoming {
    font-size: 12.5px;
}

.date {
    font-size: 12.5px;
    font-weight: 600;
}

.icon {
    width: auto;
    height: 20px;
}

.bw {
    filter: grayscale(100%);
}

</style>