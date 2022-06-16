<template>

    <div class="info-container">

        <h1>Contact me</h1>

        <p>I can be reached at <a href="mailto:liamzm@gmail.com">liamzm@gmail.com</a>.</p>

    </div>



</template>


<script>

export default {
    name: 'Contact',
    created() {
        this.scrollToTop();
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}



</script>

<style scoped>

.info-container {
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  min-height: 70vh;
}

p {
    font-size: 25px;
    font-family: 'Bitter', sans-serif;
}

p span { 
    font-weight: 600;
}

</style>