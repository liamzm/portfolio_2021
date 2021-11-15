<template>

    <div>

        <Banner />

        <Skills />

        <Work />

    </div>



</template>

<script>
import Banner from '@/components/Banner.vue'
import Skills from '@/components/Skills.vue'
import Work from '@/components/Work.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        Skills,
        Work
    }
}



</script>

<style scoped>




</style>