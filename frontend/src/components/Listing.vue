<template>
  <div class="container">
      <form class="filters">
        <div class="price-filter">
          <label for="price">Price</label>
          <input type="range" min="1" max="100" value="50" class="slider" id="price" name="price">
        </div>
        <div class="storage-filter">
          <label for="storage">Price</label>
          <input type="range" min="1" max="100" value="50" class="slider" id="storage" name="storage">
        </div>
        <div class="condition-filter">
          <label for="condition">Condition</label>
          <select name="condition" id="condition">
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <label for="color">Color</label>
          <select name="color" id="color">
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
          </select>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Listing'
}
</script>

<style scoped>
  span{
    display: inline-block;
  }
  .price{
    margin-left: 20px;
    margin-right: 300px;
  }
  .storage{
    margin-right: 300px;
  }

  .container {
    background-color: #eff1f1;
    height: 100%;
    padding-top: 100px;
  }

  .filters {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
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
  width: 15%; 
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