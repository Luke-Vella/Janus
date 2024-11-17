<template>
    <q-page class="row items-center justify-evenly">
      <LoggedInIndex v-if="user.isLoggedIn" />
        <LoginCard  v-else />
    </q-page>
</template>

<script setup lang="ts">

import LoggedInIndex from 'components/LoggedInIndex.vue'
import LoginCard from 'components/LoginCard.vue'
import { userStore } from 'stores/user'

const user = userStore()

</script>
