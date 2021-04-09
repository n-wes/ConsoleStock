
<template>
  <div class="container">
    <div class="box">
      <span class="price">Price</span>
      <span class="storage">Storage</span>
      <span class="retailers">Retailers</span>
      <div class="slidecontainer">
    <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
      </div>
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