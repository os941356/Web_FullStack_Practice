<template>
  <div
    :class="[
      checked ? 'max-h-[300px]' : 'max-h-0',
      'border border-t-0 border-gray-300',
      'overflow-hidden transition-all',
    ]"
  >
    <div class="p-4 text-gray-600">內容</div>
  </div>
</template>
<script>
export default {};
</script>
