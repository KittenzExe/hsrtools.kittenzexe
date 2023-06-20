<script>
  import Footer from "../../structure/footer.svelte"

  let SkillMulti = 0;
  let ATKTotal = 0;
  let ExtraDMG = 0;

  let CritDMG = 0;

  let ElementalDMG = 0;
  let DMGBoost = 0;
  let DoTBoost = 0;

  let EnemyLVL = 0;
  let UserLVL = 0;

  let EnemyRES = 0;
  let UserRES = 0;

  let EnemyElemental = 0;
  let EnemyALL = 0;

  let Broken = 0;


  let subdef = 0;


  let FINALSCORE = 0;


  function update() {
    subdef = (200 + 10 * EnemyLVL)
    FINALSCORE = (((SkillMulti / 100) * ATKTotal * ExtraDMG) * (1 + CritDMG) * (1 + ElementalDMG + (DMGBoost / 100) + (DoTBoost / 100)) * (1 - (subdef / (subdef + 200 + 10 + UserLVL))) * (1 - ((EnemyRES / 100) - (UserRES / 100))) * (1 + (EnemyElemental / 100) + (EnemyALL / 100)) * (Broken))
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
          <p style="line-height: 20px; margin-top: -2.5px;">DMG = </p>
          <p style="color: #F09EA7; margin-top: 4px;">Base DMG</p><p style="margin-top: 7.5px;"> * </p> <!-- CALCULATION REQUIRED: Skill Multiplier * ATK * Extra DMG (CHANGE ATK FOR DEF OR MAX HP IF DAMAGE IS SCALED OFF THEM)-->
          <p style="color: #F6CA94; margin-top: 4px;">CRIT Multiplier</p><p style="margin-top: 7.5px;"> * </p> <!-- CALCULATION REQUIRED: 1 + CRIT DMG | OR | 1 (IF CRIT DOSENT HIT)-->
          <p style="color: #FAFABE; margin-top: 4px;">DMG Boost Multiplier</p><p style="margin-top: 7.5px;"> * </p> <!-- CALCULATION REQUIRED: 1 + Elemental DMG Boost + All DMG Boost + DoT Boost-->
          <p style="color: #C1EBC0; margin-top: 4px;">DEF Multiplier</p><p style="margin-top: 7.5px;"> * </p> <!-- CALCULATION REQUIRED: (enemies only: DEF = 200 + 10 * Level) 1 - (DEF / (DEF + 200 + 10 + Level (Attacker)))-->
          <p style="color: #C7CAFF; margin-top: 4px;">RES Multiplier</p><p style="margin-top: 7.5px;"> * </p> <!-- CALCULATION REQUIRED: 1 - (RES (enemy) - RES PEN (Attacker))-->
          <p style="color: #CDABEB; margin-top: 4px;">VUN Multiplier</p><p style="margin-top: 7.5px;"> * </p> <!-- CALCULATION REQUIRED: 1 + Elemental Vulnerability + All Type Vulnerability -->
          <p style="color: #F6C2F3; margin-top: 4px;">Broken Multiplier</p> <!-- CALCULATION REQUIRED: 0.9 if enemy has break | 1.0 if not -->
        </div>
        <br>
    </div>
    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px;">Calculator</h1><br>
      <h2>Stats</h2>
      <div>
        <p style="color: #F09EA7; margin-top: 4px;">Skill Multiplier:</p><input type="number" bind:value={SkillMulti} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #F09EA7; margin-top: 4px;">ATK Total:</p><input type="number" bind:value={ATKTotal} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #F09EA7; margin-top: 4px;">Extra DMG</p><input type="number" bind:value={ExtraDMG} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <br><br><br><br><br>
        <p style="color: #F6CA94; margin-top: 4px;">Crit DMG (Leave blank for no CRIT)</p><input type="number" bind:value={CritDMG} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <br><br><br><br><br>
        <p style="color: #FAFABE; margin-top: 4px;">Elemental DMG Boost (%)</p><input type="number" bind:value={ElementalDMG} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #FAFABE; margin-top: 4px;">All DMG Boost (%)</p><input type="number" bind:value={DMGBoost} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #FAFABE; margin-top: 4px;">DoT Boost (%)</p><input type="number" bind:value={DoTBoost} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <br><br><br><br><br>
        <p style="color: #C1EBC0; margin-top: 4px;">Enemy Level</p><input type="number" bind:value={EnemyLVL} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #C1EBC0; margin-top: 4px;">Your Level</p><input type="number" bind:value={UserLVL} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <br><br><br><br><br>
        <p style="color: #C7CAFF; margin-top: 4px;">Enemy RES</p><input type="number" bind:value={EnemyRES} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #C7CAFF; margin-top: 4px;">Your RES PEN</p><input type="number" bind:value={UserRES} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <br><br><br><br><br>
        <p style="color: #CDABEB; margin-top: 4px;">Enemy Elemental Vulnerability</p><input type="number" bind:value={EnemyElemental} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <p style="color: #CDABEB; margin-top: 4px;">All Elemental Vulnerability</p><input type="number" bind:value={EnemyALL} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
        <br><br><br><br><br>
        <p style="color: #F6C2F3; margin-top: 4px;">Broken? (0.9 for yes | 1.0 for no)</p><input type="number" bind:value={Broken} on:input="{update}" style="margin-bottom: 5px; margin-top: -5px; width: 100px;">
      </div>
      <br>
      <br>
    </div>
    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px;">Total</h1><br>
      <div>
        <p style="margin-top: 4px;">Final DMG: {FINALSCORE}</p>
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