<template>
  <q-layout  v-if="!loggedIn"  view="lHh Lpr lFf">
    <q-header >
      <q-toolbar class="bg-black text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>

            Janus Containment

          </q-toolbar-title>

        <q-btn title="Open Clearance Card" flat round dense icon="badge" class="q-mr-xs" @click="openEmployeeBadge()" />
        <q-btn flat round dense icon="notifications" />
        <q-btn to="profile" flat round dense icon="account_circle" />

      </q-toolbar>
    </q-header>

    <q-drawer
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
  <q-layout v-else>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import EssentialLink, { essentialLinkProps } from 'components/j-essential-link.vue'

defineOptions({
  name: 'MainLayout'
})

const dialog = ref(false),
  leftDrawerOpen = ref(false),
  loggedIn = ref(false),
  linksList: essentialLinkProps[] = [
    {
      title: 'Employee Details',
      icon: 'account_circle',
      link: '/profile'
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
