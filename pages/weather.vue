<script setup>
import { useLocalStore } from '@/stores/useLocalStore'

definePageMeta({
  layout: 'default',
  middleware: () => {
    const localStore = useLocalStore();

    // if (!localStore.isLoggedIn) {
    //   return navigateTo('/login');
    // }
  }
})
</script>

<template>
        <div style="margin: 30px 0px 0px 20px; padding-left: 50px; padding-top: 10px; padding-bottom: 10px;
                   display: flex;
                   border-radius: 20px;
                   background: rgb(151,238,255);
                   background: linear-gradient(0deg, rgba(151,238,255,1) 0%, rgba(196,245,255,1) 47%, rgba(255,255,255,1) 100%);
                   width: 550px;
                   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <img
        src="/img/Party_Cloudy_2.png"
        style="width: 205px;"
        alt="User photo"
      />

      <div style="display: flex; flex-direction: column; padding: 40px 0px 0px 25px;">
        <p style="font-size: 2rem; font-weight: 500; color: #085175;">Party Cloudy</p>
        <p style="font-size: 1.6rem; color: #085175;">36 °C</p>
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>