<template>
    <div class="user-card">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
           style="width: 70px; height: 70px; border-radius: 50%;"
           alt="User photo">
    </div>
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
.user-card {
  margin-left: 15px; 
  margin-right: auto;

  display: flex;
  align-items: left;
  justify-content: left;

  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  
  background-color: white;
  border: 1px solid red;
  border-radius: 10px;

}
</style>