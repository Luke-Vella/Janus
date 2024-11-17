<template>
  <q-item
    clickable
    tag="a"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :color="iconColor" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">

export interface essentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  iconColor?: string
};

withDefaults(defineProps<essentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: ''
})
</script>
