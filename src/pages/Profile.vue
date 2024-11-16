<template>
    <q-page>
        <div class="q-pa-md">
            <div class="row items-start">

                <!-- PROFILE SECTION -->
                <div class="col-12 col-md-5 full-height">

                    <!-- EMPLOYEE OVERVIEW CARD -->
                    <q-card flat class="j-card">

                        <q-item>
                            <q-item-section avatar>
                                <q-avatar size="80px">
                                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>
                            </q-item-section>

                            <q-item-section>
                                <q-item-label class="text-h5">

                                    bidwi_widbi

                                    <q-badge title="current status" class="bg-orange-7"  label="Sleeping" />

                                </q-item-label>

                                <q-linear-progress stripe class="q-my-xs" :value=".5" color="orange" />

                                <q-item-label class="text-subtitle" caption>
                                    Research - Research Intern
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                    </q-card>

                    <q-card flat class="j-card">
                        <q-card-section>
                            <div class="row items-center justify-center">
                                <q-btn class="q-mx-sm" color="primary">Pinpoint</q-btn>
                                <q-btn class="q-ma-sm">Research</q-btn>
                                <q-btn class="q-ma-sm">Use item</q-btn>
                                <q-btn class="q-ma-sm">Call colleague</q-btn>
                            </div>

                        </q-card-section>
                    </q-card>

                    <!-- EMPLOYEE NEEDS CARD -->
                    <q-card flat class="j-card">

                        <q-card-section>

                            <q-list>
                                <q-item>
                                    <q-item-section>
                                        <q-item-label>
                                            <q-icon size="xs" name="favorite" /> Health
                                        </q-item-label>
                                        <q-linear-progress class="q-my-xs" :value=".90" />
                                    </q-item-section>
                                </q-item>

                                <q-item>
                                    <q-item-section>
                                        <q-item-label>
                                            <q-icon size="xs" name="spa" /> Sanity
                                        </q-item-label>
                                        <q-linear-progress class="q-my-xs" :value=".6" />
                                    </q-item-section>
                                </q-item>

                                <q-item>
                                    <q-item-section>
                                        <q-item-label>
                                            <q-icon size="xs" name="people" /> Social
                                        </q-item-label>
                                        <q-linear-progress class="q-my-xs" :value=".8" />
                                    </q-item-section>
                                </q-item>

                                <q-item>
                                    <q-item-section>
                                        <q-item-label>
                                            <q-icon size="xs" name="bed" /> Rest
                                        </q-item-label>
                                        <q-linear-progress class="q-my-xs" :value="1" />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>

                    </q-card>

                    <q-card flat class="items-center j-card">
                        <q-card-section>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Character Statuses</q-item-label>
                                </q-item-section>

                            </q-item>

                            <div class="row items-center justify-center">

                                <q-btn color="grey" title="Caffein Rush"
                                    unelevated round disabled outline icon="coffee" size="md" class="q-ma-sm" />
                                <q-btn color="grey" title="Eureka!"
                                    unelevated round disabled outline icon="biotech" size="md" class="q-ma-sm" />
                                <q-btn color="blue" title="Exposure"
                                    unelevated round disabled outline icon="coronavirus" size="md" class="q-ma-sm" />
                                <q-btn color="grey" title="On Alert"
                                    unelevated round disabled outline icon="crisis_alert" size="md" class="q-ma-sm" />
                                <q-btn color="blue" title="On Alert"
                                    unelevated round disabled outline icon="thumb_up_alt" size="md" class="q-ma-sm" />

                            </div>

                        </q-card-section>
                    </q-card>

                </div>

                <div class="col-12 col-md-7">
                    <q-card flat class="j-card">
                        <q-item>
                            <q-item-section>
                                <q-item-label>Career Statistics</q-item-label>
                                <q-item-label caption>
                                Janus tracks employees statistics for accountability and motivation.
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>

                    <q-card flat class="j-card">
                        <q-item>
                            <q-item-section>
                                <q-item-label>Colleagues</q-item-label>
                                <q-item-label caption>
                                Colleagues allowed to communicate with bidwi_widbi
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <div class="q-pa-md" style="height: 80px">
                            <q-avatar
                                v-for="n in 5"
                                :key="n"
                                size="40px"
                                class="overlapping"
                                :style="`left: ${n * 25}px`">

                            <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
                            </q-avatar>
                        </div>

                    </q-card>

                    <q-card flat class="j-card">
                        <q-item>
                            <q-item-section>
                                <q-item-label>Documents</q-item-label>
                                <q-item-label caption>
                                No Documents found
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>

            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'My-Profile'
})
</script>

<style lang="scss">

.overlapping
{
    border: 2px solid white;
    position: absolute;
}

</style>
