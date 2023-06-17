<div id="content-holder">
  <div id="footer-decor1"></div>
  <div id="footer-decor2"></div>
  <div id="footer-main">
      <div id="footer-split">
          <a id="footer-a" href="https://github.com/KittenzExe/hsrtools.kittenzexe" target="_blank" rel="noopener noreferrer"><div id="footer-split-left">Official GitHub Page</div></a>
          <a id="footer-a" href="https://twitter.com/kittenzexe" target="_blank" rel="noopener noreferrer"><div id="footer-split-center">KittenzExe's Twitter</div></a>
          <a id="footer-a" href="https://github.com/KittenzExe/hsrtools.kittenzexe/discussions" target="_blank" rel="noopener noreferrer"><div id="footer-split-right">Suggest an Edit</div></a>
          <a id="footer-a-version" href="https://hsrtools.kittenzexe.com/beta/beta"><div id="footer-split-version">Web Version: Beta v0.1-6</div></a><!-- update each beta --><!-- update before out of beta -->
      </div>
  </div>
</div>

<style>
  @font-face { font-family: DIN; src: url('./fonts/DIN Bold.ttf'); } 

  #content-holder {
    margin: 0;
    margin-left: 15vw;
    padding: 0;
    border: 0;
    height: 150px;
    flex: 1;
    width: calc(100vw - 15vw);
    background-color: aqua;
    float: left;
    overflow: hidden;
  }
  #footer-decor1 {
    height: 20px;
    width: 100%;
    background-color: #efd1a1;
    overflow: hidden;
  }
  #footer-decor2 {
      top: 20px;
      height: 50px;
      width: 100%;
      background-color: #b9141c;
      overflow: hidden;
  }
  #footer-main {
      top: 70px;
      height: 100px;
      width: 100%;
      overflow: hidden;
      background-color: #fef6ed;
      overflow: hidden;
  }
  #footer-split-left {
      align-items: center;
  }
  #footer-split-left {
      height: 100%;
      width: 15%;
      margin-top: 20px;
      margin-left: 10px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      padding-left: 10px;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #efd1a1;
      background-color: #b9141c;
  }
  #footer-split-center {
      height: 100%;
      width: 15.5%;
      margin-left: calc(20% + 20px);
      margin-top: -36px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      padding-left: 10px;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #efd1a1;
      background-color: #b9141c;
  }
  #footer-split-right {
      height: 100%;
      width: 12%;
      margin-left: calc(40% + 30px);
      margin-top: -37px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      padding-left: 10px;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #efd1a1;
      background-color: #b9141c;
  }
  #footer-split-version {
      height: 100%;
      margin-left: 70%;
      margin-top: -34px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      padding-left: 10px;
      overflow: hidden;
  }
  #footer-a {
      text-decoration: none;
      color: #fef6ed;
  }
  #footer-a-version {
      text-decoration: none;
      color: #cbc4bd;
  }
  
  @media screen and (max-width: calc(288px + 500px)) {
    #content-holder {
      background-color: red;
      margin-left: 15vw;
    }
  }
  @media screen and (min-width: 1920px) {
    #content-holder {
      width: calc(100vw - 288px);
      margin-left: 288px;
    }
  }
</style>
