<script>
    import Footer from "../structure/footer.svelte"
    import Help from "../structure/extras/helpneeded.svelte"
</script>

<div id="content-holder">
    <div id="content-topbar">
      <div id="content-topbar-title">Tools</div>
      <div id="content-topbar-info" style="font-size: 20px;">List of current tools you can use!</div>
    </div>

    <Help/>

    <a href="../tools/damage-calculator" style="text-decoration: none;"><div id="content-box-listing"><h1 style="margin-top: 7.5px;">Damage Calculator</h1></div></a>
    <a href="../tools/team-builder" style="text-decoration: none;"><div id="content-box-listing"><h1 style="margin-top: 7.5px;">Team Builder</h1></div></a>
    <a href="../development" style="text-decoration: none;"><div id="content-box-listing"><h1 style="margin-top: 7.5px;">More comming soon!</h1></div></a>
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
        top: 90px;
        left: 15px;
        bottom: 0;
        position: absolute;
        overflow: hidden;
        font-family: DIN;
        font-size: 35px;
        font-weight: bold;
        color: #efd1a1;
    }

    #content-box-listing {
        width: 94%;
        height: fit-content;
        margin-left: 30px;
        margin-bottom: 50px;
        padding: 30px;
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