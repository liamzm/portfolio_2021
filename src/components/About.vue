<template>

    <div class="info-container">
        
        <h1>About me</h1>

        <div class="info-container-content">

            <div class="image-container">

                <img src="../assets/images/me.png" />

            </div>

            <div class="info-container-content-text">

                <p><span>My name is Liam and I am a full-stack web developer.</span></p>

                <p>Building useful tools and telling stories visually are what I like to do.</p>

                <p>Currently based in Bali, Indonesia, I am the co-founder of <a href="https://menulingua.com">Menulingua, a digital restaurant menu service provider</a>.</p>

                <p>I am available for freelance projects.</p>

                <p class="email">Feel free to reach out to me at liamzm@gmail.com.</p>

            </div>

        </div>

    </div>



</template>
    
<script>

export default {
    name: 'About',
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
  min-height: 80vh;
  margin-top: 100px;
}

.info-container-content {
  display: flex;
  flex-direction: row;
}

.info-container-content img {
  width: 100px;
  height: 100px;
  /* margin-right: 5%; */
  object-fit: cover;
  border-radius: 50%;
}

.image-container {
    width: 115px;
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid lightgray;
    margin-right: 20px;
}

.info-container-content-text {
  width: 65%;
  font-family: 'Bitter', sans-serif;
  border-bottom: 1px dotted lightgray;
}

p span {
    font-weight: 600;
    font-size: 20px;
}

p a {
    font-weight: 600;
}

.email {
    font-size: 17.5px;
    font-weight: 600;
}

</style>