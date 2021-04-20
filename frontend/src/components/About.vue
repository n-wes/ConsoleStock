<template>
<div class="cont">
  <div class="top">
    <div class="title">
    <h1>About ConsoleStock</h1>
    </div>
    <div class="description">
      <p>
        ConsoleStock was created for our Software Engineering Principles course
        at SMU. Through working on the project, we discovered that ConsoleStock
        was going to be a hit among video game enthusiasts. We launched right after
        the 2020 next-gen consoles came out, so finding these specific consoles in stock
        was a difficult task. Using Amazon, Ebay, BestBuy, and Newegg, data is collected
        from these sites and shown here. We chose these websites to start, and have
        plans to add more sites in the future.
      </p>
      <p>
        Thank you for choosing ConsoleStock!
      </p>
    </div>
    <div class="meet">
      <h2>Meet our Developers</h2>
    </div>
  </div>

  <div class="bottom">
    <div class="container">
        <div class="overlay">
          <span>Elliot Boesch</span>
        </div>
    </div>

    <div class="container2">
        <div class="overlay">
          <span>Garrett Moore</span>
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
          <span>Nathan Wesley</span>
        </div>
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

  h1{
    margin: 0%;
  }
  p{
    margin: 0%;
  }

  .cont{
    background-color: #eff1f1;
    padding-bottom: 200px;
    padding-top: 10px;
  }

  .top {
    background-color: #eff1f1;
    height: 100%;
  }

  .title{
    margin: 0px;
    font-size: 35px;
    text-align: center;
  }
  .description{
    font-size: 18px;
    padding-left: 190px;
    padding-right: 190px;
    text-align: center;
    margin: 0px;
    padding-top: 0px;
  }
  .meet{
    text-align: center;
    padding-top: 30px;
  }

  .bottom{
    background-color: #eff1f1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: relative;
    margin: 20px;
    width: 200px;
    height: 200px;
    background: url("../assets/elliot.png");
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
    background: url("../assets/garret.png");
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
    background: url("../assets/alex.png");
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
    background: url("../assets/anthony.png");
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
    background: url("../assets/nathan.png");
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
    top: 90px;
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
</style>