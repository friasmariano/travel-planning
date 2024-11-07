
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

    if (!localStore.isLoggedIn) {
      return navigateTo('/login');
    }
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
        src="/img/UserPhoto.png"
        style="width: 100px; height: 100px; border-radius: 50%"
        alt="User photo"
      />
      <div class="user-summary">
        <p>Mariano Frías</p>
        <p style="font-size: 1.05rem; padding: 0px; margin: 0px">
          Dominican Republic
        </p>
      </div>
    </div>
    <button class="c-button is-blue">Change picture</button>

    <div class="user-info">
      <p><b>Country of Origin:</b> Dominican Republic</p>
      <p><b>Email:</b> frias.mariano@gmail.com</p>
      <p><b>Username:</b> frias.mariano</p>
      <p><b>Location:</b> Dominican Republic</p>
      <p><b>Gender:</b> Male</p>
      <p><b>Date of Birth:</b> 03-16-1990</p>
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
