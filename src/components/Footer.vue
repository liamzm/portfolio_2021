<template>

    <div class="footer">

        <div class="footer-content">
        
            <h3 @click="returnHome()">Liam Zanyk McLean</h3>

            <div class="links">
                <div class="link" @click="redirectToAbout()">About</div>
                <div class="link" @click="redirectToContact()">Contact</div>
                <div class="link" @click="openGithub()"><img src="../assets/icons/git.svg" /></div>
            </div>

        </div>

    </div>



</template>


<script>

export default {
    name: 'Header',
    methods: {
        returnHome() {
            this.$router.replace('/');
        },
        redirectToAbout() {
            this.$router.replace('/about')
        },
        redirectToContact() {
            this.$router.replace('/contact')
        },
        openGithub() {
            window.open('https://github.com/liamzm')
        }
    }
}


</script>


<style scoped>

.footer {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    margin-top: 50px;
}

.footer-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

h3 {
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
}

.links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

.link {
    font-size: 12.5px;
    margin: 0px 10px 0px 10px;
    cursor: pointer;
}

.link img {
    width: 50px;
    height: 50px;
}




</style>