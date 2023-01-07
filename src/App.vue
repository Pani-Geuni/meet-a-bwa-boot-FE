<template>
  <router-view></router-view>
</template>

<style lang="scss">
a {
  color: black;

  &.router-link-exact-active {
    color: black;
  }
}
</style>

<script>
export default {
  name: 'App',
};
</script>
