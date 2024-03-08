<script setup>
// import { useCounterStore } from '@/stores/counter'

const user = useUserStore()

// counter.count++

// counter.$patch({ count: counter.count + 1 })

// counter.increment()
</script>


<template>
    <div>
      Hello {{ user.name }}
      <!-- <div>Current Count: {{ counter.count }}</div> -->
    </div>
  </template>
  