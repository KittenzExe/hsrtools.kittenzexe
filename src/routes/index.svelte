<script>
  import Footer from "./structure/footer.svelte"
  import { Version } from '../version.json';
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Welcome!</div>
    <div id="content-topbar-info" style="font-size: 20px;">Welcome to Honkai: Star Rail Tools!</div>
  </div>
  <div style="display: flex;">
    <div style="position:inherit;">
      <div id="content-box-main" style="margin-left: 125px; height: 280px; padding: 20px; background-image: url(/images/update/1.3/Splash_Screen_Celestial_Eyes_Above_Mortal_Ruins.webp); background-size: 100%; background-repeat: no-repeat;">
        <h1 style="margin-top: 7.5px; line-height: 40px; position: absolute; color: #b9141c;">Version 1.3 Highlights</h1>
        <a id="button" href="./database/version/version-1.3" style="margin-top: 50px; position: absolute; padding: 0px 5px 0px 5px">Highlights</a><br>
      </div>
      <br>
      <div id="content-box-main" style="margin-left: 125px; height: 180px;">
        <h1 style="margin-top: 7.5px; line-height: 40px; font-size: 35px;">Web Version: {Version} Updates</h1><br>
        <p style="line-height: 20px; margin-top: -7.5px;">- A new re-designed updates page<br>- Home page fixes<br>- Added new 1.2 characters<br>- 1.2 Highlights Page added<br>- Database Update image updated</p>
      </div>
    </div>
    <div id="content-box-main" style="margin-left: 25px;">
      <h1 style="margin-top: 7.5px; line-height: 40px;">hsrtools.kittenzexe.com is under development at the moment!</h1><br>
        <h2>What does that mean?</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">Well... since this website is so new, there isn't much content to be seen. If you would like, please consider contributing to the GitHub page! (Your help will be much appreciated!)</p>
        <h2>How you can help!</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">Like what was said above, any contribution to the GitHub page would be amazing. Information is much needed and with your help, the website can be finished earlier! (This is a community made website for the Honkai: Star Rail community)</p>
        <h2>What can I see right now?</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">Check out the DevTree to see all the pages.</p>
        <a id="button" href="./development/devtree">DevTree</a><br>
        <h2>Important Links</h2>
        <p style="line-height: 20px; margin-top: -7.5px;">
          <a id="button" href="https://github.com/KittenzExe/hsrtools.kittenzexe" target="_blank" rel="noopener noreferrer">GitHub Page</a><br>
          <a id="button" href="https://github.com/KittenzExe/hsrtools.kittenzexe/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contribution Docs</a><br>
          <a id="button" href="https://github.com/KittenzExe/hsrtools.kittenzexe/issues" target="_blank" rel="noopener noreferrer">Issue Report (or Feature Report)</a><br>
        </p>
        <br>
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

  #content-box-main {
      width: 33vw;
      height: 75%;
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
      line-height: 40px;
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
  @media screen and (max-width: 1050px) {
      #content-holder {
        margin-left: 100px;
      }
      #content-box-main {
        margin-left: 25px;
      }
  }
</style>