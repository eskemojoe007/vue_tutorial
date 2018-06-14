<template lang="html">
  <div class="container">
    <div class="panel panel-primary">
      <h3 class="panel-title">Add User</h3>
    </div>
    <div class="panel-body">
      <form action="">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="Text" class="form-control" placeholder="Name" v-model="name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="Text" class="form-control" placeholder="Email" v-model="email">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="panel panel-success">
      <div id="output" class="panel-body">
        My Name is: {{ name }}
        My Email is: {{ email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
};
</script>
