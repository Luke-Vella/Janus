<template>
    <q-page>
        <div class="q-pa-md">
            <div class="row items-start q-col-gutter-md ">

                <!-- PROFILE SECTION -->
                <div class="col-12 col-md-4 full-height">
                    <q-card flat bordered class="my-card">
                        <q-item>
                            <q-item-section avatar>
                                <q-avatar size="80px">
                                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>bidwi_widbi</q-item-label>

                                <q-linear-progress :value=".1" color="purple" />

                                <q-item-label caption>
                                    Research - Research Intern
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-separator class="q-my-md" />

                        <q-item>
                            <q-item-section>
                                <q-item-label  overline>Employee Overview</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section>

                                <q-item-label>Hunger Level</q-item-label>

                                <q-linear-progress :value=".1" color="blue" />

                                <q-item-label caption>
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section>
                                <q-item-label>Sanity</q-item-label>

                                <q-linear-progress :value="1" color="blue" />

                                <q-item-label caption>
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section>
                                <q-item-label>Sleep Deprivation</q-item-label>

                                <q-linear-progress :value=".2" color="blue" />

                                <q-item-label caption>
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-separator class="q-my-md" />

                        <q-item>
                            <q-item-section>
                                <q-item-label  overline>Employee Status</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section>
                                <q-item-label>Status Effects</q-item-label>

                                <q-item-label caption>
                                    None
                                </q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section>
                                <q-item-label>Latest Psychiatric Evaluation ( 05/08/2024 ) </q-item-label>

                                <q-item-label caption>
                                    All Clear
                                </q-item-label>

                            </q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section>
                                <q-item-label>Latest Physical ( 11/10/2024 )</q-item-label>

                                <q-item-label caption>
                                    All Clear
                                </q-item-label>

                            </q-item-section>
                        </q-item>

                    </q-card>
                </div>

                <div class="col-12 col-md-8">
                    <q-card flat bordered class="col-8 my-card">
                        <q-item>
                            <q-item-section>
                                <q-item-label>Career Statistics</q-item-label>
                                <q-item-label caption>
                                Subhead
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

.my-card {
    padding: 15px;
}

</style>
