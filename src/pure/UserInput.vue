<template>
  <div class="user-input">
    <form class="gabarit" v-on:submit.prevent="onSubmit">
      <input type="text" :placeholder="placeholder" :value="message" @input="updateMessage"/>
      <button type="submit">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-0.0025" y1="258.0203" x2="511.9713" y2="258.0203" gradientTransform="matrix(1.0001 0 0 -1.0001 0.0025 514.0333)">
        	<stop  offset="0" style="stop-color:#00F2FE"/>
        	<stop  offset="0.021" style="stop-color:#03EFFE"/>
        	<stop  offset="0.293" style="stop-color:#24D2FE"/>
        	<stop  offset="0.554" style="stop-color:#3CBDFE"/>
        	<stop  offset="0.796" style="stop-color:#4AB0FE"/>
        	<stop  offset="1" style="stop-color:#4FACFE"/>
        </linearGradient>
        <path style="fill:url(#SVGID_1_);" d="M305.016,480.011c-5.11,0-10.222-1.946-14.126-5.84c-7.82-7.801-7.835-20.465-0.035-28.285
        	l175.293-175.725c7.815-7.815,7.815-20.504,0.018-28.302L290.855,66.114c-7.801-7.82-7.785-20.484,0.035-28.285
        	c7.821-7.8,20.484-7.786,28.286,0.035l175.293,175.725c23.377,23.377,23.377,61.444-0.018,84.839L319.176,474.135
        	C315.269,478.052,310.142,480.011,305.016,480.011z M403.02,256c0-11.047-8.954-20.001-20.001-20.001H20.001
        	C8.954,235.999,0,244.954,0,256c0,11.047,8.954,20.001,20.001,20.001h363.018C394.066,276.001,403.02,267.047,403.02,256z"/>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['onSubmit', 'message', 'updateMessage', 'placeholder']
}
</script>

<style scoped lang="scss">
.user-input {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2px rgba(0,0,0,.075);
}
.gabarit {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: white;
}
input[type='text'] {
  width: 100%;
  border: none;
  box-shadow: none;
  border-radius: 0;
  height: 50px;
  line-height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  font-family: 'Lato', sans-serif;
  color: #6b7380;
  font-size: 14px;
}
::-webkit-input-placeholder {
  color: #ccc;
}
::-moz-placeholder {
  color: #ccc;
}
:-ms-input-placeholder {
  color: #ccc;
}
:-moz-placeholder {
  color: #ccc;
}
button {
  outline: none;
  cursor: pointer;
  width: 26px;
  border: none;
  background-color: transparent;
  display: inline-block;
  float: right;
  height: 26px;
  padding: 0;
  margin: 0;
  padding: 12px;
  box-sizing: content-box;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}
</style>
