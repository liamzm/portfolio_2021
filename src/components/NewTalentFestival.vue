<template>

    <div class="project-container">

        <div class="sidebar">

            <QuickFacts :project="project" />

        </div>

        <div class="project-cat">

            <h3>Bilingual competition registration system</h3>

            <div class="image-cont two-image">

                <img src="../assets/images/newtalent1.jpg" />

                <img src="../assets/images/newtalent2.jpg" />

            </div>

            <p>The New Talent Festival registration system is offered in two languages — English and Chinese. The competition attracts participants from a wide range of countries and regions. Challenges included designing form fields to accomodate the tendency of Chinese text to more narrow that English text of the same meaning.</p>

            <h3>Mobile-first approach</h3>

            <div class="image-cont two-image mobile-view">

                <img src="../assets/images/newtalentmobile1.jpg" />

                <img src="../assets/images/newtalentmobile3.jpg" />

            </div>

            <p>Fully-featured PWA which is installable on Android devices.</p>

            <h3>Complex email integration</h3>

            <div class="image-cont two-image">

                <img src="../assets/images/newtalentwide1.jpg" />

                <img src="../assets/images/newtalentwide2.jpg" />

            </div>

            <p>Due to the multilingual nature of the site, as well as the wide range of available registration options, a complex email integration was required. In total, 16 different automated email processes were implemented, depending on language and competition entry selections.</p>

        </div>

    </div>


</template>


<script>
import QuickFacts from '@/components/QuickFacts.vue'

export default {
    name: "NewTalentFestival",
    components: {
        QuickFacts
    },
    props: ['project']
}





</script>

<style scoped>





</style>