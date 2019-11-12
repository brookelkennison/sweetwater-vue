<template>
  <div id="app">
    <Navigation/>
    <ProductList/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";

export default {
  name: "App",
  components: {
    Navigation,
    ProductList
  }
};
</script>

