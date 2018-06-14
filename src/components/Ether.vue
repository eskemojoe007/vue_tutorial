<template lang="html">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 id='price'>{{ truncated_price }}</h1>
    <button @click="increasePrice(100)">Add 100</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: 'default ether',
      type: String,
    },
  },

  data() {
    return { price: 200 };
  },

  computed: {
    truncated_price() {
      return this.price > 1000 ? 1000 : this.price;
    },
  },

  methods: {
    increasePrice(amount) {
      this.price += amount;
    },
  },
};
</script>
