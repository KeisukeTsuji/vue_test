<template>
  <div>
    <div class="counter">クリックされた回数: {{ count }}</div>
    <button @click="increment">Click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const count = ref(0);
    const increment = () => {
      count.value++;
      emit("onIncrement", count);
    };
    return {
      count,
      increment,
    };
  },
});
</script>
