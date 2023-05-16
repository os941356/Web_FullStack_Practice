<template>
  <div
    style="height: calc(100vh - 96px)"
    class="flex-col justify-center items-center"
  >
    <SideBar2Topic @status-changed="onStatusChanged" class="" />
    <SideBar2Card :class="status === 2 ? 'hidden' : ''" />
  </div>
</template>

<script>
import SideBar2Topic from "./SideBar2_components/SideBar2Topic.vue";
import SideBar2Card from "./SideBar2_components/SideBar2Card.vue";
export default {
  data() {
    return {
      status: null,
    };
  },
  methods: {
    onStatusChanged(status) {
      console.log(status);
      this.status = status;
    },
  },
  components: { SideBar2Topic, SideBar2Card },
};
</script>
