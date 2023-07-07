<script>
    import Footer from "../../structure/footer.svelte"
</script>

<div id="content-holder">
    <div id="content-image-wrap">
        <img src="/images/character-art/Luocha/Character_Luocha_Portrait.webp" alt="luocha" style="height: 375px;">
    </div>
    <div id="content-topbar">
      <div id="content-topbar-title">Luocha <img src="/images/icon/Icon_5_Stars.webp" alt="5 star" height="35px"> <img src="/images/elements/Element_Imaginary.webp" alt="imaginary" height="35px"> <img src="/images/path/Path_The_Abundance.webp" alt="abundance" height="35px"></div>
      <div id="content-topbar-info" style="font-size: 20px;">"This coffin isn't mine. I was merely entrusted to take the body back to the Luofu."</div>
    </div>
    <div id="content-box-main1">
        <h3 style="margin-bottom: -5px; padding-bottom: 5px; padding-top: -0px; margin-top: -5px;">DATA TO BE ADDED<br><br></h3>
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
        overflow: hidden;
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
        top: 80px;
        left: 15px;
        bottom: 0;
        position: absolute;
        overflow: hidden;
        font-family: DIN;
        font-size: 35px;
        font-weight: bold;
        color: #efd1a1;
    }
    #content-image-wrap {
        width: flex;
        height: 700px;
        margin-top: 100px;
        margin-left: 10px;
        padding-top: 5%;
        align-items: center;
        overflow: hidden;
        position: absolute;
    }

    #content-box-main1 {
        width: 65%;
        height: 75%;
        margin-left: 500px;
        padding: 10px;
        top: 20px;
        left: -10px;
        bottom: 10px;
        position: relative;
        overflow: hidden;
        background-color: #43454e;
        border-width: 5px;
        border-style: solid;
        border-color: #efd1a1;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        font-family: DIN;
        font-size: 20px;
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