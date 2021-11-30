<template>

    <!-- <div class="season-row">

        <div v-for="datapoint in season_data" :key="Math.random().toString(16).slice(2)">

            <ManagerChange :datapoint="datapoint" :season_start_date="season_start_date" v-on:show-details="showDetails" :details_shown_for="details_shown_for" />
            
        </div>



    </div> -->

    
</template>


<script>
import ManagerChange from '@/components/ManagerChange.vue'

export default {
    name: "Season",
    props: ["season", "season_data", "details_shown_for"],
    components: {
        ManagerChange
    },
    data() {
        return {
            season_start_date: ''
        }
    },
    created() {
        this.getSeasonStartDate();
    },
    methods: {
        getSeasonStartDate() {
            const season = this.season
            const year = season.substring(0, 4);
            this.season_start_date = year.concat("-05-01")
        },
        showDetails: function(sacking)  {
            this.$emit('emit-details', sacking)
        }
    }
}


</script>

<style scoped>

.season-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
}


</style>