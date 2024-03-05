<template>
    <div class="banner banner-background">
        <div class="text-container"> 
            <p class="title">Welcome</p>
            <p class="subtitle">This is the main page</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.banner-background {
    // margin-top: 60px;

    background-image: url('~/assets/images/banner-2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    align-items: left;
    justify-content: left;
}

.text-container {
    width: 100%;
    
    margin-right: auto;

    padding-left: 40px;
    margin-top: auto;
    margin-bottom: auto;

    height: 400px;

    background: linear-gradient(to right, rgba(6, 41, 51, 0.3) , rgba(36, 36, 36, 0.15), rgba(36, 36, 36, 0));

    // backdrop-filter: blur(10px);
}

.title {
    padding-left: 20px;
    margin-right: auto;
    
    margin-top: 135px;
    margin-bottom: auto;

    color: white;
    font-size: 4rem;

    // border-left: 1px solid white;

    text-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);

    margin-left: 30px;

}

.subtitle {
    padding-left: 25px;
    margin-right: auto;
    
    margin-bottom: auto;

    color: white;
    font-size: 1.26rem;

    // border-left: 1px solid white;

    text-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);

    margin-left: 30px;
}
</style>