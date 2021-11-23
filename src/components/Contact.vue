<template>

    <div class="info-container">

        <h1>Contact me</h1>

        <p>I can be reached at <span>liamzm@gmail.com</span>.</p>

    </div>



</template>


<script>

export default {
    name: 'Contact'
}



</script>

<style scoped>

.info-container {
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: auto;
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