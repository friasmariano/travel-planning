<script setup>
import { useLocalStore } from '@/stores/useLocalStore'

definePageMeta({
  layout: 'default',
  middleware: () => {
    const localStore = useLocalStore();

    if (!localStore.isLoggedIn) {
      return navigateTo('/login');
    }
  }
})
</script>

<template>
    <div>

    </div>
</template>


<style lang="scss" scoped>

</style>