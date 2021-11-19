<template>

<div class="project-container">

        <div class="sidebar">

            <QuickFacts :project="project" />

        </div>

    </div>
    
</template>


<script>
import QuickFacts from '@/components/QuickFacts.vue'

export default {
    name: 'PassengerFlights',
    components: {
        QuickFacts
    },
    props: ['project']
}
</script>

