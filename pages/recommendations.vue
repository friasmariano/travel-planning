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
       <div style="padding: 40px 0px 0px 40px;">
                    <ul style="list-style-type: none; padding-left: 20px;">
            <li style="padding-bottom: 10px;">
              <font-awesome-icon :icon="['fas', 'star']" style="color: #fc9905; margin-right: 5px;" />
              <strong>Paris, France:</strong> Don't miss a visit to the Eiffel Tower at night for a stunning light show. Also, explore the Louvre Museum early in the morning to avoid the crowds.
            </li>
            <li style="padding-bottom: 10px;">
              <font-awesome-icon :icon="['fas', 'star']" style="color: #fc9905; margin-right: 5px;" />
              <strong>Kyoto, Japan:</strong> Take a peaceful walk through the bamboo groves of Arashiyama. Visit the Fushimi Inari Shrine and hike up to the top for a panoramic view of Kyoto.
            </li>
            <li style="padding-bottom: 10px;">
              <font-awesome-icon :icon="['fas', 'star']" style="color: #fc9905; margin-right: 5px;" />
              <strong>New York City, USA:</strong> Experience the vibrant atmosphere of Times Square at night. Take a ferry to the Statue of Liberty and enjoy a walk in Central Park.
            </li>
            <li style="padding-bottom: 10px;">
              <font-awesome-icon :icon="['fas', 'star']" style="color: #fc9905; margin-right: 5px;" />
              <strong>Rome, Italy:</strong> Explore the ancient ruins of the Colosseum and the Roman Forum. Don't forget to toss a coin into the Trevi Fountain for good luck.
            </li>
            <li style="padding-bottom: 10px;">
              <font-awesome-icon :icon="['fas', 'star']" style="color: #fc9905; margin-right: 5px;" />
              <strong>Barcelona, Spain:</strong> Visit the Sagrada Familia and take a stroll through Park Güell. Enjoy the local cuisine at a tapas bar in the Gothic Quarter.
            </li>
          </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>