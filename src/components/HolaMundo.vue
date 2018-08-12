<template>
  <div class="hola">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <a href="/">Go to English</a>
  </div>
</template>

<script>
export default {
  name: 'HolaMundo',
  data() {
    return {
      msg: 'Bienveindos a Vue',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
