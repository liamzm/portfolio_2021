<template>

    <div class="container">
        <div class="pseudo" v-if="fixed === true"></div>
        
            <div id="header" :class="{ 'fixed' : fixed === true }">
                <div class="content">
                    <h3 @click="returnHome()">Liam Zanyk McLean</h3>
                    <div class="links">
                        <div @click="redirectToAbout()">About</div>
                        <div @click="redirectToContact()">Contact</div>
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
    height: 60px;
    z-index: 15;
}

.pseudo {
    height: 60px;
    width: 100%;
}

.fixed::before {
    margin-top: 60px;
}

.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #F7F7F7;
    transition: 0.5s;
}

.content {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    position: sticky;
    justify-content: space-between;
}

.links {
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.links div {
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
}

.links div:hover {
    opacity: 0.5;
    transition: 0.2s;
}

#header h3 {
    cursor: pointer;
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