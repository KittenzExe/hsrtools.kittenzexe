<div id="content-holder">
  <div id="footer-decor1"></div>
  <div id="footer-decor2"></div>
  <div id="footer-main">
    <table style="width: 50%; margin-top: 15px;">
      <tr>
        <th><a id="footer-a" href="https://github.com/KittenzExe/hsrtools.kittenzexe" target="_blank" rel="noopener noreferrer"><div id="footer-split-left">Official GitHub Page</div></a></th>
        <th><a id="footer-a" href="https://twitter.com/kittenzexe" target="_blank" rel="noopener noreferrer"><div id="footer-split-center">KittenzExe's Twitter</div></a></th>
        <th><a id="footer-a" href="../../updates"><div id="footer-split-right">Web Updates</div></a></th>
      </tr>
    </table>
    <a id="footer-a-version" href="../../beta"><div id="footer-split-version">Web Version: Beta v0.2</div></a>
  </div>
</div>

<style>
  @font-face { font-family: DIN; src: url('/fonts/DIN Bold.ttf'); } 

  #content-holder {
    margin: 0;
    margin-left: 15vw;
    padding: 0;
    border: 0;
    height: 150px;
    flex: 1;
    width: calc(100vw - 15vw);
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
      width: flex;
      margin-left: 10px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #efd1a1;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: #b9141c;
  }
  #footer-split-center {
      height: 100%;
      width: flex;
      margin-left: 10px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #efd1a1;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: #b9141c;
  }
  #footer-split-right {
      height: 100%;
      width: flex;
      margin-left: 10px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #efd1a1;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: #b9141c;
  }
  #footer-split-version {
      height: 100%;
      width: flex;
      float: right;
      margin-right: 5%;
      margin-top: -35px;
      font-family: DIN;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
      padding-left: 50px;
      overflow: hidden;
  }
  #footer-a {
      text-decoration: none;
      color: #fef6ed;
      width: flex;
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
  @media screen and (max-width: 1050px) {
      #content-holder {
        margin-left: 75px;
      }
    }
</style>
