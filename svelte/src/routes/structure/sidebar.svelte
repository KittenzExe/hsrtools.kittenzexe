<div id="sidebar-holder">
  <div id="sidebar-decor">
    <div id="sidebar-decor-yellow"></div>
  </div>
  <div id="sidebar-content-holder">
    <div id="logo-side">
      <div id="logo"></div>
      <div id="logotxt"></div>
    </div>
  </div>
</div>

<style>
  #sidebar-holder {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100vh;
    width: 15vw;
    background-color: aqua;
    position: sticky;
  }
  #sidebar-decor {
    margin: 0;
    margin-left: 75%;
    padding: 0;
    border: 0;
    height: 100vh;
    width: 25%;
    background-color: red;
    position: sticky;
  }
  #sidebar-decor-yellow {
    margin: 0;
    margin-left: 70%;
    padding: 0;
    border: 0;
    height: 100vh;
    width: 30%;
    background-color: yellow;
    position: sticky;
  }
  @media screen and (max-width: calc(288px + 500px)) {
    #sidebar-holder {
      background-color: aquamarine;
    }
  }
  @media screen and (min-width: 1920px) {
    #sidebar-holder {
      width: 288px;
      background-color: blue;
    }
  }
</style>