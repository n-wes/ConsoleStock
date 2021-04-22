<template>
  <table id="firstTable">
    <thead>
      <tr>
        <th>Product</th>
        <th>Brand</th>
        <th>Condition</th>
        <th>Seller</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="listing" v-for="listing in listings">
        <td><a :href="listing.url" target="_blank" rel="noopener noreferrer">{{listing.type}}</a></td>
        <td>{{listing.brand}}</td>
        <td>{{listing.condition}}</td>
        <td>{{listing.seller}}</td>
        <td>{{listing.price ? listing.price : 'Unavailable'}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    listings: Array
  }
}
</script>

<style scoped>
  a {
    color:blue;
    text-decoration: none;
  }

  th, td {
    padding: 1vh 3vw;
    text-align: left;
    font-size: 1vw;
  }
</style>
