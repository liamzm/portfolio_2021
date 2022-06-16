<template>

    <div class="project-container">

        <div class="sidebar">

            <QuickFacts :project="project" />

        </div>

        <div class="project-cat">

            <h3>Storefront and product demo</h3>

            <div class="image-cont two-image">

                <img src="../assets/images/plastipoint3.jpg" />

                <img src="../assets/images/plastipoint2.jpg" />

            </div>

            <p>The Plastipoint project seeks to reduce the amount of plastic waste in the environment and empower local recyclers. It is being launched as a pilot project in Kenya before expansion to other developing nations.</p>

        </div>

    </div>







</template>

<script>
import QuickFacts from '@/components/QuickFacts.vue'

export default {
    name: "Plastipoint",
    components: {
        QuickFacts
    },
    props: ['project']
}



</script>

<style scoped>



</style>