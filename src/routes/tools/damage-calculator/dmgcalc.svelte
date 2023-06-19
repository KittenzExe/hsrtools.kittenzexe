<script>
  import Footer from "../../structure/footer.svelte"

  let ATKTOTAL = 0;
  let DMGMULTI = 0;
  let ELEDMG = 0;
  let RSBDMG = 0;
  let CHARLVL = 0;
  let UNIDMGREDMULTI = 0;
  let WEKMULTI = 0;

  let EMYDEF = 0;
  let RESYORN = 0;

  let ATKFINAL = 0;
  let DMGMULTI2 = 0;
  let DEFMULTI = 0;
  let RESEFF = 0;

  let FINAL = 0;

  function update() {
    DMGMULTI2 = DMGMULTI / 10
    ATKFINAL = ATKTOTAL * (DMGMULTI / 100);
    DEFMULTI = (1 - (EMYDEF / (EMYDEF + 200 + 10 * CHARLVL)))*100;
    RESEFF = 100 - (RESYORN * (20)+20);

    FINAL = ATKFINAL * (DEFMULTI / 100) * (RESEFF / 100) * 1 * 0.9
  }

</script>

<div id="content-holder">
    <div id="content-topbar">
      <div id="content-topbar-title">Damage Calculator</div>
    </div>
    <div id="content-box-listing">
        <h1 style="margin-top: 7.5px;">How damage is calculated</h1><br>
        <h2>Damage Equasion</h2>
        <div style="display: flex; justify-content: space-between;">
          <p style="line-height: 20px; margin-top: -2.5px;">Outgoing DMG = </p>
          <p style="color: #F09EA7; margin-top: 4px;">Base DMG</p><p style="margin-top: 7.5px;"> * </p>
          <p style="color: #F6CA94; margin-top: 4px;">DMG% Multiplier</p><p style="margin-top: 7.5px;"> * </p>
          <p style="color: #FAFABE; margin-top: 4px;">DEF Multiplier</p><p style="margin-top: 7.5px;"> * </p>
          <p style="color: #C1EBC0; margin-top: 4px;">RES Multiplier</p><p style="margin-top: 7.5px;"> * </p>
          <p style="color: #C7CAFF; margin-top: 4px;">DMG Taken Multiplier</p><p style="margin-top: 7.5px;"> * </p>
          <p style="color: #CDABEB; margin-top: 4px;">Universal DMG Reduction Multiplier</p><p style="margin-top: 7.5px;"> * </p>
          <p style="color: #F6C2F3; margin-top: 4px;">Weaken Multiplier</p>
        </div>
        <br>
    </div>
    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px;">Calculator</h1><br>
      <h2>Your stats</h2>
      <div>
        <p style="color: #F09EA7; margin-top: 4px;">ATK Total: </p><input type="number" bind:value={ATKTOTAL} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #F09EA7; margin-top: 4px;">DMG% Skill Multiplier</p><input type="number" bind:value={DMGMULTI} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">

        <p style="color: #F6CA94; margin-top: 4px;">Element DMG%</p><input type="number" bind:value={ELEDMG} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #F6CA94; margin-top: 4px;">Relic Set Bonus DMG%</p><input type="number" bind:value={RSBDMG} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">

        <p style="color: #FAFABE; margin-top: 4px;">Character Level</p><input type="number" bind:value={CHARLVL} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">

        <p style="color: #F6CA94; margin-top: 4px;">DMG% Multiplier</p>
        <p style="color: #FAFABE; margin-top: 4px;">DEF Multiplier</p>
        <p style="color: #C1EBC0; margin-top: 4px;">RES Multiplier</p>
        <p style="color: #C7CAFF; margin-top: 4px;">DMG Taken Multiplier</p>
        <p style="color: #CDABEB; margin-top: 4px;">Universal DMG Reduction Multiplier</p>
        <p style="color: #F6C2F3; margin-top: 4px;">Weaken Multiplier</p>
      </div>
      <br>
      <h2>Enemy Target</h2>
      <div>
        <p style="margin-top: 4px;">Base DEF: </p><input type="number" bind:value={EMYDEF} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #C1EBC0; margin-top: 4px;">Is Weak to Enemy Element? (1 for yes, 0 for no)</p><input type="number" bind:value={RESYORN} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
      </div>
      <br>
      <br>
    </div>
    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px;">Total</h1><br>
      <div>
        <p style="color: #F09EA7; margin-top: 4px;">ATK Total: {ATKTOTAL}</p>
        <p style="color: #F09EA7; margin-top: 4px;">DMG% Skill Multiplier: {DMGMULTI}</p>
        <br>
        <p style="color: #F09EA7; margin-top: 4px;">DEF Multi: {DEFMULTI}%</p>
        <br>
        <p style="color: #C1EBC0; margin-top: 4px;">RES Multi: {RESEFF}%</p>
        <br>
        <br>
        <p style="color: #F09EA7; margin-top: 4px;">Final DMG: {FINAL}</p>
      </div>
      <br>
    </div>
</div>

<Footer/>

<style>
    @font-face { font-family: DIN; src: url('../../fonts/DIN Bold.ttf'); } 
  
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
        font-family: DIN;
        font-size: 75px;
        font-weight: bold;
        color: #b9141c;
        display: inline
    }

    #content-box-listing {
        width: 95%;
        height: fit-content;
        margin-left: 30px;
        margin-bottom: 50px;
        padding: 10px;
        top: 10px;
        left: -10px;
        bottom: 10px;
        position: relative;
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