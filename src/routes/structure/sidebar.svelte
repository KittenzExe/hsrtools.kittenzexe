<div id="sidebar-holder">
  <div id="sidebar-decor">
    <div id="sidebar-decor-yellow"></div>
    <div id="sidebar-decor-red"></div>
  </div>
  <div id="sidebar-content-holder">
    <div id="logo-side">
      <div id="logo"><img src="/images/icon/Pom-Pom_New_Sticker_08.png" alt="logo" style="width: 100%; height: flex;"></div>
      <div id="logotxt">Honkai: Star Rail Tools</div>
    </div>
    <div id="nav-side">
      <div id="list">
        <li id="list-li-d"><a href="../../home"><p style="margin: 0; border: 0; padding: 0;" class="desktop">Home</p><p style="margin: 0; border: 0; padding: 0;" class="mobile"><img class="mobile" src="/fonts/icons/home_FILL0_wght700_GRAD0_opsz48.svg" alt="home"></p></a></li><!-- update before out of beta -->
        <li id="list-li-d"><a href="../../characters"><p style="margin: 0; border: 0; padding: 0;" class="desktop">Characters</p><p style="margin: 0; border: 0; padding: 0;" class="mobile"><img class="mobile" src="/fonts/icons/groups_FILL0_wght700_GRAD0_opsz48.svg" alt="characters"></p></a></li><!-- update before out of beta -->
        <li id="list-li-d"><a href="../../database"><p style="margin: 0; border: 0; padding: 0;" class="desktop">Database</p><p style="margin: 0; border: 0; padding: 0;" class="mobile"><img class="mobile" src="/fonts/icons/database_FILL0_wght700_GRAD0_opsz48.svg" alt="database"></p></a></li><!-- update before out of beta -->
        <li id="list-li-d"><a href="../../guides"><p style="margin: 0; border: 0; padding: 0;" class="desktop">Guides</p><p style="margin: 0; border: 0; padding: 0;" class="mobile"><img class="mobile" src="/fonts/icons/developer_guide_FILL0_wght700_GRAD0_opsz48.svg" alt="guide"></p></a></li><!-- update before out of beta -->
        <li id="list-li-d"><a href="../../tools"><p style="margin: 0; border: 0; padding: 0;" class="desktop">Tools</p><p style="margin: 0; border: 0; padding: 0;" class="mobile"><img class="mobile" src="/fonts/icons/construction_FILL0_wght700_GRAD0_opsz48.svg" alt="tools"></p></a></li><!-- update before out of beta -->
        <li id="list-li-d"><a href="../../settings"><p style="margin: 0; border: 0; padding: 0;" class="desktop">Settings</p><p style="margin: 0; border: 0; padding: 0;" class="mobile"><img class="mobile" src="/fonts/icons/settings_FILL0_wght700_GRAD0_opsz48.svg" alt="settings"></p></a></li><!-- update before out of beta -->
      </div>
    </div>
  </div>
</div>

<style>
  @font-face { font-family: DIN; src: url('/fonts/DIN Bold.ttf'); } 

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
    background-color: #e9e7e2;
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
    font-family: DIN;
    font-size: 200%;
    font-weight: 500;
    text-align: center;
    color: #2e3036;
    overflow: hidden;
  }

  #nav-side {
    margin: 0;
    margin-top: 25px;
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
  #list-li-d {
      overflow: hidden;
  }
  #list-li-d a {
      display: block;
      color: #fef6ed;
      text-align: center;
      margin: 10px;
      padding: auto;
      padding-top: 20px;
      padding-bottom: 20px;
      text-decoration: none;
      font-family: DIN;
      font-size: 20px;
      font-weight: 500;
      overflow: hidden;
      border-width: 5px;
      border-style: solid;
      background-color: #2e3036;
      border-color: #efd1a1;
      border-top-right-radius: 25px;
      border-bottom-left-radius: 25px;
      overflow: hidden;
  }
  .desktop {
    color: #fef6ed;
  }
  .mobile {
    color: transparent;
    filter: opacity(0);
    position: absolute;
    margin-left: -10px;
    color: #2e3036;
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
      top: 0;
      left: 0;
      position: fixed;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 1050px) {
    #sidebar-holder {
      width: 100px;
    }
    #sidebar-decor-yellow, #sidebar-decor-red {
      background-color: transparent;
    }
    #logotxt {
      color: transparent;
    }
    #list-li-d a {
      background-color: transparent;
      border-color: transparent;
    }
    .desktop {
      color: transparent;
    }
    .mobile {
      color: #2e3036;
      filter: opacity(1);
    }
    #list {
      margin-top: -100px;
    }
  }
</style>