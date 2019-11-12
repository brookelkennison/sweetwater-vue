<template>
  <div>
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
      <button>Add to Cart</button>
    </div>
  </div>
</template>

<script>
import items from "/public/items.json";

export default {
  name: "Items",
  data() {
    return {
      items: items
    };
  }
};
</script>

