<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <h4>{{ item.productName }}</h4>
      <img :src="item.image">
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

