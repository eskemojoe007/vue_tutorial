<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Ether msg="What up Player?"/>
    <Form/>
    <Computed/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Ether from './components/Ether.vue';
import Form from './components/Form.vue';
import Computed from './components/Computed.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Ether,
    Form,
    Computed,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
