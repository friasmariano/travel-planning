<script setup>
import { useLocalStore } from '@/stores/useLocalStore'
import Modal from '@/components/Modal.vue'

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
      <Modal />
    </div>
</template>

<style lang="scss" scoped>

</style>