<script>
  // @ts-nocheck
  import Footer from "../../../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Website Updates</div>
    <div id="content-topbar-info" style="font-size: 20px;">A page where updates are announced (Along with GitHub)</div>
  </div>
  <div id="content-box-listing"> <!-- July 8th -->
    <h1 style="margin-top: 7.5px;">Website Updates (Beta v0.1-13/2)</h1><h2 style="font-size: 20px; color: #efd1a1;">(July 8th, 2023) - Written by: <a href="https://github.com/KittenzExe" target="_blank" style="text-decoration: none; color: #b9141c;">Kittenzexe</a></h2><br>
    <h2>Part 2!</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">2 hours later and the second patch is dropped! And it's now 1am! Never the less, here is the update!</p>
    <br>
    <h2>New pages</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">All 5 star character pages have been started (more or less indexed into the website for later update). Database page now added! I am adding a Genshin to Star Rail Guide so that should be done soon-ish...</p>
    <br>
    <h2>Small fixes</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">Other than that, just a few small updates but nothing big. IDK when v0.1-14 will drop but tomorrow or the next day at the latest.</p>
    <br>
    <h2>That's all!</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">I have to sleep omg<br> ~bye! <br><img src="/images/character-art/Pompom/Pom-Pom_Sticker_01.webp" alt="pompom" style="height: 50px; margin-top: 2.5px;"></p>
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