<script>
  import Footer from "../../../structure/footer.svelte"
  import Help from "../../../structure/extras/helpneeded.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Version 1.1</div>
    <div id="content-topbar-info" style="font-size: 20px;">Galactic Roaming</div>
  </div>

  <Help/>

  <div id="content-box-main1">
      <h1 style="margin-top: 7.5px; line-height: 40px;">New Characters</h1>
      <div id="content-grid-container">
        <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fivestar">Luocha</div>
          <a href="../../../characters/luocha"><img src="/images/character-art/Luocha/Character_Luocha_Portrait.webp" id="content-grid-item-character" alt="JingYuan" style="margin-left: -160px; margin-top: 0px; height: 400px; width: flex;"></a><!-- update before out of beta -->
        </div>
        <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fivestar">Silver Wolf</div>
          <a href="../../../characters/silver-wolf"><img src="/images/character-art/SilverWolf/Character_Silver_Wolf_Portrait.webp" id="content-grid-item-character" alt="SilverWolf" style="margin-left: -150px; margin-top: -10px; height: 300px; width: flex;"></a><!-- update before out of beta -->
        </div>
        <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fourstar">Yukong</div>
          <a href="../../../development"><img src="/images/character-art/Yukong/Character_Yukong_Portrait.webp" id="content-grid-item-character" alt="Yanqing" style="margin-left: -50px; margin-top: -60px; height: 580px; width: flex;"></a><!-- update before out of beta -->
        </div>
      </div>
  </div>
  <br><br>
  <div id="content-box-main1">
    <h1 style="margin-top: 7.5px; line-height: 40px;">New Light Cones</h1>
    <p style="line-height: 20px; margin-top: -7.5px;">- Incessant Rain - 5✦<br>- Echoes of the Coffin - 5✦<br>- Before the Tutorial Mission Starts - 4✦</p>
  </div>
  <br><br>
  <div id="content-box-main1">
    <h1 style="margin-top: 7.5px; line-height: 40px;">Events</h1>
    <p style="line-height: 20px; margin-top: -7.5px;">- Gift of Odyssey<br>- Starhunt Game<br>- Everwinter City Museum Ledger of Curiosities<br>- Lab Assistants In Position<br>- Planar Fissure<br>- Stellar Flare<br>- Garden of Plenty</p>
  </div>
  <br><br>
  <div id="content-box-main1">
    <h1 style="margin-top: 7.5px; line-height: 40px;">Missions</h1>
    <h2>Companion Missions</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">- Punklorde Mentality<br>- A Knight Stranger<br>- Frosty Blade's Trial<br>- Evanesce Like the Morning Dew</p>
    <h2>Daliy Missions</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">- Ghost of the Past<br>- Catch Me If You Can</p>
    <h2>Other Missions</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">- More Pom-Pom Missions</p>
  </div>
  <br><br>
  <div id="content-box-main1">
    <h1 style="margin-top: 7.5px; line-height: 40px;">Locations</h1>
    <h2>Jarilo-VI</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">- Belobog - History and Culture Museum</p>
  </div>
  <br><br><br>
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
      line-height: 5px;
      color: #fef6ed;
  }

  #content-grid-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    height: auto;
    margin-top: 10px;
    padding: 10px;
    }
  #content-grid-item {
    background-color: #2e3036;
    padding: 0px;
    height: 200px;
    border-top-right-radius: 20px;
    margin: 10px;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
    text-decoration: none;
    }
    #content-grid-item-star-decor {
        position: absolute;
        width: 130px;
        height: 25px;
        padding-top: 10px;
        margin-top: 175px;
        font-family: DIN;
        font-size: 20px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        overflow: hidden;
    }
    .fivestar {
        background-color: #ffd070;
        overflow: hidden;
    }
    .fourstar {
        background-color: #af86ff;
        overflow: hidden;
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
  @media screen and (max-width: 1050px) {
      #content-holder {
        margin-left: 100px;
      }
      #content-box-main1 {
        margin-left: 25px;
      }
  }
</style>