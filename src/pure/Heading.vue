<template>
  <div class="heading" @click="closeUi">
    <div class="heading-decoration"></div>
    <div class="heading-content">
      <h2 class="user-name">Vue Chat Client</h2>
      <div class="reduce-cta">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" height="100%">
          <path d="M37.8,68h53.3c2.3,0,4.1-1.8,4.1-4.1s-1.8-4.1-4.1-4.1H37.8c-2.3,0-4.1,1.8-4.1,4.1S35.6,68,37.8,68z" fill="#FFFFFF"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['closeUi']
}
</script>

<style lang="scss" scoped>
.heading {
  cursor: pointer;
  &:hover {
    .reduce-cta {
      opacity: 1;
    }
  }
}
.heading-decoration {
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  margin-bottom: -34px;
}
.heading-content {
  height: 34px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 4px;
  z-index: 1;
  position: relative;
}
h2 {
  padding-left: 4px;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1em;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  color: white;
}
.reduce-cta {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 5px;
  opacity: 0;
  transition: opacity .3s ease;
}
</style>
