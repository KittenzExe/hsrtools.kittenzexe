<script>
  import Footer from "../../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Genshin to Star Rail Guide</div>
  </div>
  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px;">Main differences</h1><br>
    <h2>Broken up into 5 categories:</h2>
    <div style="display: flex; justify-content: space-between; padding-left: 100px; padding-right: 100px;">
      <p style="color: #ffb3ba; margin-top: 4px;">Combat</p>
      <p style="color: #ffdfba; margin-top: 4px;">Terms</p>
      <p style="color: #baffc9; margin-top: 4px;">Currency</p>
      <p style="color: #bae1ff; margin-top: 4px;">Items</p>
      <p style="color: #ffffba; margin-top: 4px;">Other / Misc.</p>
    </div>
    <br>
  </div>
  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #ffb3ba">Combat</h1><br>
    <p>DATA TO BE ADDED</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #ffdfba">Terms</h1><br>  
    <p>DATA TO BE ADDED</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #baffc9">Currency</h1><br>  
    <p>DATA TO BE ADDED</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #bae1ff">Items</h1><br>  
    <p>DATA TO BE ADDED</p>
  </div>

  <div id="content-box-listing">
    <h1 style="margin-top: 7.5px; color: #ffffba">Other / Misc.</h1><br>  
    <p>DATA TO BE ADDED</p>
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