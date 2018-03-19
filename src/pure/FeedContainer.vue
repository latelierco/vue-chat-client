<template>
  <div class="feed-container">
    <transition-group
      v-bind:css="false"
      v-on:enter="enter"
    >
      <div :class="['feed-box', feed.owned ? 'owned' : 'not-owned']" v-for="(feed, i) in feeds" :key="i" >
        <transition
          v-bind:css="false"
          v-on:enter="subEnter"
          v-on:leave="subLeave"
          mode="out-in"
        >
          <component :is="feed.type" :feed="feed"/>
        </transition>
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'

import Message from './Text'
import Card from './Card'
import Quote from './Quote'
import Waiting from './Waiting'
import List from './VentureProposition'
import Empty from './Empty'

export default {
  props: ['feeds'],
  components: {
    Message,
    Card,
    Quote,
    Waiting,
    List,
    Empty
  },
  methods: {
    enter(el, done) {
      var tl = new TimelineMax({ onComplete: done })
      tl
        .set(el, { alpha: 0, y: 30 })
        .to('.feed-container', 0.3, { scrollTo: { y: 'max' } }, 'a')
        .to(el, 0.3, { alpha: 1, y: 0 }, 'a')
    },
    subEnter(el, done) {
      var tl = new TimelineMax({ onComplete: done })
      tl
        .set(el, { alpha: 0, y: 20 })
        .to('.feed-container', 0.3, { scrollTo: { y: 'max' } }, 'a')
        .to(el, 0.3, { alpha: 1, y: 0 }, 'a')
    },
    subLeave(el, done) {
      var tl = new TimelineMax({ onComplete: done })
      tl.to(el, 0.3, { y: -20, alpha: 0 }, 'a')
    }
  }
}
</script>

<style lang="scss">
.feed-container {
  overflow: auto;
  position: absolute;
  top: 34px;
  left: 0;
  right: 0;
  bottom: 50px;
  q &:after {
    content: ' ';
    display: table;
  }
}

.feed-box {
  text-align: left;
  padding: 1.3em 0px 0 1.3em;
  box-sizing: border-box;
  font-size: 14px;
  .sizing-feed {
    max-width: 60%;
    margin: 0;
    padding: 6px 12px;
    display: inline-block;
    border-radius: 4px;
    border-bottom-left-radius: 1.3em;
    border-bottom-right-radius: 1.3em;
    border-top-right-radius: 1.3em;
    box-shadow: 0px 5px 1.3em rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  &.owned {
    text-align: right;
    padding-right: 20px;
    .sizing-feed {
      background-color: rgb(32, 206, 245);
      border-top-right-radius: 4px;
      border-top-left-radius: 1.3em;
      color: white;
    }
  }

  &.not-owned {
    & + .not-owned {
      padding-top: 4px;
    }
    & + .owned {
      padding-top: 1.3em;
    }
  }
  &.owned {
    & + .owned {
      padding-top: 4px;
    }
    & + .not-owned {
      padding-top: 1.3em;
    }
  }
  &:last-child {
    padding-bottom: 1.3em;
  }
}
</style>
