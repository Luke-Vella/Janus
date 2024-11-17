<template>
    <q-page class="flex bg-black  items-center full-height full-width">

      <!-- Ship Log Map -->
      <svg
        class="ship-log-map"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 500"
      >

        <!-- Arrows (Connections between elements) -->
        <line
          v-for="(connection, index) in connections"
          :key="index"
          :x1="connection.from.x"
          :y1="connection.from.y"
          :x2="connection.to.x"
          :y2="connection.to.y"
          stroke=""
          stroke-width="2"
        />

        <!-- Planet Elements (with labels inside circles) -->
        <g v-for="(planet, index) in planets" :key="index">
          <!-- Planet Circles -->
          <circle
            :cx="planet.x"
            :cy="planet.y"
            r="40"
            class="planet"
          />
          <!-- Planet Labels (inside the circle) -->
          <text
            :x="planet.x"
            :y="planet.y"
            text-anchor="middle"
            alignment-baseline="middle"
            font-size="14"
            fill="white"
          >
            {{ planet.name }}
          </text>
        </g>
      </svg>
    </q-page>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShipLogMap',
  setup () {
    // Example planet data (with labels inside the circles)
    const planets = [
      { name: 'CANTEEN', x: 100, y: 100 },
      { name: 'CONTAINMENT UNITS', x: 500, y: 200 },
      { name: 'INFIRMARY', x: 830, y: 70 },
      { name: 'POWER PLANT', x: 800, y: 300 },
      { name: 'LABS', x: 500, y: 440 },
      { name: 'OFFICES', x: 100, y: 350 }
    ]

    // Example connections (arrows) between planets
    const connections = [
      { from: planets[0], to: planets[1] },
      { from: planets[1], to: planets[2] },
      { from: planets[2], to: planets[3] },
      { from: planets[3], to: planets[4] },
      { from: planets[4], to: planets[5] },
      { from: planets[5], to: planets[0] },
      { from: planets[0], to: planets[2] }, // Added a new connection
      { from: planets[2], to: planets[4] }, // Added a new connection
      { from: planets[4], to: planets[1] }, // Added a new connection
      { from: planets[1], to: planets[5] }, // Added a new connection
      { from: planets[3], to: planets[5] } // Added a new connection
    ]

    return {
      planets,
      connections
    }
  }
})
</script>

<style scoped>
.ship-log-map {
  margin: auto;
  border-radius: 5px;
  background: #0c0c0c; /* Dark background for contrast */
}

.planet {
  fill: #1d1d1d; /* Dark grey for planet circles */
  cursor: pointer;
  border:yellow;
  transition: fill 0.3s ease;
}

.planet:hover {
  fill: orange; /* Hover color for interaction */
}

image {
  transition: opacity 0.3s ease;
}

image:hover {
  opacity: 0.8; /* Image hover effect */
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
  stroke: rgb(175, 175, 175);
  transition: stroke 0.3s ease;
}

line:hover {
  stroke: orange;
}
</style>
