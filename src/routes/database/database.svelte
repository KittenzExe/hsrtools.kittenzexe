<script>
  import Footer from "../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
      <div id="content-topbar-title">Database</div>
      <div id="content-topbar-info">The place for all the information you will need</div>
  </div>
  <div id="content-grid-container">
      <div id="content-grid-item">
        <a href="./characters" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/Second_Closed_Beta_Wallpaper.webp" style="height: 300px; margin-left: -150px" alt="characters">
            <div id="content-grid-item-inner-overlay" style="margin-top: -125px;">
              Characters
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="../development" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/Light-Cone-In-the-Night.webp" style="width: 300px; margin-left: 0px" alt="lightcones">
            <div id="content-grid-item-inner-overlay" style="margin-top: -250px;">
              Light Cones
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="../development" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/Relics_Example.webp" style="height: 300px; margin-left: 0px" alt="relics">
            <div id="content-grid-item-inner-overlay" style="margin-top: -120px;">
              Relics
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="../development" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/Enemy_Doomsday_Beast.webp" style="height: 300px; margin-left: 0px" alt="enemycratures">
            <div id="content-grid-item-inner-overlay" style="margin-top: -110px; font-size: 25px;">
              Enemy Creatures
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="../development" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/Aeons_Simulated_Universe.webp" style="height: 300px; margin-left: -20px" alt="aeons">
            <div id="content-grid-item-inner-overlay" style="margin-top: -120px;">
              Aeons
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="../development" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/Location_Herta_Space_Station.webp" style="height: 300px; margin-left: -20px" alt="factions">
            <div id="content-grid-item-inner-overlay" style="margin-top: -120px;">
              Factions
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="../development" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/other/honkai-star-rail-update-1.jpg" style="height: 300px; margin-left: -150px" alt="terms">
            <div id="content-grid-item-inner-overlay" style="margin-top: -120px;">
              Terms
            </div>
          </div>
        </a>
      </div>
      <div id="content-grid-item">
        <a href="./database/version" style="text-decoration: none;">
          <div id="content-grid-item-inner">
            <img src="/images/update/honkai-star-rail-version-1.1-adds-new-characters-and-events.webp" style="height: 300px; margin-left: -150px" alt="terms">
            <div id="content-grid-item-inner-overlay" style="margin-top: -120px;">
              Updates
            </div>
          </div>
        </a>
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
  grid-template-columns: repeat(auto-fill, 320px);
  height: auto;
  margin-top: 10px;
  padding: 10px;
  }
  #content-grid-item {
  padding: 0px;
  height: 300px;
  border-radius: 300px;
  border-color: #43454e;
  border-style: dashed;
  border-width: 2px;
  margin: 10px;
  font-size: 30px;
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  }
  #content-grid-item-inner {
    position: relative;
    height: 275px;
    width: 275px;
    margin: auto;
    margin-top: 10px;
    border-radius: 275px;
    border-color: #43454e;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
  }
  #content-grid-item-inner-overlay {
    float: bottom;
    height: 10%;
    width: 100%;
    font-family: DIN;
    font-size: 40px;
    text-decoration: none;
    text-shadow: 4px 4px 6px #2e3036;
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