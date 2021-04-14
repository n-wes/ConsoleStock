<template>
  <div class="top">
    <div class="title">
    <h1>About Console Stock</h1>
    </div>
    <div class="description">
      <p>
        Console Stock was created for our Software Engineering Principles course
        at SMU. Through working on the project, we discovered that Console Stock
        was going to be a hit among video game enthusiasts. We launched right after
        the 2020 consoles came out, so finding these speicifc consoles in stock
        was a difficult task. Using Amazon, Ebay, BestBuy, Newegg, data is collected
        from these sites and shown here. We chose these websites to start, and have
        plans to add more in the future. Thank you for choosing Console Stock!
      </p>
    </div>

  <div class="bottom">
    <div class="container">
        <div class="overlay">
          <span>Elliot Boesch</span>
        </div>
    </div>

    <div class="container2">
        <div class="overlay">
          <span>Garret Moore</span>
        </div>
    </div>

    <div class="container3">
        <div class="overlay">
          <span>Alex Meech</span>
        </div>
    </div>
    <div class="container4">
        <div class="overlay">
          <span>Anthony Wang</span>
        </div>
    </div>
    <div class="container5">
        <div class="overlay">
          <span>Nathan Wesely</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .top {
    background-color: #eff1f1;
    height: 100%;
    padding-top: 100px;
  }

  .title{
    margin: 0px;
    font-size: 35px;
    text-align: center;
  }
  .description{
    font-size: 18px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .bottom{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: relative;
    margin: 20px;
    width: 200px;
    height: 200px;
    background: url('assets/elliot.png');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  .container2 {
    position: relative;
    margin: 20px;
    width: 200px;
    height: 200px;
    background: url('assets/garret.png');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  .container3 {
    position: relative;
    margin: 20px;
    width: 200px;
    height: 200px;
    background: url('assets/alex.png');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  .container4 {
    position: relative;
    margin: 20px;
    width: 200px;
    height: 200px;
    background: url('assets/anthony.png');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  .container5 {
    position: relative;
    margin: 20px;
    width: 200px;
    height: 200px;
    background: url('assets/nathan.png');
    background-size: cover;
    background-position: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .container .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .container2 .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .container3 .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .container4 .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .container5 .overlay {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }

  .container:hover .overlay {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
  .container2:hover .overlay {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
  .container3:hover .overlay {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
  .container4:hover .overlay {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
  .container5:hover .overlay {
    opacity: 1;
    height: 100%;
    width: 100%;
  }

  .overlay span {
    font-family: Tahoma;
    font-size: 20px;
    opacity: 0;
    color: #FFF;
    text-align: center;
    position: absolute;
    margin: auto;
    width: 200px;
    height: 50px;
    top: 125px;
  }

  .container:hover .overlay span {
    opacity: 1;
    transition: 0.8s ease-in-out 0s;
  }
  .container2:hover .overlay span {
    opacity: 1;
    transition: 0.8s ease-in-out 0s;
  }
  .container3:hover .overlay span {
    opacity: 1;
    transition: 0.8s ease-in-out 0s;
  }
  .container4:hover .overlay span {
    opacity: 1;
    transition: 0.8s ease-in-out 0s;
  }
  .container5:hover .overlay span {
    opacity: 1;
    transition: 0.8s ease-in-out 0s;
  }
