<template>
  <div class="container">
      <form class="filters">
        <div class="brand-filter filter">
          <p>Brand: </p>
          <div class="checkbox-pair">
            <input type="checkbox" id="xbox" name="xbox">
            <label for="xbox">Xbox</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="nintendo" name="nintendo">
            <label for="nintendo">Nintendo</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="playstation" name="playstation">
            <label for="xbox">PlayStation</label>
          </div>
        </div>
        <div class="contition-filter filter">
          <p>Condition:</p>
          <div class="checkbox-pair">
            <input type="checkbox" id="new" name="new">
            <label for="new">New</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="renewed" name="renewed">
            <label for="renewed">Renewed</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="used" name="used">
            <label for="used">Used</label>
          </div>
        </div>
        <div class="seller-filter filter">
          <p>Seller: </p>
          <div class="checkbox-pair">
            <input type="checkbox" id="amazon" name="amazon">
            <label for="amazon">Amazon</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="bestbuy" name="bestbuy">
            <label for="bestbuy">BestBuy</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="ebay" name="ebay">
            <label for="ebay">ebay</label>
          </div>
          <div class="checkbox-pair">
            <input type="checkbox" id="newegg" name="newegg">
            <label for="newegg">Newegg</label>
          </div>
        </div>
        <div class="price-filter filter">
          <p>Price:</p>
          <div class="text-pair">
            <label for="minprice">Minimum: </label>
            <input type="text" id="minprice" name="minprice">
          </div>
          <div class="text-pair">
            <label for="maxprice">Maximum: </label>
            <input type="text" id="maxprice" name="maxprice">
          </div>
        </div>
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
      listings: []
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
    width: 50%;
  }
  
  .filter {
    display: flex;
    flex-direction: column;
    margin: 5px 20px;
  }

  .filter > div {
    margin-left: 20px;
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