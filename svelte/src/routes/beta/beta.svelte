<script>
  import Footer from "../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-image-wrap">
    <img src="../src/images/character-art/Pompom/Pom-Pom_Sticker_06.webp" alt="pompom" style="margin-left: 0px; margin-top: 50px;">
  </div>
  <div id="content-topbar">
    <div id="content-topbar-title">Why have a Beta?</div>
    <div id="content-topbar-info" style="font-size: 20px;">It's simple! (kinda)</div>
  </div>
  <div id="content-box-main1">
    Having a beta web-page allows me to work on features and let people try features for later releases to the final website. Its also a precaution so I can work on a beta page and if something goes wrong, it isn't messed up on the main page.
    <br><img src="../src/images/character-art/Pompom/Pom-Pom_Sticker_08.webp" alt="pompom" style="height: 200px;">
    <br>The beta also allows people to edit / change and or update pages that will them be pushed to the main website! As Honkai: Star Rail is still new and content is being added, the beta alows people to create and publish new content which will then be put onto the main page once it has been checked.
    <br><br>(Your help will be much appreciated!)
    <br><img src="../src/images/character-art/Pompom/Pom-Pom_Sticker_14.webp" alt="pompom" style="height: 200px;">
    <br>If you have any questions or you would like to add or edit anything, please feel free to visit the public GitHub page here!
    <br><a href="https://github.com/KittenzExe/hsrtools.kittenzexe">GitHub Page!</a>
    <br>(hsrtools.kittenzexe.com is owned and ran by <a href="https://github.com/KittenzExe">KittenzExe</a>)
  </div>
</div>

<Footer/>

<style>
  @font-face { font-family: DIN; src: url('./src/fonts/DIN Bold.ttf'); } 

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
  #content-image-wrap {
      width: 490px;
      height: 800px;
      margin-top: 135px;
      overflow: hidden;
      position: absolute;
  }

  #content-box-main1 {
      width: 65%;
      height: 75%;
      margin-left: 500px;
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