<template>
  <div id="app">
    <Navigation/>
    <Items/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Items from "./components/Items";

export default {
  name: "App",
  components: {
    Navigation,
    Items
  }
};
</script>

