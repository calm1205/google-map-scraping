<script setup lang="ts">
import { CompanyInfo, useSearchStore } from "@/renderer/stores/search";
import { computed, onMounted } from "vue";

const store = useSearchStore();
const status = computed(() => store.getStatus);
const searchResults = computed(() => store.getResults);

onMounted(() => {
  (window as any).electronAPI.sendResult((companyInfo: CompanyInfo) => {
    store.appendResults(companyInfo);
  });
});
</script>

<template>
  <section class="w-full h-56 mt-2 relative">
    <div v-if="status === 'searching'" class="loader-wrapper">
      <span class="loader"></span>
    </div>

    <ul class="flex flex-col h-56 overflow-hidden overflow-y-scroll gap-4 mt-2">
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
