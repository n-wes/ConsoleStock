<template>
  <div class="container">
      <form class="filters" @submit="onSubmit">
        <div class="brand-filter filter">
          <p>Brand: </p>
          <div class="checkbox-pair">
            <input type="checkbox" id="xbox" name="xbox" v-model="xbox">
            <label for="xbox">Xbox</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="nintendo" name="nintendo" v-model="nintendo">
            <label for="nintendo">Nintendo</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="playstation" name="playstation" v-model="playstation">
            <label for="xbox">PlayStation</label>
          </div>
        </div>
        <div class="contition-filter filter">
          <p>Condition:</p>
          <div class="checkbox-pair">
            <input type="checkbox" id="new" name="new" v-model="new_">
            <label for="new">New</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="renewed" name="renewed" v-model="renewed">
            <label for="renewed">Renewed</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="used" name="used" v-model="used">
            <label for="used">Used</label>
          </div>
        </div>
        <div class="seller-filter filter">
          <p>Seller: </p>
          <div class="checkbox-pair">
            <input type="checkbox" id="amazon" name="amazon" v-model="amazon">
            <label for="amazon">Amazon</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="bestbuy" name="bestbuy" v-model="bestbuy">
            <label for="bestbuy">BestBuy</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="ebay" name="ebay" v-model="ebay">
            <label for="ebay">ebay</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="newegg" name="newegg" v-model="newegg">
            <label for="newegg">Newegg</label>
          </div>
        </div>
        <div class="price-filter filter">
          <p>Price:</p>
          <div class="text-pair">
            <label for="minprice">Minimum: </label>
            <input type="text" id="minprice" name="minprice" v-model="minprice">
          </div>
          <div class="text-pair">
            <label for="maxprice">Maximum: </label>
            <input type="text" id="maxprice" name="maxprice" v-model="maxprice">
          </div>
        </div>
        <input type="submit" value="Save Filters" name="submit" class="submitbtn">
    </form>
    <Table :listings="listings"/>
  </div>
</template>

    rows: [
    ]
<script>
import Table from './Table.vue'
import axios from 'axios'

export default {
  components: { Table },
  name: 'Listing',
  data() {
    return {
      xbox: true,
      nintendo: true,
      playstation: true,
      new_: true,
      renewed: true,
      used: true,
      amazon: true,
      bestbuy: true,
      ebay: true,
      newegg: true,
      minprice: 0,
      maxprice: 10000,
      listings: []
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      // Frontend filtering due to API incompatability with search query parameters for multiple value selection
      axios.get('http://localhost:8000/listings')
        .then(res => {
          let brands = []
          if (this.xbox) {brands.push('xbox')}
          if (this.nintendo) {brands.push('nintendo')}
          if (this.playstation) {brands.push('playstation')}

          let conditions = []
          if (this.new_) {conditions.push('new')}
          if (this.renewed) {conditions.push('renewed')}
          if (this.used) {conditions.push('used')}

          let sellers = []
          if (this.amazon) {sellers.push('amazon')}
          if (this.bestbuy) {sellers.push('bestbuy')}
          if (this.amazon) {sellers.push('ebay')}
          if (this.amazon) {sellers.push('newegg')} 

          if (!this.minprice) {this.minprice = 0}
          if (!this.maxprice) {this.maxprice = 10000}

          if (this.minprice > this.maxprice) {
            this.minprice = 0
            this.maxprice = 10000
          }
          
          this.listings = res.data.listings.filter(listing => brands.includes(listing.brand.toLowerCase()) && conditions.includes(listing.condition.toLowerCase()) && sellers.includes(listing.seller.toLowerCase()) && listing.price >= this.minprice && listing.price <= this.maxprice)
        })
        .catch(err => {
          console.log('Error updating filters', err)
        })
    }
  },
  created() {
    console.log('hi')
    axios.get('http://localhost:8000/listings')
      .then(res => this.listings = res.data.listings)
      .catch(err => {
        console.log('There was an error!' , err)
      })
  }
}
</script>

<style scoped>
  span{
    display: inline-block;
  }

  .container {
    background-color: #eff1f1;
    height: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filters {
    border: 5px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    width: 60%;
    margin-bottom: 50px;
  }
  
  .filter {
    display: flex;
    flex-direction: column;
    margin: 5px 20px;
  }

  .filter > div {
    margin-left: 20px;
  }
   .submitbtn {
     height: 20%;
     margin: auto auto;
   }

  .box{
    background-color: #eff1f1;
    border-radius: 25px;
    width: 900px;
    border: 5px solid black;
    padding: 50px;
    margin: 0px;
    margin-left: auto;
    margin-right: auto;
  }

  .slidecontainer {
  width: 100%; 
}

.slider {
  -webkit-appearance: none;  
  width: 100%; 
  height: 15px; 
  border-radius: 5px;
  background: #d3d3d3; 
  outline: none; 
  opacity: 0.7; 
  -webkit-transition: .2s; 
  transition: opacity .2s;
  margin-left: auto;
}

.slider:hover {
  opacity: 1; 
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: 15px; 
  height: 15px; 
  border-radius: 50%;
  background: black; 
  cursor: pointer; 
}

</style>