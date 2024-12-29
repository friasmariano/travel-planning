
<script setup>
import { useUserStore } from "@/stores/user";
import { useRouterStore } from "@/stores/routerStore";
import { onMounted } from "vue";
import { fullDate } from "~/helpers/helpers";

const user = useUserStore();
const routerStore = useRouterStore();
const { $helpers } = useNuxtApp();

const { full } = fullDate();

definePageMeta({
  layout: 'default',
  middleware: () => {
    const localStore = useLocalStore();

    // if (!localStore.isLoggedIn) {
    //   return navigateTo('/login');
    // }
  }
});

onMounted(() => {
  console.log(full);
});
</script>

<template>
  <div class="user-card has-box-shadow">
    <div class="user-header">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        style="width: 100px; 
               height: 100px; 
               
               border-radius: 50%;
               
               box-shadow: 0px 3px 20px 0px rgba(53, 53, 53, 0.2);"
        alt="User photo"
      />
      <div class="user-summary">
        <p>John Doe</p>
        <p style="font-size: 1.05rem; padding: 0px; margin: 0px">
          Netherlands
        </p>
      </div>
    </div>
    <!-- <button class="c-button is-blue">Change picture</button> -->

    <div class="user-info">
      <p><b>Country of Origin:</b> Netherlands</p>
      <p><b>Email:</b> John@example.com</p>
      <p><b>Username:</b> john.doe</p>
      <p><b>Location:</b> Netherlands</p>
      <p><b>Gender:</b> Male</p>
      <p><b>Date of Birth:</b> 01-01-2000</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-card {
  margin-left: 15px;
  margin-right: 15px;

  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;
}

.user-header {
  display: flex;
  align-items: left;
  justify-content: left;
}

.user-summary {
  padding: 20px;
  font-size: 1.4rem;
  color: rgb(107, 107, 107);
  font-weight: 400;
}

.user-info {
  padding-left: 120px;
  padding-top: 10px;
}

@media (max-width: 673px) {
  .user-header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .user-info {
    padding-left: 0px;
    padding-top: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }
}
</style>
