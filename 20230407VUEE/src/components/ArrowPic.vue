<template>
  <button @click="changeAngle">
    <svg
      class="mx-2 h-6 w-6 transition-all rotation-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      :class="rotation"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</template>
<script>
export default {
  data() {
    return {
      rotation: "180",
    };
  },
  methods: {
    changeAngle() {},
  },
};
</script>
