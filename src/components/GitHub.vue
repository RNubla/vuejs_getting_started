<template>
  <div class="git">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="queryGitHub()">
        <input v-model="username" type="text" placeholder="GitHub Username">
    </form>
    <div class="results" v-if="results">
        <!-- {{ results }} -->
        <img v-bind:src="results.avatar_url"/>
        <h2>{{ results.name }}</h2>
        <div>{{ results.bio }}</div>
        <div>{{results.blog}}</div>
        <div>{{results.company}}</div>
        <div>{{ results.location }}</div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'GitHubSearch',
  data() {
    return {
      msg: 'GitHub',
      count: 0,
      results: null,
      username: null,
    };
  },
  methods: {
    queryGitHub() {
        var uname = this.username;
        let self = this;
        fetch('https://api.github.com/users/' +uname)
        .then((j) => {
            return j.json();
        })
        .then ((r) => {
            console.log(r);
            self.results = r;
            })
        }
    }
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
