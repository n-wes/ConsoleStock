<template>
  <div class="container">
    <div class="top">
      <h1>ConsoleStock aggregates listings of popular consoles from different retailers to help you find the best price</h1>
    </div>
    <div class="bottom">
      <ul class="console__links">
        <li id="ps5"><a href=""><img src="../assets/ps5.svg" alt="ps5"></a></li>
        <li id="xbox"><a href=""><img src="../assets/xbox.png" alt="xbox"></a></li>
        <li id="switch"><a href=""><img src="../assets/switch.svg" alt="switch"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .container {
    background-color: #101636;
    height: 100%;
    padding-top: 100px;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #D47F7F;
    margin-bottom: 100px;
  }

  .top h1 {
    text-align: center;
    max-width: 50%;
  }

  .bottom .console__links{
    list-style: none;
    display: flex;
    margin: 0;
  }

  .bottom li {
    margin: auto;
    border-radius: 10px;
    height: 400px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom img {
    max-height: 250px;
    max-width: 250px;
  }

  #ps5 {
    background: #003087;
  }

  #xbox {
    background: #107C10;
  }

  #switch {
    background: #E4000F;
  }
</style>