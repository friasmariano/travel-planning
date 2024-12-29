<script setup>
import { ref } from 'vue'
import { useLocalStore } from '@/stores/useLocalStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
    <div>
        <ul style="padding: 50px 0px 0px 50px; font-size: 1.1rem;">
                   <li>
            <FontAwesomeIcon :icon="['fas', 'map-marked-alt']" style="color: #fc9905;" /> 
            <span style="margin-left: 10px; font-weight: 500;">Paris, France</span>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'map-marked-alt']" style="color: #fc9905;" /> 
            <span style="margin-left: 10px; font-weight: 500;">Kyoto, Japan</span>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'map-marked-alt']" style="color: #fc9905;" /> 
            <span style="margin-left: 10px; font-weight: 500;">New York City, USA</span>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'map-marked-alt']" style="color: #fc9905;" /> 
            <span style="margin-left: 10px; font-weight: 500;">Rome, Italy</span>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'map-marked-alt']" style="color: #fc9905;" /> 
            <span style="margin-left: 10px; font-weight: 500;">Barcelona, Spain</span>
          </li>
      </ul>
    </div>
</template>