<script>
  import Footer from "../../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Development Tree</div>
    <div id="content-topbar-info" style="font-size: 20px;">Current status of all pages on hsrtools.kittenzexe.com</div>
  </div>
  <div id="graph-container">
    <h1 style="color: #fef6ed;">Key of Information:</h1>
    <h2 id="completed" style="width: 85%;">Completed - Final Product, may change but nothing too serious</h2>
    <h2 id="finalized" style="width: 85%;">Finalized - Almost ready, may need changes in a later update</h2>
    <h2 id="development" style="width: 85%;">Development - Being worked on, still needing a lot of work before it can be finished</h2>
    <h2 id="notstarted" style="width: 85%;">Not Started - Planned but not worked on, page is planned but needs to be built</h2>
    <h2 style="color: #fef6ed;">This page is broken up into 2 parts, Official Pages (Pages ment for public use) and Side Pages (Pages ment for development or fillers)</h2>
    <br><br>
    <h1 style="color: #fef6ed;">Official Pages (As of Beta v0.1-16)</h1>
    <table style="width: 99%;">
      <tr>
        <th style="width: 20%; color: #fef6ed;">Main Pages</th>
        <th style="width: 50%; color: #fef6ed;">Sub Pages</th>
        <th style="width: 30%; color: #fef6ed;">Location and Name</th>
      </tr>
      <tr>
        <td><p id="completed">Home</p></td>
        <td><p id="completed">index</p><p id="completed">Home</p></td>
        <td><p id="completed">index.svelte</p><p id="completed">home/home.svelte</p></td>
      </tr>
      <tr>
        <td><p id="development">Characters</p></td>
        <td>
          <p id="finalized">Main Page</p>
          <br>
          <p id="notstarted">Arlan</p>
          <p id="finalized">Asta</p>
          <p id="development">Bailu</p>
          <p id="development">Bronya</p>
          <p id="development">Clara</p>
          <p id="notstarted">Dan Heng</p>
          <p id="development">Gepard</p>
          <p id="notstarted">Herta</p>
          <p id="development">Himeko</p>
          <p id="notstarted">Hook</p>
          <p id="development">Jing Yuan</p>
          <p id="development">Luocha</p>
          <p id="finalized">March 7th</p>
          <p id="notstarted">Natasha</p>
          <p id="notstarted">Pela</p>
          <p id="notstarted">Qingque</p>
          <p id="notstarted">Sampo</p>
          <p id="development">Seele</p>
          <p id="notstarted">Serval</p>
          <p id="finalized">Silver Wolf</p>
          <p id="notstarted">Sushang</p>
          <p id="notstarted">Tingun</p>
          <p id="notstarted">Trailblazer</p>
          <p id="development">Welt</p>
          <p id="development">Yanqing</p>
          <p id="notstarted">Yukong</p>
        </td>
        <td>
          <p id="finalized">characters/character.svelte</p>
          <br>
          <p id="notstarted">n/a</p>
          <p id="finalized">characters/asta/asta.svelte</p>
          <p id="development">characters/bailu/bailu.svelte</p>
          <p id="development">characters/bronya/bronya.svelte</p>
          <p id="development">characters/clara/clara.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="development">characters/gepard/gepard.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="development">characters/himeko/himeko.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="development">characters/jingyuan/jingyuan.svelte</p>
          <p id="development">characters/luocha/luocha.svelte</p>
          <p id="finalized">characters/march-7th/march-7th.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="development">characters/seele/seele.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="finalized">characters/silver-wolf/silverwolf.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="development">characters/welt/welt.svelte</p>
          <p id="development">characters/yanqing/yanqing.svelte</p>
          <p id="notstarted">n/a</p>
        </td>
      </tr>
      <tr>
        <td><p id="development">Database</p></td>
        <td>
          <p id="development">Main</p>
          <br>
          <p id="development">Characters</p>
          <p id="notstarted">Light Cones</p>
          <p id="notstarted">Relics</p>
          <p id="notstarted">Enemy Creatures</p>
          <p id="notstarted">Aeons</p>
          <p id="notstarted">Factions</p>
          <p id="notstarted">Terms</p>
        </td>
        <td>
          <p id="development">database/database.svelte</p>
          <br>
          <p id="development">characters/characters.svelte</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
          <p id="notstarted">n/a</p>
        </td>
      </tr>
      <tr>
        <td><p id="development">Guides</p></td>
        <td><p id="development">Main</p><p id="development">Genshin To Star Rail Guide</p></td>
        <td><p id="development">guides/guides.svelte</p><p id="development">guides/genshin-to-star-rail/gtosr.svelte</p></td>
      </tr>
      <tr>
        <td><p id="development">Tools</p></td>
        <td><p id="development">Damage Calculator</p><p id="development">Team Builder</p></td>
        <td><p id="development">tools/damage-calculator/dmgcalc.svelte</p><p id="development">tools/team-builder/builder.svelte</p></td>
      </tr>
      <tr>
        <td><p id="development">Settings</p></td>
        <td><p id="development">Settings and Credits</p></td>
        <td><p id="development">settings/settings.svelte</p></td>
      </tr>
      <tr>
        <td><p id="completed">Updates</p></td>
        <td><p id="completed">Updates</p></td>
        <td><p id="completed">updates/updates.svelte</p></td>
      </tr>
    </table>
    <h1 style="color: #fef6ed;">Side Pages (As of Beta v0.1-16)</h1>
    <table style="width: 99%;">
      <tr>
        <th style="width: 20%; color: #fef6ed;">Main Pages</th>
        <th style="width: 50%; color: #fef6ed;">Sub Pages</th>
        <th style="width: 30%; color: #fef6ed;">Location and Name</th>
      </tr>
      <tr>
        <td><p id="completed">404</p></td>
        <td><p id="completed">404 Page</p></td>
        <td><p id="completed">404/404.svelte</p></td>
      </tr>
      <tr>
        <td><p id="completed">Beta</p></td>
        <td><p id="completed">Beta Info Page</p></td>
        <td><p id="completed">beta/beta.svelte</p></td>
      </tr>
      <tr>
        <td><p id="completed">Development</p></td>
        <td><p id="completed">Under Development (Filler) Page</p><p id="finalized">Development Tree (This page)</p></td>
        <td><p id="completed">development/underdevelopment.svelte</p><p id="finalized">development/devtree/devtree.svelte</p></td>
      </tr>
    </table>
    <br>
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
    font-family: DIN;
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
  
  #graph-container {
    padding: 10px;
    width: 100%;
    height: 100%;
    margin-top: -50px;
  }
  table, th, td {
    border: 0.5px solid #fef6ed;
    font-family: DIN;
  }

  #completed {
    padding: 5px;
    background-color: #C1EBC0;
    border-radius: 5px;
  }
  #finalized {
    padding: 5px;
    background-color: #FAFABE;
    border-radius: 5px;
  }
  #development {
    padding: 5px;
    background-color: #F6CA94;
    border-radius: 5px;
  }
  #notstarted {
    padding: 5px;
    background-color: #F09EA7;
    border-radius: 5px;
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