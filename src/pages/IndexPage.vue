<template>
  <q-page class="row items-center justify-evenly">
    <q-card   flat style="width:900px">

      <q-card-section>
        <div class="row">

          <div class="col-6">
            <q-img
                class="rounded-borders"
                src="/src/assets/img/janus-protocol-logo.png"
                spinner-color="white"/>
          </div>
          <div class="col-6 q-pa-md text-center">
            <div class="text-h5">Janus Containment</div>
                  </div>

        </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>
