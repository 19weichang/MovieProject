<template>
  <div class="nav">
    <div class="icon">icon</div>
    <ul class="router">
      <li><router-link to="/main">Main</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: white;
  .router {
    display: flex;
    list-style: none;
    font-style: none;
    li {
      padding: 0px 10px;
      a {
      color: white;
      text-decoration:none;
      }
    }
  }
}
</style>
