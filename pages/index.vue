<template>
    <div> </div>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { useRouterStore } from '@/stores/routerStore'
import { onMounted } from 'vue'
import { fullDate } from '~/helpers/helpers'

    const user = useUserStore()
    const routerStore = useRouterStore()
    const { $helpers } = useNuxtApp()

    const { full } = fullDate()

    onMounted(() => {
      console.log(full)
    })
</script>
  
<style lang="scss" scoped>

</style>