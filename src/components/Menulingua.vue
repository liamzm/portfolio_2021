<template>

    <div class="project-container">

        <div class="sidebar">

            <QuickFacts :project="project" />

        </div>

        <div class="project-cat">

            <h3>Menu builder</h3>

            <div class="image-cont two-image">

                <img src="../assets/images/menubuilder.png" />

                <img src="../assets/images/edititem.png" />

            </div>

            <p>The Menulingua menu builder makes it easy for restaurant owners, managers and staff to build a digital menu that matches their branding, can be used for ordering and updated at any time. Clients range from small restaurants to major hotels. A wide range of languages are used on the platform.</p>

            <h3>Guest view</h3>

            <div class="image-cont two-image mobile-view">

                <img src="../assets/images/customerview2.png" />

                <img src="../assets/images/customerview1.png" />

            </div>

            <p>Guests using the Menulingua platform are able to scan a QR code and view the mobile-friendly menu in their browser (no app download required). The menu can be viewed in multiple languages (if enabled), and orders and help requests can be placed.</p>

            <h3>Android app + detailed analytics</h3>

            <div class="image-cont two-image">

                <img src="../assets/images/androidapp.png" />

                <img src="../assets/images/analytics.png" />

            </div>

            <p>Menulingua's Android app allows restaurant staff to receive contactless orders and requests from guests. Such capability can provide assistance to restaurants in instances of staffing shortages and communication difficulties (tourists with lack of ability in local language). Anayltics features allow restaurant staff to keep track of usage, while menu settings allow what kind of orders can be received, and what items can be ordered, at any given time.</p>

        </div>


    </div>



</template>

<script>
import QuickFacts from '@/components/QuickFacts.vue'

export default {
    name: 'Menulingua',
    components: {
        QuickFacts
    },
    props: ['project']
}


</script>

<style scoped>




</style>