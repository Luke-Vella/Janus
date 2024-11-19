<template>
    <q-page padding class="row wrap items-center justify-center">

        <div>
            <q-card flat >

                <q-card-section class="column row-md items-center">

                        <div class="col-6 q-pa-md">

                             <div style="height:550px;">
                                <q-card flat class="bg-black full-height">
                                    <q-img  class="full-height bordered" fit="contain" src="/src/assets/img/facility/lab/lab-night-inactive-1.png" />
                                </q-card>
                            </div>

                            <div class="row justify-start q-pt-lg">

                                <q-btn class="q-ma-sm" color="primary" label="Start Task" />
                                <q-btn outline class="q-ma-sm" color="alternate" label="Action 1" />
                                <q-btn outline class="q-ma-sm" color="alternate" label="Action 2" />
                                <q-btn outline class="q-ma-sm"  color="alternate" label="Action 3" />

                            </div>

                        </div>

                        <div class="col-6 q-pa-md">
                            <LabLog />
                        </div>
                </q-card-section>

            </q-card>
        </div>

    </q-page>
  </template>

<script setup lang="ts">

import LabLog from 'components/LabLog.vue'

defineOptions({
  name: 'Anomaly-Codex'
})
</script>
