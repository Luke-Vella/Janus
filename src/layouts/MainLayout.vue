<template>
  <q-layout  view="lHh Lpr lFf">
    <q-header >
        <q-toolbar class="bg-black text-white">

            <q-btn
            v-if="user.isLoggedIn"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            />

            <q-toolbar-title @click="$router.push('/')">
                <q-avatar>
                <img style="height:30px" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>

                Janus Containment

            </q-toolbar-title>

            <div v-if="user.isLoggedIn">
                <q-btn title="Open Clearance Card" flat round dense icon="badge" class="q-mr-xs" @click="openEmployeeBadge()" />
                <q-btn flat round dense icon="notifications" />
                <q-btn to="profile" flat round dense icon="account_circle" />
            </div>

        </q-toolbar>
    </q-header>

    <q-drawer
      v-if="user.isLoggedIn"
      v-model="leftDrawerOpen"
      show-if-above
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import EssentialLink, { essentialLinkProps } from 'components/EssentialLink.vue'
import { userStore } from 'stores/user'

defineOptions({
  name: 'MainLayout'
})

const dialog = ref(false),
  user = userStore(),
  leftDrawerOpen = ref(false),
  linksList: essentialLinkProps[] = [
    {
      title: 'Athena',
      icon: 'developer_board',
      link: '/'
    },
    {
      title: 'Facility',
      icon: 'rounded_corner',
      link: '/facility'
    },
    {
      title: 'Active Tasks',
      icon: 'attribution',
      link: '/tasks'
    },
    {
      title: 'Research',
      icon: 'science',
      link: '/research'
    },
    {
      title: 'Infirmary',
      icon: 'local_hotel',
      link: '/infirmary'
    },
    {
      title: 'Anomaly Codex',
      icon: 'psychology_alt',
      link: '/anomalies'
    }
  ]

function openEmployeeBadge () {
  dialog.value = true
}

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
