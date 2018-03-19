<template>
  <div class="sizing-feed" :style="{backgroundImage: 'url(' + feed.url + ')'}">
    <div class="overlaying">
      <p class="title">{{feed.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feed']
}
</script>

<style scoped>
.sizing-feed {
  max-width: 55%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  overflow: hidden;
  width: 200px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: white;
  font-size: 60px;
  font-family: 'Oswald', sans-serif;
}
</style>
