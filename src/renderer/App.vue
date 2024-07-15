<script setup lang="ts">
import SearchForm from "./components/SearchForm.vue";
import Hint from "./components/Hint.vue";
import InAvailable from "./components/InAvailable.vue";
import ResultCount from "./components/ResultCount.vue";
import SearchResult from "./components/SearchResult.vue";
import Buttons from "./components/Buttons.vue";
import { useServiceAvailableStore } from "./stores/serviceAvailable";
import { computed, onMounted } from "vue";

const store = useServiceAvailableStore();
const isAvailable = computed(() => store.getIsAvailable);

onMounted(() => {
  store.checkServiceAvailable();
});
</script>

<template>
  <main
    class="flex-col w-3/4 max-w-xl h-screen mx-auto items-center gap-4 py-[150px]"
  >
    <InAvailable v-if="!isAvailable" />
    <section v-else class="w-full flex flex-col justify-center gap-4">
      <SearchForm />
      <Hint />
      <ResultCount />
      <SearchResult />
      <Buttons />
    </section>
  </main>
</template>
