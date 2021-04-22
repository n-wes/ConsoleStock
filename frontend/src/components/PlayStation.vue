<template>
  <Product :productName="productName" :productDescription="productDescription" :productLink="productLink"/>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'PlayStation',
  components: {
    Product
  },
  data() {
    return {
      productName: 'PS5',
      productDescription: "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, Singapore and South Korea, with worldwide release following a week later. The PlayStation 5 along with Microsoft's Xbox Series X and Series S consoles, released the same month, are part of the ninth generation of video game consoles.",
      productLink: "https://images.pushsquare.com/35dc0becfde2e/ps5-playstation-5-stock-guide-1.900x.jpg"
    }
  }
}
</script>