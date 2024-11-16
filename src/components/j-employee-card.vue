<template>

<q-dialog position="bottom">
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

                    <div>Current Status: <span>Idle</span></div>

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

</template>
