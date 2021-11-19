<template>

    <div class="project-container">

        <div class="sidebar">

            <QuickFacts :project="project" />

        </div>

        <div class="project-cat">

            <h3>ILS Frequencies on all the world's airports</h3>

            <div class="image-cont one-image">

                <img src="../assets/images/ils1.png" />

            </div>

            <p>Flight simulation is an increasingly popular hobby. Advanced players who seek a certain degree of realism enjoy flying Instrument Landing System (ILS) approaches into airports. ILS is used to guide the airplane into a chosen runway regardless of weather conditions, visibility or other factors which make a visual approach undesirable. Each runway has its own unique ILS frequency, which needs to be manually entered on most aircraft. As ILS frequencies can sometimes be difficult to find online (much additional information needs to be sorted through to find the desired frequently), I developed a tool that allows flight simmers to find any desired ILS frequency in seconds, for all the ILS-capable airports in the world (about 87,000). </p>

            <h3>All runways listed</h3>

            <div class="image-cont one-image">

                <img src="../assets/images/ils2.png" />

            </div>

            <p>All runways are listed, along with corresponding satellite imagery. </p>

            <h3>Progressive Web App</h3>

            <div class="image-cont one-image">

                <img src="../assets/images/ils3.png" />

            </div>

            <p>ILS Frequency Lookup is downloadable as a Progressive Web App (PWA) to allow for easy searches on any platform. Many users prefer the desktop PWA which can be downloaded directly via Chrome, while others prefer Android or iOS for easy use on mobile phones.</p>

        </div>

    </div>

</template>

<script>
import QuickFacts from '@/components/QuickFacts.vue'

export default {
    name: 'IlsFrequencyLookup',
    components: {
        QuickFacts
    },
    props: ['project']
}
</script>

<style scoped>

</style>