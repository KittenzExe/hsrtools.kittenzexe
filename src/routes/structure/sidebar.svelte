<div id="sidebar-holder">
  <div id="sidebar-decor">
    <div id="sidebar-decor-yellow"></div>
    <div id="sidebar-decor-red"></div>
  </div>
  <div id="sidebar-content-holder">
    <div id="logo-side">
      <div id="logo"><img src="./images/icon/Pom-Pom_Sticker_11.webp" alt="logo" style="width: 100%;"></div>
      <div id="logotxt">Honkai: Star Rail Tools</div>
    </div>
    <div id="nav-side">
      <div id="list">
        <li id="list-li"><a href="">Home</a></li><!-- update before out of beta -->
        <li id="list-li"><a href="">Characters</a></li><!-- update before out of beta -->
        <li id="list-li"><a href="">Database</a></li><!-- update before out of beta -->
        <li id="list-li"><a href="">Calculator</a></li><!-- update before out of beta -->
        <li id="list-li"><a href="">Settings</a></li><!-- update before out of beta -->
      </div>
    </div>
  </div>
</div>

<style>
  @font-face { font-family: DIN; src: url('./fonts/DIN Bold.ttf'); } 

  #sidebar-holder {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100vh;
    width: 15vw;
    top: 0;
    left: 0;
    position: fixed;
  }
  #sidebar-decor {
    margin: 0;
    margin-left: 75%;
    padding: 0;
    border: 0;
    height: 100%;
    width: 25%;
    position: absolute;
    overflow: hidden;
  }
  #sidebar-decor-yellow {
    margin: 0;
    margin-left: 70%;
    padding: 0;
    border: 0;
    height: 100vh;
    width: 30%;
    background-color: #efd1a1;
    position: absolute;
    overflow: hidden;
  }
  #sidebar-decor-red {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100vh;
    width: 70%;
    background-color: #b9141c;
    overflow: hidden;
  }
  #sidebar-content-holder {
    margin: 0;
    padding: 10px;
    border: 0;
    width: calc(75% - 20px);
    height: calc(100vh - 20px);
    background-color: #fef6ed;
    position: absolute;
    overflow: hidden;
  }
  #logo-side {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 296px;
    overflow: hidden;
  }
  #logo {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    overflow: hidden;
  }
  #logotxt {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    font-size: 200%;
    font-weight: 500;
    text-align: center;
    color: #2e3036;
    overflow: hidden;
  }

  #nav-side {
    margin: 0;
    margin-top: 50px;
    padding: 0;
    border: 0;
    width: 100%;
    height: 60%;
    overflow: hidden;
  }
  #list {
    list-style-type: none;
    overflow: hidden;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #list-li {
      overflow: hidden;
  }
  #list-li a {
      display: block;
      color: #fef6ed;
      text-align: center;
      margin: 10px;
      padding: 20px 30px;
      text-decoration: none;
      font-family: DIN;
      font-size: 20px;
      font-weight: 500;
      overflow: hidden;
      border-width: 5px;
      border-style: solid;
      background-color: #2e3036;
      border-color: #efd1a1;
      overflow: hidden;
  }
  
  @media screen and (max-width: calc(288px + 500px)) {
    #sidebar-holder {
      top: 0;
      left: 0;
      position: fixed;
      overflow: hidden;
    }
  }
  @media screen and (min-width: 1920px) {
    #sidebar-holder {
      width: 288px;
      background-color: blue;
      top: 0;
      left: 0;
      position: fixed;
      overflow: hidden;
    }
  }
</style>