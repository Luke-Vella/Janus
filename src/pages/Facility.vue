<template>
    <q-page class="flex bg-black  items-center full-height full-width">

    <!-- Research Lab Floor Plan -->
    <svg
      class="floor-plan"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <!-- Row 1: Labs -->
      <rect id="lab1" class="interactive" x="50" y="50" width="150" height="100" />
      <text fill="white" x="80" y="110" font-size="12">Lab 1</text>

      <rect id="lab2" class="interactive" x="220" y="50" width="150" height="100" />
      <text fill="white" x="250" y="110" font-size="12">Lab 2</text>

      <rect id="lab3" class="interactive" x="390" y="50" width="150" height="100" />
      <text fill="white" x="420" y="110" font-size="12">Lab 3</text>

      <rect id="lab4" class="interactive" x="560" y="50" width="150" height="100" />
      <text fill="white" x="590" y="110" font-size="12">Lab 4</text>

      <rect id="lab5" class="interactive" x="730" y="50" width="150" height="100" />
      <text fill="white" x="760" y="110" font-size="12">Lab 5</text>

      <!-- Row 2: Offices -->
      <rect id="office1" class="interactive" x="50" y="200" width="150" height="100" />
      <text fill="white" x="80" y="260" font-size="12">Office 1</text>

      <rect id="office2" class="interactive" x="220" y="200" width="150" height="100" />
      <text fill="white" x="250" y="260" font-size="12">Office 2</text>

      <rect id="office3" class="interactive" x="390" y="200" width="150" height="100" />
      <text fill="white" x="420" y="260" font-size="12">Office 3</text>

      <rect id="office4" class="interactive" x="560" y="200" width="150" height="100" />
      <text fill="white" x="590" y="260" font-size="12">Office 4</text>

      <rect id="office5" class="interactive" x="730" y="200" width="150" height="100" />
      <text fill="white" x="760" y="260" font-size="12">Office 5</text>

      <!-- Row 3: Common Areas -->
      <rect id="common1" class="interactive" x="50" y="350" width="400" height="150" />
      <text fill="white" x="200" y="430" font-size="12">Break Room</text>

      <rect id="common2" class="interactive" x="500" y="350" width="400" height="150" />
      <text fill="white" x="670" y="430" font-size="12">Lounge</text>

      <!-- Row 4: Conference Rooms -->
      <rect id="conf1" class="interactive" x="50" y="550" width="300" height="100" />
      <text fill="white" x="140" y="610" font-size="12">Conference Room 1</text>

      <rect id="conf2" class="interactive" x="370" y="550" width="300" height="100" />
      <text fill="white" x="460" y="610" font-size="12">Conference Room 2</text>

      <rect id="conf3" class="interactive" x="690" y="550" width="300" height="100" />
      <text fill="white" x="780" y="610" font-size="12">Conference Room 3</text>

      <!-- Row 5: Storage and Reception -->
      <rect id="storage1" class="interactive" x="50" y="700" width="200" height="150" />
      <text fill="white" x="100" y="780" font-size="12">Storage 1</text>

      <rect id="storage2" class="interactive" x="270" y="700" width="200" height="150" />
      <text fill="white" x="320" y="780" font-size="12">Storage 2</text>

      <polygon
        id="reception"
        class="interactive"
        points="500,700 800,700 750,850 550,850"
      />
      <text fill="white" x="620" y="780" font-size="12">Reception</text>

      <!-- Connecting Lines -->
      <line x1="125" y1="150" x2="125" y2="200" stroke="white" stroke-width="2" />
      <line x1="295" y1="150" x2="295" y2="200" stroke="white" stroke-width="2" />
      <line x1="465" y1="150" x2="465" y2="200" stroke="white" stroke-width="2" />
      <line x1="635" y1="150" x2="635" y2="200" stroke="white" stroke-width="2" />
      <line x1="805" y1="150" x2="805" y2="200" stroke="white" stroke-width="2" />
    </svg>
    </q-page>
  </template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ComplexResearchLabFloorPlan',
  setup () {
    const tooltip = ref<HTMLElement | null>(null)
    const router = useRouter()

    onMounted(() => {
      const rooms = document.querySelectorAll<SVGElement>('.interactive')

      rooms.forEach((room) => {
        room.addEventListener('click', () => {
          router.push('/facility/room')
        })
      })
    })

    return {
      tooltip
    }
  }
})
</script>

<style scoped>
.floor-plan {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  background: #060606; /* Dark background for visibility */
}

.interactive {
  fill: #1d1d1d; /* Dark gray for room shapes */
  cursor: pointer;
  transition: fill 0.3s ease;
  color:white;
}

.interactive:hover {
  fill: orange;
}

.tooltip {
  position: absolute;
  background: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: none;
  font-size: 12px;
  pointer-events: none;
}

line {
  stroke: white;
  transition: stroke 0.3s ease;
}

line:hover {
  stroke: orange;
}
</style>
