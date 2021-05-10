<template>
  <div id="app">
    <div id="nav">
      <!-- 顯示根路由對應的view -->
      <router-link to="/">Home</router-link> |
      <!-- 顯示/about對應的view -->
      <router-link to="/about">About</router-link> |
      <router-link
        :to="{
          name: 'User',
          params: {
            id: 1,
          },
        }"
      >
        User1
      </router-link>
    </div>
    <!-- 基本使用，自動預設name屬性為default -->
    <router-view />
    <!-- 命名使用，此範例會強制渲染名為home的組件 -->
    <!-- <router-view  name="home"/> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
