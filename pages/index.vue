<template>
    <div>
      <!-- Hello {{ user.name }} -->
      <!-- <div>Current Count: {{ counter.count }}</div> -->
      <!-- <button class="c-button is-blue">Call Store</button> -->
      <!-- <p>{{ $hello(user.name ) }}</p> -->
      <!-- <p>{{ $route.path }}</p> -->

      <!-- <p>{{ $currentRoute }}</p> -->
    </div>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { useRouterStore } from '@/stores/routerStore'
import { onMounted } from 'vue'

    const user = useUserStore()
    const routerStore = useRouterStore()
    const { $helpers } = useNuxtApp()

    onMounted(() => {
      // console.log($helpers.fullDate())
    })
</script>
  
<style lang="scss" scoped>

</style>