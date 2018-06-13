<template lang="html">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ price }}</h1>
    <button @click="increasePrice(100)">Add 100</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: "Default Eth",
      type: String
    }
  },

  data: function() {
    return { price: 200 };
  },

  methods: {
    increasePrice: function(amount) {
      this.price += amount;
    }
  }
};
</script>
