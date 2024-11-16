<template>
    <q-page padding class="row">
        <div class="col-12 col-md-8 offset-md-2">
            <q-card flat class="q-mb-lg">

                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <q-item-label class="text-h6">Daily Tasks</q-item-label>

                            <q-item-label caption>
                                Tasks Janus expects you to perform by E.O.D
                            </q-item-label>

                        </q-item-section>
                    </q-item>

                    <q-separator class="q-mb-md" />

                    <q-list>

                        <q-item class="q-my-sm" clickable v-ripple>
                <q-item-section avatar>
                <q-icon color="primary"  name="cleaning_services" />
                </q-item-section>

                <q-item-section>
                    Research : Clean LAB-33
                </q-item-section>
                <q-badge outline color="primary" label="In Progress" />

                        </q-item>

                        <q-item class="q-my-sm" clickable v-ripple>
                            <q-item-section avatar>
                            <q-icon  name="cleaning_services" />
                            </q-item-section>

                            <q-item-section>
                                Research : Clean LAB-54
                            </q-item-section>
                            <q-badge outline label="Pending" />
                        </q-item>

                        <q-item class="q-my-sm" clickable v-ripple>
                            <q-item-section avatar>
                            <q-icon  name="biotech" />
                            </q-item-section>

                            <q-item-section>
                                Research : Observe Anomaly #4
                            </q-item-section>
                            <q-badge outline label="Pending" />
                        </q-item>

                    </q-list>

                </q-card-section>

                <q-card-actions class="q-py-md" align="right">
                    <q-btn flat>view more</q-btn>
                    <q-btn outline color="primary">Go to Bullitin Board</q-btn>
                </q-card-actions>

            </q-card>

            <q-card flat class="q-mb-lg">

                <q-card-section>

                    <q-item>
                        <q-item-section>
                            <q-item-label class="text-h6">Weekly Tasks</q-item-label>

                            <q-item-label caption>
                                Tasks Janus expects you to perform by the end of the week
                            </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-mb-md" />

                    <q-list>

                        <q-item class="q-my-sm" clickable>
                            <q-item-section avatar>
                                <q-icon  name="medical_services" />
                            </q-item-section>

                            <q-item-section>
                                Medical : Carry out weekly physical
                            </q-item-section>

                            <q-badge outline color="green" label="Done" />
                        </q-item>

                        <q-item class="q-my-sm" clickable>
                            <q-item-section avatar>
                                <q-icon  name="school" />
                            </q-item-section>

                            <q-item-section>
                                Career Growth : Attend lecture on Anomaly #12
                            </q-item-section>

                            <q-badge outline color="alternate" label="Pending" />
                        </q-item>

                        <q-item class="q-my-sm" clickable>
                            <q-item-section avatar>
                                <q-icon  name="psychology" />
                            </q-item-section>

                            <q-item-section>
                                Medical : Carry out weekly psychiatric evaluation
                            </q-item-section>

                            <q-badge outline color="green" label="Done" />
                        </q-item>

                    </q-list>

                </q-card-section>

                <q-card-actions class="q-py-md" align="right">
                    <q-btn flat>view more</q-btn>
                    <q-btn outline color="primary">Go to Bullitin Board</q-btn>
                </q-card-actions>
            </q-card>

        </div>
    </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'All-Tasks'
})
</script>
