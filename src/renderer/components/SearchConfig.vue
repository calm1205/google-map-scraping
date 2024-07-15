<script setup lang="ts">
import { useSearchStore } from "@/renderer/stores/search";
import { computed } from "vue";

const store = useSearchStore();
const results = computed(() => store.getResults);
</script>

<template>
  <div class="w-full flex justify-end mt-8">
    <div class="text-sm">
      <p class="flex justify-between w-28">
        <span class="w-16 text-right"> 検索結果: </span>
        <span>
          <span class="w-12">{{ results.length }}</span
          >件
        </span>
      </p>
    </div>
  </div>
</template>
