<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.productName }}</li>
  </ul>
</template>

<script>
import items from "/public/items.json";

export default {
  name: "Items",
  data() {
    return {
      items
    };
  },
  components: {
    items
  }
};
</script>

