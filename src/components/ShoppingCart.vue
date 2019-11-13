<template>
  <div>
    <h1>Shopping Cart</h1>
    <!-- <div v-for="item in cartItems" :key="item.id" style="margin: 30px; border: 2px solid black;">
      <p>Manufacturer: {{ item.manufacturer }}</p>
      <h1>
        <a :href="item.url">{{ item.productName }}</a>
      </h1>
      <img :src="item.image">
      <h6>Description: {{ item.description }}</h6>
      <p>Product Name: {{ item.productName }}</p>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Price: ${{ item.price }}</p>
      <button v-on:click="addItemToCart(item)">Add to Cart</button>
    </div>-->
    <p>Total: {{ total }}</p>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import cartItems from "../store/modules/cart.js";

export default {
  computed: mapGetters("cart", {
    items: "cartItems",
    total: "cartTotal"
  }),
  data() {
    return {
      cartItems: cartItems
    };
  }
};
</script>