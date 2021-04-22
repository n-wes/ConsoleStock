<template>
  <div class="product-description">
    <h1>{{productName}}</h1>
    <p>{{productDescription}}</p>
    <img :src="productLink" alt="{{productName}}">
  </div>
  
</template>

<script>
export default {
  name: 'Product',
  props: {
    productName: String,
    productDescription: String,
    productLink: String
  }
}
</script>

<style scoped>
.product-description {
  margin-left: 30px;
}

p {
  width: 80%;
}

img {
  max-height: 700px;
  max-width: 700px;
}

</style>
