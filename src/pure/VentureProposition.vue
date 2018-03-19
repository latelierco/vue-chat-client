<template>
  <div class="sizing-feed">
    <p class="heading-proposition">Résultats de votre recherche</p>
    <div class="proposition" v-for="proposition in feed.data">
      <div class="proposition-gabarit">
        <div class="gabarit">
          <p>{{proposition.Text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feed']
}
</script>

<style scoped lang="scss">
.sizing-feed {
  border-radius: 4px;
  max-width: 60%;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  // padding: 10px;
  box-sizing: border-box;
  background-color: #f5f9fa;
  box-shadow: 0 10px 30px 10px rgba(84, 185, 229, .15);
  &:after {
    content: ' ';
    display: table;
  }
}
.proposition {
  width: 100%;
  // height: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, .14);
  background-color: #68ead0;
  user-select: none;
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    background-color: #20cef5;
    p {
      // color: rgb(107, 115, 128);
      text-shadow: 0 0 2px rgba(255,255,255,1);
    }
  }
}
p {
  padding: 6px;
  // font-family: 'Oswald', sans-serif;
  // font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0em;
  color: white;
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  text-shadow: 0 0 0px rgba(255,255,255,1);
  &.heading-proposition {
    color: rgb(107, 115, 128);
    font-weight: 700;
    font-size: .75em;
  }
}
</style>
