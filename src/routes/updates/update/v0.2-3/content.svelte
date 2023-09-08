<script>
  // @ts-nocheck
  import Footer from "../../../structure/footer.svelte"
</script>

<div id="content-holder">
  <div id="content-topbar">
    <div id="content-topbar-title">Website Updates</div>
    <div id="content-topbar-info" style="font-size: 20px;">A page where updates are announced (Along with GitHub)</div>
  </div>
  <div id="content-box-listing"> <!-- September 9th -->
    <h1 style="margin-top: 7.5px;">Website Updates (Beta v0.2-3)</h1><h2 style="font-size: 20px; color: #efd1a1;">(September 9th, 2023) - Written by: <a href="https://github.com/KittenzExe" target="_blank" style="text-decoration: none; color: #b9141c;">Kittenzexe</a></h2><br>
    <h2>I return</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">So, I return. After some time, I am back. Honestly questioning the sites purpose since the official tools have been released. Might change it up and focus on one or two things and expand from there.</p>
    <h2>New content added</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">Content such as: <br>- 1.3 Update<br>- New characters<br>- Mobile improvements<br>- 1.3 Highlights Page added</p>
    <br>
    <h2>New Pages</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">- 1.3 Highlights page<br>- 1.3 Character 5* pages</p>
    <br>
    <h2>That's all!</h2>
    <p style="line-height: 20px; margin-top: -7.5px;">Will probably make another update discussing the website soon-ish (hopefully)<br> ~bye! <br><img src="/images/character-art/Pompom/Pom-Pom_New_Sticker_01.png" alt="pompom" style="height: 50px; margin-top: 2.5px;"></p>
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