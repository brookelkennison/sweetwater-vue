<template>
  <div>
    <h1>Product List</h1>
    <div v-for="item in items" :key="item.id" style="margin: 30px; border: 2px solid black;">
      <p>Manufacturer: {{ item.manufacturer }}</p>
      <h1>
        <a :href="item.url">{{ item.productName }}</a>
      </h1>
      <img :src="item.image">
      <h6>Description: {{ item.description }}</h6>
      <p>Product Name: {{ item.productName }}</p>
      <p>Product ID: {{ item.itemid }}</p>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Available: {{ item.available }}</p>
      <p>Price: ${{ item.price }}</p>
      <button @click="addItemToCart(item)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import items from "/public/items.json";
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    items: state => state.items.all
  }),
  methods: mapActions("cart", ["addItemToCart"]),
  data() {
    return {
      items: items
    };
  }
};
</script>

