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
        <input type="submit" value="SAVE FILTERS" name="submit" class="submitbtn btn btn-success btn-bolded">
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
    overflow: auto;
  }
  
  .btn {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;

    display: inline-block;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  
  .btn:focus, .btn:active:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  
  .btn:hover, .btn:focus {
    color: #333;
    text-decoration: none;
  }
  
  .btn:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }
  
  .btn-bolded {
    font-weight: bold;
  }

/* default
---------------------------- */
  .btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }
  
  .btn-default:focus {
    color: #333;
    background-color: #e6e6e6;
    border-color: #8c8c8c;
  }
  
  .btn-default:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
  
  .btn-default:active {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
  
  .btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-success:focus {
    color: #fff;
    background-color: #228c3a;
    border-color: #228c3a;
  }
  
  .btn-success:hover {
    color: #fff;
    background-color: #228c3a;
    border-color: #228c3a;
  }
  
  .btn-success:active {
    color: #fff;
    background-color: #228c3a;
    border-color: #228c3a;
  }
  
  .submitbtn {
    height: 20%;
    margin: auto auto;
    margin-right: 1.5vw;
  }

  .filters {
    border: 5px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    width: 65%;
    margin-bottom: 5vh;
  }
  
  @media screen and (max-width: 1300px) {
    .filters {
      flex-direction: column;
    }
    .submitbtn {
      margin-bottom: 1vh;
    }
  }
  
  
  .filter {
    display: flex;
    flex-direction: column;
    margin: 1vh 1.5vw;
  }

  .filter > div {
    margin-left: 1vw;
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