<script setup lang="ts">
import { useSearchStore } from "@/renderer/stores/search";
import { computed, ref } from "vue";

const store = useSearchStore();
const status = computed(() => store.getStatus);

const inputValue = ref("");
const handleOnSearch = () => {
  store.search(inputValue.value);
};
</script>

<template>
  <div class="flex items-center gap-4">
    <input
      type="text"
      v-model="inputValue"
      placeholder="検索したいキーワードを入力..."
      class="text-gray-600 w-full text-sm border-0 border-b border-gray-200 px-2 py-1 outline-0 focus:border-sky-400 hover:border-sky-400"
    />

    <button
      class="flex items-center gap-1 bg-slate-800 text-white px-4 py-2 rounded-full"
      :disabled="status === 'searching'"
      @click="handleOnSearch"
    >
      <span class="material-symbols-outlined text-lg leading-none">
        search
      </span>
      <span class="text-sm"> Search </span>
    </button>
  </div>
</template>
