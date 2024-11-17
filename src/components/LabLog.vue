<template>
    <div class="column col">
        <q-separator  class="q-mb-md"/>

        <div class="row justify-center items-center text-center">
            <img style="height:25px" class="q-pr-sm" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            <div class="text-h6">Athena : Lab Log</div>
        </div>

        <q-separator  class="q-my-md"/>

        <div class="q-pr-md" style="max-height:500px;overflow: auto;">

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

            <div class="q-mb-md">
                <div class="text-body2">
                    <span class="text-grey-6">
                        <span class="text-yellow-6">SpongeBobSquareP4nTs</span>
                        :
                    </span>

                    <span>
                        ath status check
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
                        Status Check Requested by SpongeBobSquareP4nTs on LAB-003.
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
                        LAB-003 status check completed : All operations functional.
                    </span>
                </div>
                <div class="text-grey-6 text-caption">13/11/2024 - 09:33</div>
            </div>

        </div>

        <div class="row q-pt-lg">
            <q-input class="column col"  outlined v-model="message" label="Type Message Here..." />
            <q-btn outline class="q-ml-md" color="alternate" label="Send Message" />
        </div>

    </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const message = ref('')

</script>
