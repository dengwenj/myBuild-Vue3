<script setup lang="ts">
import { ref } from 'vue'

const message = ref('hello vue')
</script>

<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<style scoped lang="less">
.message {
  color: red;
}
</style>
