<template>

    <div class="container">
        <div class="pseudo" v-if="fixed === true"></div>
        
            <div id="header" :class="{ 'fixed' : fixed === true }">
                <div class="content">
                    <h3>Liam Zanyk McLean</h3>
                    <div class="links">
                        <div>About</div>
                        <div>Contact</div>
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
        handleScroll (event) {
            var target = document.querySelector('#header');
            if (window.scrollY >= target.offsetHeight) {
                this.fixed = true
            } else if (window.scrollY < target.offsetHeight) {
                this.fixed = false
            }
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
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid lightgray;
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