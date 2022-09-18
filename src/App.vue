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
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body{
//   min-height: 100vh;
//   background: linear-gradient(45deg,#fa9038,rgb(20, 50, 250));
//   // background-color: linear-gradient();
// }
// .app{
//   height: 100%;
// }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}

body {
    min-height: 100vh;
    // background: #212534;
    background: linear-gradient(45deg,#fa9038,rgb(20, 50, 250));
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    // padding-top: 2rem;
    // padding-bottom: 2rem;
    box-sizing: border-box;
}
.app{
  height: 100%;
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
