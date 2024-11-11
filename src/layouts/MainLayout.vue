<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
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
      bordered
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

    <q-dialog v-model="dialog" position="bottom">

      <q-card style="width: 450px">
        <q-linear-progress :value="1" color="white" />

        <q-card-section class="row items-center no-wrap">

        <q-icon class="q-mr-md" size="lg" name="badge" />

          <div>
            <div class="text-weight-bold">bidwi_widbi</div>
            <div class="text-grey">Research Intern</div>
            <q-linear-progress size="5px" :value=".1" color="purple">
            </q-linear-progress>

            <div class="text-grey-7 text-caption q-mt-sm">

              <div>Current Status: <span class="text-orange">Idle</span></div>

              <div>Clearance Level: <span class="text-white">WHITE</span></div>

              <div>
                Authorisation Token: <span class="text-grey-1">227FF-1127S-SDG12-VCVJS</span>
                <q-btn class="q-mx-sm q-px-sm" size="xs" flat icon="content_copy" />
              </div>

            </div>
          </div>

        </q-card-section>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const dialog = ref(false)
const linksList: EssentialLinkProps[] = [
  {
    title: 'Employee Details',
    icon: 'account_circle',
    link: 'profile'
  },
  {
    title: 'Facility',
    icon: 'rounded_corner',
    link: 'facility'
  },
  {
    title: 'Active Tasks',
    icon: 'attribution',
    link: 'tasks'
  },
  {
    title: 'Research',
    icon: 'science',
    link: 'research'
  },
  {
    title: 'Infirmary',
    icon: 'local_hotel',
    link: 'infirmary'
  },
  {
    title: 'Anomaly Codex',
    icon: 'psychology_alt',
    link: 'anomalies'
  }
]

function openEmployeeBadge () {
  dialog.value = true
}

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
