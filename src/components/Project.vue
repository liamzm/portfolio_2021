<template>

    <div class="project-thumb">

        <img :src="require(`../assets/images/${project.icon}`)" class="icon" v-if="project.icon != ''" />

        <img :src="require(`../assets/images/${project.image}.png`)" class="image" />

        <p class="tag">{{ project.tag }}</p>

        <h1>{{ project.name }}</h1>

        <a class="project-link">{{ project.site }}</a>

        <p class="project-description">{{ project.description }}</p>

        <p class="refer" :style="{ 'background-color' : project.colour }">See more <img :src="require(`../assets/icons/arrow.svg`)" /></p>

    </div>



</template>


<script>

export default {
    name: 'Project',
    props: ['project']
}



</script>

<style scoped>

.project-thumb {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 25px;
    border-radius: 10px;
}

.project-thumb:hover {
    background-color: #F7F7F7;
    transition: 0.5s;
    cursor: pointer;
}

.icon {
    height: 30px;
    margin-bottom: 20px;
    max-width: 100px;
    border-radius: 5px;
}

.image {
    max-height: 319.031px;
    border-radius: 10px;
    height: auto;
    width: 100%;
}

h1 {
    margin: 10px 0px 20px 0px;
    font-weight: 600;
    box-sizing: border-box;
}

.project-link {
    margin-top: 0px;
}

.project-description {
    font-family: 'Bitter', serif;
    margin-bottom: 0px;
}

.refer {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    margin: 20px 0px 0px 0px;
    color: white;
    width: max-content;
    box-sizing: border-box;
    padding: 5px 5px 5px 5px;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
}

.refer img {
    width: 30px;
    margin-left: 10px;
}

@media(max-width: 1000px) {
    h1 {
        font-size: 25px;
    }
}

@media(max-width: 700px) {
    .project-thumb {
        border: 0px;
    }
}


</style>