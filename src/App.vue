<template>
  <div id="bot-app" style="opacity: 0;">
    <div class="sizing-gabarit">
      <Heading :closeUi="()=>closeUI()" :header-caption="headerCaption"/>
      <feed-container :feeds="feeds" :uid="uid"/>
      <UserInput :on-submit="()=>onSubmit()" :message="message" :update-message="(event)=>updateMessage(event)" :placeholder="userInputPlaceholder"/>
      <div :class="['cta-activate', !open ? 'active': false]">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 363 363" style="enable-background:new 0 0 363 363;" xml:space="preserve" width="100%" height="100%">
        <path d="M277.73,94.123c0,10.997-8.006,17.685-13.852,22.593c-2.214,1.859-6.335,5.251-6.324,6.518  c0.04,4.97-3.956,8.939-8.927,8.939c-0.025,0-0.05,0-0.075,0c-4.936,0-8.958-3.847-8.998-8.792  c-0.079-9.747,7.034-15.584,12.75-20.383c4.485-3.766,7.426-6.416,7.426-8.841c0-4.909-3.994-8.903-8.903-8.903  c-4.911,0-8.906,3.994-8.906,8.903c0,4.971-4.029,9-9,9s-9-4.029-9-9c0-14.834,12.069-26.903,26.904-26.903  C265.661,67.253,277.73,79.288,277.73,94.123z M248.801,140.481c-4.971,0-8.801,4.029-8.801,9v0.069  c0,4.971,3.831,8.966,8.801,8.966s9-4.064,9-9.035S253.772,140.481,248.801,140.481z M67.392,203.174c-4.971,0-9,4.029-9,9  s4.029,9,9,9h0.75c4.971,0,9-4.029,9-9s-4.029-9-9-9H67.392z M98.671,203.174c-4.971,0-9,4.029-9,9s4.029,9,9,9h0.749  c4.971,0,9-4.029,9-9s-4.029-9-9-9H98.671z M363,59.425v101.301c0,23.985-19.232,43.448-43.217,43.448H203.066  c-2.282,0-4.161-0.013-5.733-0.046c-1.647-0.034-3.501-0.047-4.224,0.033c-0.753,0.5-2.599,2.191-4.378,3.83  c-0.705,0.649-1.503,1.363-2.364,2.149l-33.022,30.098c-2.634,2.403-6.531,3.025-9.793,1.587c-3.262-1.439-5.552-4.669-5.552-8.234  v-95.417H43.72c-14.062,0-25.72,11.523-25.72,25.583v101.301c0,14.061,11.659,25.116,25.72,25.116h130.374  c2.245,0,4.345,1.031,6.003,2.545L207,317.523v-85.539c0-4.971,4.029-9,9-9s9,4.029,9,9v105.938c0,3.565-2.04,6.747-5.303,8.186  c-1.167,0.515-2.339,0.718-3.566,0.718c-2.204,0-4.378-0.905-6.069-2.449l-39.457-36.204H43.72c-23.986,0-43.72-19.13-43.72-43.116  V163.757c0-23.985,19.734-43.583,43.72-43.583H138V59.425c0-23.986,19.885-43.251,43.871-43.251h137.913  C343.768,16.174,363,35.439,363,59.425z M345,59.425c0-14.061-11.157-25.251-25.217-25.251H181.871  C167.81,34.174,156,45.364,156,59.425v69.833v83.934l18.095-16.353c0.838-0.765,1.777-1.465,2.462-2.097  c8.263-7.614,10.377-8.831,21.155-8.609c1.47,0.031,3.221,0.042,5.354,0.042h116.717c14.06,0,25.217-11.388,25.217-25.448V59.425z" fill="#FFFFFF"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import TweenMax from 'gsap'
import ScrollToPlugin from './../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'

import axios from 'axios'

import FeedContainer from './pure/FeedContainer'
import Heading from './pure/Heading'
import UserInput from './pure/UserInput'

export default {
  name: 'App',
  props: {
    headerCaption: {
      type: String,
      default: () => 'Vue Chat Client'
    },
    userInputPlaceholder: {
      type: String,
      default: () => 'your question'
    },
    uid: {
      type: String,
      default: () => 'uid'
    },
    feeds: {
      type: Array,
      default: () => [
        {
          type: 'message',
          text: 'Hi, how can i help you ?'
        }
      ]
    },
    margin: {
      type: Number,
      default: () => 28
    },
    draggable: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      open: true,
      lockedUI: false,
      message: '',
      mousePosition: {
        x: 0,
        y: 0
      },
      mouse: {
        x: 0,
        y: 0
      },
      lastPosition: {
        x: 0,
        y: 0
      },
      side: {
        x: 1,
        y: 1
      }
    }
  },
  components: {
    UserInput,
    Heading,
    FeedContainer
  },
  mounted() {
    this.tl = new TimelineMax()
    var Faders = this.$el.querySelectorAll(
      '.feed-container, .user-input, .heading-content'
    )
    this.open = false
    this.lockedUI = true
    var tl = new TimelineMax({
      onComplete: () => {
        this.open = false
        this.lockedUI = false
      }
    })
    tl
      .set(Faders, { opacity: 0 }, 0.15)
      .set(this.$el.querySelector('.heading-decoration'), {
        y: '100%',
        marginBottom: 0
      })
      .set(this.$el, {
        width: 60,
        height: 60,
        borderRadius: 30,
        opacity: 1
      })
      .set(this.$el.querySelector('.cta-activate'), { alpha: 1 })

    if (this.draggable) {
      this.$el.addEventListener('mousedown', this.startInteraction, false)
    }
  },
  methods: {
    startInteraction(event) {
      if (!this.open) {
        TweenMax.killTweensOf(this.$el)
        event.preventDefault()
        window.addEventListener('mousemove', this.onMouseMove, false)
        window.addEventListener('mouseup', this.onMouseUp, false)

        this.mousePosition.x = event.clientX - this.lastPosition.x
        this.mousePosition.y = event.clientY - this.lastPosition.y
      }
    },
    onMouseMove(event) {
      this.lockedUI = true
      if (
        event.clientX - this.mousePosition.x <= 0 &&
        event.clientX - this.mousePosition.x >=
          -(window.innerWidth - this.margin * 2 - 60)
      ) {
        this.mouse.x = event.clientX - this.mousePosition.x
      }
      if (
        event.clientY - this.mousePosition.y <= 0 &&
        event.clientY - this.mousePosition.y >=
          -(window.innerHeight - this.margin * 2 - 60)
      ) {
        this.mouse.y = event.clientY - this.mousePosition.y
      }
      TweenMax.set(this.$el, { x: this.mouse.x, y: this.mouse.y })
      this.checkClosestWall()
    },
    onMouseUp() {
      window.removeEventListener('mousemove', this.onMouseMove, false)
      window.removeEventListener('mouseup', this.onMouseUp, false)

      this.endInteraction()
    },
    checkClosestWall() {
      let x = (window.innerWidth - 60 - this.margin * 2) / 2 + this.mouse.x
      let y = (window.innerHeight - 60 - this.margin * 2) / 2 + this.mouse.y
      this.side.x = Math.sign(x)
      this.side.y = Math.sign(y)
    },
    endInteraction() {
      let newX =
        this.side.x > 0 ? 0 : -(window.innerWidth - 60 - this.margin * 2)
      TweenMax.to(this.$el, 0.5, {
        x: newX,
        y: this.mouse.y,
        ease: Elastic.easeOut
      })
      this.lastPosition.x = newX
      this.lastPosition.y = this.mouse.y
      if (!this.lockedUI) {
        this.openUI()
      } else {
        this.lockedUI = false
      }
    },
    closeUI() {
      if (!this.lockedUI) {
        var Faders = this.$el.querySelectorAll(
          '.feed-container, .user-input, .heading-content'
        )
        this.open = false
        this.lockedUI = true
        this.tl.kill()
        this.tl = new TimelineMax({
          onComplete: () => {
            this.open = false
            this.lockedUI = false

            if (window.getSelection) {
              window.getSelection().removeAllRanges()
            } else if (document.selection) {
              document.selection.empty()
            }
          }
        })
        this.tl
          .staggerTo(Faders, 0.3, { opacity: 0 }, 0.15)
          .to(this.$el.querySelector('.heading-decoration'), 0.3, {
            y: '100%',
            marginBottom: 0
          })
          .to(this.$el, 0.3, {
            x: this.lastPosition.x,
            y: this.lastPosition.y,
            width: 60,
            height: 60,
            borderRadius: 30
          })
          .to(this.$el.querySelector('.cta-activate'), 0.3, { alpha: 1 })
      }
    },
    openUI() {
      if (!this.lockedUI) {
        var Faders = this.$el.querySelectorAll(
          '.feed-container, .user-input, .heading-content'
        )
        this.open = true
        this.lockedUI = true
        this.tl.kill()
        this.tl = new TimelineMax({
          onComplete: () => {
            this.open = true
            this.lockedUI = false
          }
        })
        this.tl
          .to(this.$el.querySelector('.cta-activate'), 0.3, {
            alpha: 0,
            clearProps: 'all'
          })
          .to(this.$el, 0.3, {
            x: 0,
            y: this.margin,
            width: 420,
            height: 500,
            borderRadius: 8,
            clearProps: 'width, height, borderRadius'
          })
          .to(this.$el.querySelector('.heading-decoration'), 0.3, {
            y: '0%',
            marginBottom: -34,
            clearProps: 'all'
          })
          .staggerTo(
            Faders,
            0.3,
            {
              opacity: 1,
              clearProps: 'all'
            },
            0.15
          )
      }
    },
    updateMessage($event) {
      this.message = $event.target.value
    },
    onSubmit() {
      if (this.message) {
        this.feedMe()
        this.message = ''
      }
    },
    tryFetch(message) {
      let data = {
        text: message
      }
      return axios.post(this.feederUrl, data).catch(error => console.log(error))
    },
    mapper(data) {
      return data
    },
    feedMe() {
      this.feeds.push({
        text: this.message,
        type: 'message',
        uid: this.uid
      })
      if (this.feederUrl) {
        var feed = {
          type: 'waiting'
        }
        this.feeds.push(feed)
        this.tryFetch(this.message).then(response => {
          if (typeof response.data == 'string') {
            feed.waiting = false
            feed.text = response.data
          } else {
            var data = this.mapper(response.data)
            feed = Object.assign(feed, data)
          }
        })
      } else {
        this.feeds.push({
          text: "I don't have any feeder set yet",
          type: 'message'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,500|Oswald:400,700');

::-webkit-scrollbar {
  display: none;
}
#bot-app {
  height: 100%;
  position: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lato', sans-serif;
  background-color: white;
  color: #6b7380;
  max-height: 500px;
  width: 420px;
  right: 20px;
  bottom: 28px;
  right: 28px;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  overflow: hidden;
  z-index: 999;
}

.gabarit {
  position: relative;
}
.sizing-gabarit {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.cta-activate {
  position: absolute;
  top: 0%;
  left: 0%;
  padding-left: 15%;
  padding-top: 15%;
  width: 70%;
  height: 70%;
  cursor: pointer;
  opacity: 0;
  z-index: 5;
  pointer-events: none;
  &.active {
    pointer-events: auto;
  }
}
</style>
