<template>
    <div>
      Hello {{ user.name }}
      <!-- <div>Current Count: {{ counter.count }}</div> -->
      <!-- <button class="c-button is-blue">Call Store</button> -->
      <pre>{{ routerStore.route }}</pre>
    </div>
</template>

<script>
// import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { useRouterStore } from '@/stores/routerStore'

export default {
  setup() {
    const user = useUserStore()
    const routerStore = useRouterStore()

    return {
      user,
      routerStore
    }
  }
}
</script>
  
<style lang="scss" scoped>

</style>