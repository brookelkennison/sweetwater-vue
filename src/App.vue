<template>
  <div id="app">
    <Navigation/>
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "App",
  components: {
    Navigation,
    ProductList,
    ShoppingCart
  }
};
</script>

