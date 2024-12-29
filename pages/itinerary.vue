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
});
</script>

<template>
    <div style="padding-left: 3px;">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival Date</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">Paris, France</td>
              <td class="px-6 py-4 whitespace-nowrap">Eiffel Tower, Louvre Museum</td>
              <td class="px-6 py-4 whitespace-nowrap">April 1</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Kyoto, Japan</td>
              <td class="px-6 py-4 whitespace-nowrap">Fushimi Inari Shrine, Kinkaku-ji</td>
              <td class="px-6 py-4 whitespace-nowrap">April 5</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">New York City, USA</td>
              <td class="px-6 py-4 whitespace-nowrap">Statue of Liberty, Central Park</td>
              <td class="px-6 py-4 whitespace-nowrap">April 10</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Rome, Italy</td>
              <td class="px-6 py-4 whitespace-nowrap">Colosseum, Vatican City</td>
              <td class="px-6 py-4 whitespace-nowrap">April 15</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">Barcelona, Spain</td>
              <td class="px-6 py-4 whitespace-nowrap">Sagrada Familia, Park Güell</td>
              <td class="px-6 py-4 whitespace-nowrap">April 20</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>


<style lang="scss" scoped>

</style>