<template>
  <q-page class="row items-center justify-evenly">
        <q-img
            src="/src/assets/img/facility-floor-plan.png"
            spinner-color="white"
    />

    <q-btn to="/facility/room">Idle Lab - Night</q-btn>

    <router-view />
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'The-Facility'
})
</script>
