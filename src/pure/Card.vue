<template>
  <div class="sizing-feed">
    <div class="overlaying" :style="{backgroundImage: 'url(' + feed.url + ')'}"></div>
    <p class="title">{{feed.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['feed']
}
</script>

<style scoped>
.sizing-feed {
  max-width: 60%;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
}
.overlaying {
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  padding-bottom: 52%;
}
p {
  padding: 6px 12px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 0em;
}
</style>
