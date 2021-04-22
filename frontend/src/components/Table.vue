<template>
  <table id="firstTable">
    <thead>
      <tr>
        <th>Product</th>
        <th>Brand</th>
        <th>Condition</th>
        <th>Seller</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="listing" v-for="listing in listings">
        <td>{{listing.type}}</td>
        <td>{{listing.brand}}</td>
        <td>{{listing.condition}}</td>
        <td>{{listing.seller}}</td>
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

</style>
