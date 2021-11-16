<template>
    
    <div class="quick-facts">
    
        <h3>Quick facts</h3>

        <div v-for="fact in project.facts" :key="fact">
            
            <h5 :style="{'color' : project.colour }">{{ fact.tag }}</h5>

            <p>{{ fact.description }}</p>

        </div>


    </div>

</template>

<script>
export default {
    name: 'QuickFacts',
    props: ['project']
}
</script>

<style scoped>

.quick-facts {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    /* border: 1px solid lightgray; */
    background-color: #F7F7F7;
    border-radius: 5px;
    flex-direction: column;
}

.quick-facts h3 {
    margin: 0px 0px 30px 0px;
    font-size: 20px;
    font-weight: 200;
}

.quick-facts h5 {
    font-size: 30px;
    font-weight: 600;
    margin: 0px 0px 10px 0px;
}

.quick-facts p {
    margin: 0px 0px 30px 0px;
    font-family: 'Bitter', serif;
}

</style>