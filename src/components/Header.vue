<template>
        
    <div id="header" :class="{ 'small-header' : fixed === true }">
        
        <div class="content" :class=" { 'content-scrolled' : fixed === true }">
            
            <div class="main-info" @click="returnHome()">
                <img src="@/assets/images/mustache.svg" />
                <h3>Liam Zanyk McLean</h3>
            </div>
            
            <div class="links">

                <div class="link" :class="{ 'small-margin' : fixed === true }" @click="redirectToAbout()">
                    <img src="@/assets/images/mustache_circle.svg" />
                    <div v-if="fixed === false">About</div>
                </div>

                <div class="link" :class="{ 'small-margin' : fixed === true }" @click="redirectToContact()">
                    <img src="@/assets/images/contact_icon.svg" />
                    <div v-if="fixed === false">Contact</div>
                </div>

            </div>
        </div>

    </div>

</template>


<script>

export default {
    name: 'Header',
    data () {
        return {
            fixed: Boolean
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        returnHome() {
            this.$router.replace('/');
        },
        handleScroll (event) {
            var target = document.querySelector('#header');
            if (window.scrollY >= target.offsetHeight) {
                this.fixed = true
            } else if (window.scrollY < target.offsetHeight) {
                this.fixed = false
            }
        },
        redirectToAbout() {
            this.$router.replace('/about')
        },
        redirectToContact() {
            this.$router.replace('/contact')
        }
    }
}


</script>


<style scoped>

#header {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    height: 100px;
    z-index: 15;
    position: fixed;
    width: 100%;
    top: 0;
    transition: 0.2s;
}

.small-header {
    height: 50px !important;
    transition: 0.2s;
    background: rgba(235, 235, 235, 1);
    /* border-bottom: 1px solid lightgray !important; */
}

.content {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content-scrolled {
    height: 50px;
}

.links {
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.main-info {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.main-info img {
    width: 40px;
    margin-right: 10px;
}


.link {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    transition: 0.2s;
    cursor: pointer;
}

.link img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}

.small-margin {
    margin-left: 20px;
    transition: 0.2s;
}


#header h3 {
    cursor: pointer;
    font-family: 'Cabin', sans-serif;
    letter-spacing: 0.5px;

}

@media(max-width: 700px) {
    #header h3 {
        font-size: 15px;
    }

    .links div {
        font-size: 12.5px;
    }

    #header {
        /* border-bottom: 1px solid black; */
        margin-bottom: 20px;
    }
}

</style>