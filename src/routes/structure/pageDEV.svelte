<script>
  import Footer from "../structure/footer.svelte"
</script>

<div id="content-holder">
  aFUCK FUCK FUCK <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>a
</div>

<Footer/>

<style>
  @font-face { font-family: DIN; src: url('./fonts/DIN Bold.ttf'); } 

  #content-holder {
    margin: 0;
    margin-left: 15vw;
    padding: 0;
    border: 0;
    min-height: 100vh;
    flex: 1;
    width: calc(100vw - 15vw);
    background-color: aqua;
    float: left;
  }
  
  @media screen and (max-width: calc(288px + 500px)) {
    #content-holder {
      background-color: red;
      margin-left: 15vw;
    }
  }
  @media screen and (min-width: 1920px) {
    #content-holder {
      width: calc(100vw - 288px);
      margin-left: 288px;
      background-color: white;
    }
  }
</style>