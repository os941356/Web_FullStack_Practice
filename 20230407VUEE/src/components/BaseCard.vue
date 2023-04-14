//BaseCard.vue
<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titile"],
};
</script>
