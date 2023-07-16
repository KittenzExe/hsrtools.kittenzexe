<script>
    import Footer from "../structure/footer.svelte"
    import Help from "../structure/extras/helpneeded.svelte"
</script>

<div id="content-holder">
    <div id="content-topbar">
      <div id="content-topbar-title">Settings</div>
      <div id="content-topbar-info" style="font-size: 20px;">(And credits!)</div>
    </div>

    <Help/>

    <div id="content-box-listing">
        <h1 style="margin-top: 7.5px;">Settings</h1><br>
        <h2>Setting</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">Description (This is being worked on!)</p>
        <h2>Setting 2</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">Description (This is being worked on!)</p>
    </div>
    <div id="content-box-listing">
        <h1 style="margin-top: 7.5px;">Credits</h1><br>
        <h2>Lead developer</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">- <a href="https://github.com/KittenzExe" target="_blank" style="text-decoration: none; color: #fef6ed;">Kittenzexe</a></p>
        <h2>Page developers</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">- <a href="https://github.com/Ccencceth" target="_blank" style="text-decoration: none; color: #fef6ed;">CCencceth - March 7th Page</a></p>
        <h2>Styling</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">- <a href="https://github.com/SunflowerBlonde" target="_blank" style="text-decoration: none; color: #fef6ed;">SunflowerBlonde</a></p>
        <br>
        <h5 style="color: #2e3036;">Honkai: Star Rail Tools (hsrtools.kittenzexe.com) is not affiliated with Hoyoverse. This website is owned and ran by KittenzExe.</h5>
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