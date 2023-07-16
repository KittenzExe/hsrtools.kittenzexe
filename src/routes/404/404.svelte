<script>
// @ts-nocheck

    import Footer from "../structure/footer.svelte"
  </script>
  
  <div id="content-holder">
    <div id="content-topbar">
      <div id="content-topbar-title">404</div>
      <div id="content-topbar-info" style="font-size: 20px;">Uhh Ohh! Looks like something went wrong!</div>
    </div>
    <div id="content-box-main1">
      <img src="/images/character-art/Pompom/Pom-Pom_New_Sticker_07.png" alt="pompom" style="height: 200px;">
      <br>Im sorry to say but this... wasn't ment to happen. Maybe check your url?
      <br><br>If you are on the main website (https://hsrtools.kittenzexe.com), if possible, could you please report this to the GitHub page? <br>(Your help will be much appreciated!)
      <br><br>If you are on the beta website (https://hsrtools.kittenzexe.com/beta), then this is probably under development. You can check it out on the GitHub page.
      <br><br><button id="button" onclick="history.back()">Go Back</button><br>
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
        color: #fef6ed;
    }

    #button {
        background-color: #b9141c;
        border: 0;
        border-radius: 10px;
        color: #fef6ed;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        font-family: DIN;
        font-size: 20px;
        cursor: pointer;
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