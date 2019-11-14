<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-for="item in cartItems" :key="item.id" style="margin: 30px; border: 2px solid black;">
      <p>Manufacturer: {{ item.manufacturer }}</p>
      <h1>
        <a :href="item.url">{{ item.productName }}</a>
      </h1>
      <img :src="item.image">
      <h6>Description: {{ item.description }}</h6>
      <p>Product Name: {{ item.productName }}</p>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Price: ${{ item.price }}</p>
      <button v-on:click="removeFromCart(item.id)" :disabled="item.quantity === 1">Remove From Cart</button>
    </div>
    <p>Total: {{ total }}</p>
  </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";
// import cartItems from "../store/modules/cart.js";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["cartSize", "cartTotalAmount"])
  },
  methods: {
    addToCart(id) {
      this.$item.dispatch("addToCart", id);
    },
    removeFromCart(id) {
      this.$item.dispatch("removeFromCart", id);
    }
  }
};
</script>