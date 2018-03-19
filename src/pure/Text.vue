<template>
  <div class="sizing-feed">
    <p class="hello">
      {{feed.text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['feed']
}
</script>

<style lang="scss" scoped>
p {
  letter-spacing: 0.03em;
  display: inline-block;
  font-weight: 500;
  margin: 0;
  line-height: 1.2857142857em;
  word-break: break-word;
}
</style>
