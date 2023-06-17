<script>
  // @ts-nocheck
  
  import Footer from "../structure/footer.svelte"
</script>
  
<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Welcome!</div>
    <div id="content-topbar-info" style="font-size: 20px;">Welcome to Honkai: Star Rail Tools!</div>
  </div>
  <div id="content-box-main1">
    <h1 style="margin-top: 7.5px;">hsrtools.kittenzexe.com is under development at the moment!</h1><br>
      <h2>What does that mean?</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">Well... since this website is so new, there is only one developer working on it at the moment, <a href="https://github.com/KittenzExe" target="_blank" style="text-decoration: none; color: #b9141c;">Kittenzexe</a>. If you would like, please consider contributing to the GitHub page! (Your help will be much appreciated!)</p>
      <h2>How you can help!</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">Like what was said above, any contribution to the GitHub page would be amazing. Information is much needed and with your help, the website can be finished earlier! (This is a community made website for the Honkai: Star Rail community)</p>
      <h2>What can I see right now?</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">Not a lot right now (as of June 18th). You can go to the following pages:<br>- This page <br> - Asta character Page <br> - Updates page <br> - Settings page <br><br> There will be more to come so sit tight, this is going to be a wild ride!</p>
      <h2>Important Links</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">
        <button id="button" href="https://github.com/KittenzExe/hsrtools.kittenzexe" target="_blank" rel="noopener noreferrer">GitHub Page</button><br>
        <button id="button" href="https://github.com/KittenzExe/hsrtools.kittenzexe/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contribution Docs</button><br>
        <button id="button" href="https://github.com/KittenzExe/hsrtools.kittenzexe/issues" target="_blank" rel="noopener noreferrer">Issue Report (or Feature Report)</button><br>
      </p>
      <br>
  </div>
</div>

<Footer/>

<style>
  @font-face { font-family: DIN; src: url('./fonts/DIN Bold.ttf'); } 

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

  #button {
        background-color: #b9141c;
        border: 0;
        border-radius: 10px;
        color: #fef6ed;
        padding: 5px 10px;
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