<script setup lang="ts">
import { CompanyInfo, useSearchStore } from "@/renderer/stores/search";
import { computed, onMounted } from "vue";

const store = useSearchStore();
const status = computed(() => store.getStatus);
const searchResults = computed(() => store.getResults);

onMounted(() => {
  window.electronAPI.sendResult((companyInfo: CompanyInfo) => {
    store.appendResults(companyInfo);
  });
});
</script>

<template>
  <section class="w-full h-56 mt-2 relative">
    <div v-if="status === 'searching'" class="loader-wrapper">
      <span class="loader"></span>
    </div>

    <ul class="flex flex-col h-80 overflow-hidden overflow-y-scroll gap-4 mt-2">
      <li v-for="(result, index) in searchResults" class="flex">
        <p class="w-8">{{ index + 1 }}.</p>
        <div>
          <p class="font-bold">
            {{ result.name }}
          </p>
          <p class="text-gray-400 text-sm">
            {{ result.address }}
          </p>
          <p class="text-gray-400 text-sm">
            {{ result.phoneNumber }}
          </p>
          <p class="text-gray-400 text-sm">
            {{ result.webSite }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.loader-wrapper {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.loader {
  font-size: 30px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation:
    load6 1.7s infinite ease,
    round 1.7s infinite ease;
  animation:
    load6 1.7s infinite ease,
    round 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em,
      -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em,
      -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em,
      -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em,
      -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em,
      -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em,
      -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow:
      0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em,
      0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em,
      0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
