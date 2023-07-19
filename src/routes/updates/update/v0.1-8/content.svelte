<script>
  // @ts-nocheck
  import Footer from "../../../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Website Updates</div>
    <div id="content-topbar-info" style="font-size: 20px;">A page where updates are announced (Along with GitHub)</div>
  </div>
  <div id="content-box-listing"> <!-- June 18th -->
      <h1 style="margin-top: 7.5px;">Website Updates (Beta v0.1-8)</h1><h2 style="font-size: 20px; color: #efd1a1;">(June 18th, 2023) - Written by: <a href="https://github.com/KittenzExe" target="_blank" style="text-decoration: none; color: #b9141c;">Kittenzexe</a></h2><br>
      <h2>Now moved to svelte!</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">It's now 12:15am. 46 minutes ago, the merge happened. With a few bugs that need to be fixed, the website *should be back to what it was pre-svelte. Besides that, here are a few new things that have come from the move to svelte!</p>
      <p style="line-height: 20px; margin-top: -7.5px;">- New pages such as this page (/updates) and a development page (/development) <br> - Faster speeds! Svelte is way faster than base HTML and I will slowly improve my svelte skills as I continue to learn it! <br> - Modularity between pages such as the sidebar and footer, now cutting back the clutter from each page. <br> - Back to one page. Svelte will be built and pushed while un-built will stay unpublished. (Beta page might come soon)</p>
      <br>
      <h2>Future development</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">I will try and keep pushing out content until all the content has been covered. (Characters, Items, Locations ect.) For now, me being the only one, I won't publicly release the website until at least all characters and items are done (with some small info on locations). Although the GitHub repo is public and people can contribute to the website, I won't advertise or that stuff until I think it is ready. Even things like this updates page. It is a way for me to update the website and inform people about it who may join later down the line. <br>(if you see this, hi!)</p>
      <br>
      <h2>That's all!</h2>
      <p style="line-height: 20px; margin-top: -7.5px;">It's now 12:34am. Going to fix a few things and do the home page but after that, I am going stright to bed. <br> ~bye! <br><img src="/images/character-art/Pompom/Pom-Pom_New_Sticker_01.png" alt="pompom" style="height: 50px; margin-top: 2.5px;"></p>
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="button" onclick="history.back()">Go Back</button>
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
  #content-topbar-info {
      width: 100%;
      height: 80px;
      padding: 0;
      top: 90px;
      left: 15px;
      bottom: 0;
      position: absolute;
      overflow: hidden;
      font-family: DIN;
      font-size: 35px;
      font-weight: bold;
      color: #efd1a1;
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
        position: relative;
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