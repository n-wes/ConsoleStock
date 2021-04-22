<template>
  <Product :productName="productName" :productDescription="productDescription" :productLink="productLink"/>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'Xbox',
  components: {
    Product
  },
  data() {
    return {
      productName: 'Xbox Series X|S',
      productDescription: "The Xbox Series X and the Xbox Series S (collectively, the Xbox Series X/S) are home video game consoles developed by Microsoft. They were both released on November 10, 2020 as the fourth generation of the Xbox console family, succeeding the Xbox One family. Along with Sony's PlayStation 5, also released in November 2020, the Xbox Series X and Series S are part of the ninth generation of video game consoles.",
      productLink: "https://media.wired.com/photos/5fa5dc3dba670daaf8e97a8d/master/w_2560%2Cc_limit/games_gear_series-x.jpg"
    }
  }
}
</script>