<div id="sidebar-holder">
  <div id="sidebar-decor">
    <div id="sidebar-decor-yellow"></div>
    <div id="sidebar-decor-red"></div>
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
    height: max-content;
    width: 20%;
    background-color: aqua;
  }
  @media screen and (max-width: calc(384px + 500px)) {
    #sidebar-holder {
      background-color: aquamarine;
    }
  }
  @media screen and (min-width: 1920px) {
    #sidebar-holder {
      width: 384px;
      background-color: blue;
    }
  }
</style>