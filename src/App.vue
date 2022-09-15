<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <div class="title">
      <RouterLink to="/">
        <h1><span>Google</span> Books</h1>
      </RouterLink>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body{
  height: 100%;
  background:linear-gradient(45deg,#fbda61,#ff5acd);
  // background-color: linear-gradient();
}
header {
  height: 150px;
  // background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  .title {
    font-size: 20px;
    font-weight: 600;

    h1 {
      color: #fff;
      font-size: 4rem;
      font-weight: 900;
    }

  }
}
</style>
