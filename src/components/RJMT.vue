<template>

    <div class="project-container">

        <div class="sidebar">

            <QuickFacts :project="project" />

        </div>

        <div class="project-cat">

            <h3>Integrated booking system</h3>

            <div class="image-cont two-image mobile-view">

                <img src="../assets/images/rjmt2.jpg" />

                <img src="../assets/images/rjmt1.jpg" />

            </div>

            <p>Booking system includes a wide variety of massage options and a calendar integration to avoid double-bookings. Guests can choose a massage, time, submit their booking and then receive a confirmation email.</p>

        </div>

    </div>







</template>

<script>
import QuickFacts from '@/components/QuickFacts.vue'

export default {
    name: "RJMT",
    components: {
        QuickFacts
    },
    props: ['project']
}



</script>

<style scoped>



</style>