<template>
  <transition name="fade">
    <div class="SetTime" v-if="show">
      <div class="content">
        <div class="inputs">
          <Input
            v-for="el in inputs"
            :key="el.key"
            :id="el.id"
            :max="el.max"
            :text="el.text"
            :ref="el.id"
          />
        </div>
        <Button
          name="Add Time"
          modifier="start"
          @click="saveTime"
         />
        <a class="close-btn" href="#" @click="show = false">&#10799;</a>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue';
import Button from '@/components/Button';
import Input from '@/components/Input';
import inputsJson from '@/json/inputs.json';

export default {
  name: 'SetTime',
  components: { Button, Input },
  props: ['value123'],
  methods: {
    saveTime() {
      this.time = [];
      this.time.push(this.$refs.set_time_hours.modeltest);
      this.time.push(this.$refs.set_time_minutes.modeltest);
      this.time.push(this.$refs.set_time_seconds.modeltest);
      this.emitter.emit('countdown', (this.time));
      this.show = false;
    },
  },
  setup() {
    const inputs = inputsJson;
    const show = ref(false);
    const time = [0, 0, 0];
    return { inputs, show, time };
  },
};
</script>

<style lang="scss" scoped>
.SetTime {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: background-color .5s ease;
  background: rgba($cl-black, .7);
}
.content {
  position: relative;
  display: grid;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 40px;
  background: $cl-light-blue;
}
.inputs {
  display: grid;
  flex-basis: 100%;
  justify-content: center;
  column-gap: 15px;
  grid-template-columns: repeat(3, auto);
  margin: 0 0 20px;
}
.close-btn {
  position: absolute;
  color: $cl-white;
  cursor: pointer;
  transition: color .5s ease;
  font-size: 25px;
  @include below(big) {
    top: -150px;
    right: 35px;
  }
  @include above(big) {
    top: -50px;
    right: -20px;
  }
  &:hover {
    @include hover(hover) {
      color: $cl-green;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
