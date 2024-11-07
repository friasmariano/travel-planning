<script setup>
    definePageMeta({
        layout: 'presentation'
    })
</script>

<template>
    <div>
        <nav class="flex justify-between p-3 drop-shadow-2xl" 
            style="background: rgb(13,59,71);
                   background: linear-gradient(0deg, rgba(13,59,71,1) 0%, rgba(20,71,84,1) 49%, rgba(23,98,117,1) 100%);">
            <a href="#" class="flex px-5">
                <img id="brandLogo" class="h-9 w-9" src="/img/logo.png" alt="Logo">
                <span class="text-white text-xl py-1 font-medium">TravelPlanner</span>
            </a>
            <div class="">
                <button class="px-4 py-2 rounded-xl bg-slate-50">Hello</button>
                <!-- <a href="#" class="text-white">Services</a> -->
                <!-- <a href="#" class="text-white">Contact</a> -->
            </div>
            <button class="lg:hidden text-white">☰</button>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

</style>