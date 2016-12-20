<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'
{{/unless}}

export default {
  name: 'app',
  components: {
  {{#unless router}}Hello{{/unless}}
  }
}
</script>

<style>
#app {}
</style>
