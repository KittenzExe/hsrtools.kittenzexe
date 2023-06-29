<script>
  import Footer from "../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Uhh ohh!</div>
    <div id="content-topbar-info" style="font-size: 20px;">Looks like something went wrong!</div>
  </div>
  <div id="content-box-main1">
    <img src="/images/character-art/Pompom/Pom-Pom_Sticker_15.webp" alt="pompom" style="height: 200px;">
    <br>Don't worry! This isn't a 404 page but you have encounted a page that hasn't been made yet or under development!
    <br><br><br>If you are on the main website (https://hsrtools.kittenzexe.com), then this page isn't here. This is a tempoary page designed as a filler of where the next webpage will go.
    <br><br>If you are on the beta website (https://hsrtools.kittenzexe.com/beta), then this page might be under development! If you would like to find out or help develop it, check it out on GitHub! (Your help will be much appreciated!)
    <br><img src="/images/character-art/Pompom/Pom-Pom_Sticker_14.webp" alt="pompom" style="height: 200px;">
    <br>If you have any questions or you would like to add or edit anything, please feel free to visit the public GitHub page here!
    <br><a href="https://github.com/KittenzExe/hsrtools.kittenzexe">GitHub Page!</a>
    <br>(hsrtools.kittenzexe.com is owned and ran by <a href="https://github.com/KittenzExe">KittenzExe</a>)
  </div>
</div>

<Footer/>

<style>
  @font-face { font-family: DIN; src: url('/fonts/DIN Bold.ttf'); } 

  #content-holder {
    margin: 0;
    margin-left: 15vw;
    padding: 0;
    border: 0;
    min-height: 100vh;
    flex: 1;
    width: calc(100vw - 15vw);
    background-color: #2e3036;
    float: left;
  }

  /*FROM OLD CSS*/

  #content-topbar {
      width: 100%;
      height: 150px;
      padding: 0;
      top: 0;
      left: 0;
      bottom: 0;
      position: relative;
      overflow: hidden;
      align-items: center;
  }
  #content-topbar-title {
      width: 100%;
      height: 80px;
      padding: 0;
      top: 0;
      left: 10px;
      bottom: 0;
      position: absolute;
      overflow: hidden;
      font-family: DIN;
      font-size: 75px;
      font-weight: bold;
      color: #b9141c;
      display: inline
  }
  #content-topbar-info {
      width: 100%;
      height: 80px;
      padding: 0;
      top: 80px;
      left: 15px;
      bottom: 0;
      position: absolute;
      overflow: hidden;
      font-family: DIN;
      font-size: 35px;
      font-weight: bold;
      color: #efd1a1;
  }

  #content-box-main1 {
      width: 85%;
      height: 75%;
      margin-left: 125px;
      padding: 20px;
      top: 20px;
      left: -10px;
      bottom: 10px;
      position: relative;
      overflow: hidden;
      background-color: #43454e;
      border-width: 5px;
      border-style: solid;
      border-color: #efd1a1;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 50px;
      font-family: DIN;
      font-size: 20px;
      color: #fef6ed;
  }
  
  @media screen and (max-width: calc(288px + 500px)) {
    #content-holder {
      background-color: #2e3036;
      margin-left: 15vw;
    }
  }
  @media screen and (min-width: 1920px) {
    #content-holder {
      width: calc(100vw - 288px);
      margin-left: 288px;
      background-color: #2e3036;
    }
  }
</style>