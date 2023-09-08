<script>
  import Footer from "../../structure/footer.svelte"
  import Help from "../../structure/extras/helpneeded.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
      <div id="content-topbar-title">Versions</div>
      <div id="content-topbar-info">Overview of all the Versions</div>
  </div>

  <Help/>

  <div id="content-grid-container">
      <div id="content-grid-item">
          <div id="content-grid-item-decor">Version 1.1</div>
          <a href="../database/version/version-1.1"><img src="/images/update/1.1/honkai-star-rail-version-1.1-adds-new-characters-and-events.webp" id="content-grid-item-character" alt="braindamage" style="margin-left: -180px; margin-top: -10px; height: 200px; width: flex;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-decor">Version 1.2</div>
        <a href="../database/version/version-1.2"><img src="/images/update/1.2/043c71056d8d2f6e2b46536fda409b20_5321003634705810847.png" id="content-grid-item-character" alt="braindamage" style="margin-left: -180px; margin-top: -10px; height: 200px; width: flex;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-decor">Version 1.3</div>
        <a href="../database/version/version-1.3"><img src="/images/update/1.3/Splash_Screen_Celestial_Eyes_Above_Mortal_Ruins.webp" id="content-grid-item-character" alt="braindamage" style="margin-left: -100px; margin-top: -10px; height: 200px; width: flex;"></a><!-- update before out of beta -->
      </div>
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
    width: calc(100vw - 15vw - 17.5px);
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
  #content-grid-container{
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px 150px 150px 150px;
  height: auto;
  margin-top: 10px;
  padding: 10px;
  }
  #content-grid-item {
  background-color: #43454e;
  padding: 0px;
  height: 200px;
  border-top-right-radius: 20px;
  margin: 10px;
  font-size: 30px;
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  }
  #content-grid-item-decor {
      position: absolute;
      width: 130px;
      height: 25px;
      margin-top: 175px;
      font-family: DIN;
      font-size: 20px;
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      overflow: hidden;
      background-color: #43454e;
  }
  #content-grid-item-character {
      overflow: hidden;
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