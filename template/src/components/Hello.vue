<template>
  <div class="hello">
    {{#vuex}}
    <h1>\{{sharedState.example.msg}}</h1>
    {{else}}
    <h1>\{{ msg }}</h1>
    {{/vuex}}
  </div>
</template>

<script lang="babel">
import store from '../store'
export default {
  name: 'hello',
  data() {
    return {
      {{#vuex}}sharedState: store.state{{else}}msg: 'hello!!'{{/vuex}}
    }
  }
}
</script>

<style scoped>
</style>
