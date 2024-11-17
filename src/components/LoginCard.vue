<template>

<q-card flat style="min-width:400px" class="q-pa-md">

    <q-card-section class="column row-md">

            <div class="gt-sm flex" style="width:400px">
                <q-img
                    class="rounded-borders"
                    src="/src/assets/img/janus-protocol-logo.png"
                    spinner-color="white"/>
            </div>

            <div class="column items-center col q-px-lg q-pt-md">
                <q-form
                    class="column col text-center full-width"
                    @submit="onSubmit"
                    >

                    <div class="text-h5">Janus Login</div>
                    <div class="text-subtitle1 bg-red q-my-sm rounded-borders q-px-sm">AUTHORISED AGENTS ONLY BEYOND THIS POINT</div>

                    <div class="row column col justify-center q-my-sm">

                        <q-input
                            filled
                            v-model="email"
                            label="Email"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                            class="q-mb-sm"
                        />

                        <q-input v-model="password" label="Password" filled :type="isPwd ? 'password' : 'text'">
                            <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                            </template>
                        </q-input>

                    </div>

                    <div class="row justify-center q-mt-lg">
                        <q-btn class="q-mx-sm" label="Login" type="submit" color="primary"/>
                        <q-btn class="q-mx-sm" label="Become an Agent" type="reset" color="primary" outline />
                    </div>
                    <div class="row justify-center q-mt-sm">
                        <q-btn class="q-mx-sm text-subtitle" size="sm" label="Forgot Password" type="reset" color="primary" flat />
                    </div>
                </q-form>
            </div>
    <div>
    </div>

    </q-card-section>

</q-card>

</template>

<script setup lang="ts">

import { useQuasar } from 'quasar'
import { userStore } from 'stores/user'

import { ref } from 'vue'

const $q = useQuasar()
const email = ref(null)
const password = ref(null)
const isPwd = ref(false)
const user = userStore()

function onSubmit () {
  $q.notify({
    color: 'blue-5',
    textColor: 'white',
    icon: 'lock_open',
    message: 'Welcome, Agent bidwi_widbi'
  })

  user.assignLoggedInUser({ email: 'luke.vella.0697@gmail.com', username: 'bidwi_widbi' })
}

</script>
