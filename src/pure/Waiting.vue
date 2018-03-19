<template>
  <div class="sizing-feed">
    <span class="waiting-point"></span>
    <span class="waiting-point"></span>
    <span class="waiting-point"></span>
  </div>
</template>

<script>
export default {
  props: ['feed']
}
</script>

<style lang="scss" scoped>
.sizing-feed {
  width: 24px;
  height: 16px;
  background-color: rgba(225, 225, 225, 1);
}
.waiting-point {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  animation-duration: .3s;
  position: relative;
  animation-name: waiting;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  &:nth-child(2) {
    animation-delay: .15s;
  }
  &:nth-child(3) {
    animation-delay: .3s;
  }
}
@keyframes waiting {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
