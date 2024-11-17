<template>
    <q-page padding class="row wrap justify-center">

            <q-card flat class="col-12 col-md j-card" >
                <div class="column items-center justify-center full-height full-width">

                    <q-card-section class="full-width" style="height:600px">
                        <q-card flat class="bg-black full-height">
                        <q-img class="full-height bordered" fit="contain" src="/src/assets/img/facility/lab/lab-night-inactive-1.png" />
                    </q-card>

                    </q-card-section>

                    <q-card-actions class="col full-width">
                            <q-btn class="q-ma-sm" color="primary" label="Start Task" />
                    </q-card-actions>
                </div>

            </q-card>

      <!-- Second q-card (empty) -->

        <q-card class="col-12 col-md-5 j-card" flat>

            <q-card-section>
                <div class="text-h6">LAB 3 Daily Log</div>
            </q-card-section>

            <q-separator class="q-mx-md" />

            <q-card-section>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            <span class="text-orange-5">BeermanFive123</span> entered the room.
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            <span class="text-orange-5">BeermanFive123</span> left the room.
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            <span class="text-yellow-6">SpongeBobSquareP4nTs</span> entered the room.
                        </span>

                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            <span class="text-yellow-6">SpongeBobSquareP4nTs</span> started a task.
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            Alert - Deviation detected. Initiating corrective protocols ...
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            Bootstrapping corrective protocol ... (1 / 3)
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            Awaiting authorisation token from employee ... (2 / 3)
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>
            <!--
                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-yellow-6">SpongeBobSquareP4nTs</span>
                            :
                        </span>

                        <span>
                            uhhh... Anyone know where I can find my authorisation token ?
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div> -->

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            Applying Fix... (3 / 3)
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

                <div class="q-mb-md">
                    <div class="text-body2">
                        <span class="text-grey-6">
                            <span class="text-grey-6">Athena</span>
                            :
                        </span>

                        <span>
                            Deviation Corrected.
                        </span>
                    </div>
                    <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
                </div>

            </q-card-section>

        </q-card>

    </q-page>
  </template>

<script setup lang="ts">
defineOptions({
  name: 'Anomaly-Codex'
})
</script>
