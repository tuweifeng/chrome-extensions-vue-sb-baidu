<template>
  <div class="main_app">
    <h1>Hello popup</h1>

    <button @click="addItem"></button>

    <div v-for="(item, i) in $store.state.userConfig" :key="i">
      <button @click="editItem(i)"></button>
      <span>{{ item.title }}</span>
      <span>{{ item.url }}</span>

      <div v-for="conditions, actionName in item.actions" :key="acitonName">
        <span>{{ actionName }}</span>
        <em v-for="(condition, j) in conditions" :key="j">{{ condition }}</em>
      </div>

    </div>


  </div>


</template>

<script>

export default {
  name: 'App',
  methods: {
    addItem: function () {
      this.$router.push('/add')
    },
    editItem: function (index) {
      this.$router.push(`/edit/${index}`)
    },
  }
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-width: 600px;
  min-height: 400px;
}
</style>
