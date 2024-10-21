<script setup>
definePageMeta({
  layout: 'public',
})
</script>

<template>
    <div class="loginDiv">
        <div class="loginSection">
            <input type="text" />
            <input type="password" />
        </div>

        <div class="loginSection">
            <button class="c-button">Entrar</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loginDiv { 
    width: 55vw; 
    height: 20vh; 

    background-color: grey;

    margin-left: auto;
    margin-right: auto;

    margin-top: 30vh;
    margin-bottom: auto;

    align-items: center;
    justify-content: center;

    flex-direction: column;
}

.loginSection {
    display: flex; text-align: center; align-items: center; margin-left: auto; flex-direction: column;
}
</style>