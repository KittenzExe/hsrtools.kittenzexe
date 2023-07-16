<script>
  import Footer from "../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-image-wrap">
    <img src="/images/character-art/Pompom/Pom-Pom_New_Sticker_15.png" alt="pompom" style="margin-left: 0px; margin-top: 50px; width: 100%;">
  </div>
  <div id="content-topbar">
    <div id="content-topbar-title">Why have a Beta?</div>
    <div id="content-topbar-info" style="font-size: 20px;">It's simple! (kinda)</div>
  </div>
  <div id="content-box-main1">
    Having the website be labeled as a "beta" is due to multiple reasons. One of them being that this website is under development! As things are being added to catch up to the full content, there are things missing and if it was a final version with things missing, it wouldn't be right.
    <br><img src="/images/character-art/Pompom/Pom-Pom_New_Sticker_11.png" alt="pompom" style="height: 200px;">
    <br>Being labeled a beta also allows people to freely edit / change and or update pages! As Honkai: Star Rail is still new and content is being added, the website will evolve to make sure all the content is added and accessable. (Just might take a little bit! (Solo dev moment but with some help!))
    <br><br>(Your help will be much appreciated!)
    <br><img src="/images/character-art/Pompom/Pom-Pom_New_Sticker_09.png" alt="pompom" style="height: 200px;">
    <br>Please feel free to visit the GitHub page and add some new content!
    <br><br>(A version breakdown is below this!)
  </div>
  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; text-align: center; line-height: 5px;">Version Breakdown</h1><br>
    <h2 style="text-align: center; line-height: 5px;">Broken up into 5 sections:</h2>
    <div style="text-align: center; line-height: 5px;">
      <p style="color: #ffb3ba; margin-top: 4px; display: inline-block;">Release</p>
      <p style="color: #ffdfba; margin-top: 4px; display: inline-block;">Main Version</p>
      <p style="color: #baffc9; margin-top: 4px; display: inline-block;">Sub Version</p>
      <p style="color: #bae1ff; margin-top: 4px; display: inline-block;">Patch</p>
      <p style="color: #ffffba; margin-top: 4px; display: inline-block;">Hot-Fix</p>
    </div>
    <h2 style="text-align: center; line-height: 5px;">Example:</h2>
    <div style="text-align: center; line-height: 5px;">
      <p style="color: #ffb3ba; margin-top: 4px; display: inline-block;">Beta</p>
      <p style="color: #ffdfba; margin-top: 4px; display: inline-block;">v1</p>
      <p style="color: #baffc9; margin-top: 4px; display: inline-block;">.3</p>
      <p style="color: #bae1ff; margin-top: 4px; display: inline-block;">-15</p>
      <p style="color: #ffffba; margin-top: 4px; display: inline-block;">-1</p>
    </div>
    <br>
  </div>
  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #ffb3ba; line-height: 5px;">Release</h1>
    <p>In the example, "Beta" means that the website version is being worked on.</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #ffdfba; line-height: 5px;">Main Version</h1>
    <p>In the example, "v1" means that the website is in it's first full version.</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #baffc9; line-height: 5px;">Sub Version</h1>
    <p>In the example, ".3" means that from the version, this is the 3rd main update to that version.</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #bae1ff; line-height: 5px;">Patch</h1> 
    <p>In the example, "-15" means that there have been 15 small updates to the Sub Version.</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #ffffba; line-height: 5px;">Hot-Fix</h1>
    <p>In the example, "-1" means that there has been 1 Hot-Fix on the patch.</p>
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

  #content-box-listing {
      width: 95%;
      height: fit-content;
      margin-top: 50px;
      margin-left: 30px;
      margin-bottom: 50px;
      padding: 10px;
      top: 10px;
      left: -10px;
      bottom: 10px;
      position: relative;
      text-align: center;
      background-color: #43454e;
      border-width: 5px;
      border-style: solid;
      border-color: #efd1a1;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 50px;
      font-family: DIN;
      font-size: 20px;
      line-height: 20px;
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