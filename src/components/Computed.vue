<template lang="html">
  <div class="container">
    <button @click="counter++" class="btn btn-success">Increment</button>
    <button @click="counter--" class="btn btn-success">Decrement</button>
    <p>{{ view }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { counter: 0 };
  },
  computed: {
    view() {
      return this.counter < 0 ? 0 : this.counter;
    },
  },
};
</script>
