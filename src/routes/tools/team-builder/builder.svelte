<script>
    import Footer from "../../structure/footer.svelte"
    import Help from "../../structure/extras/helpneeded.svelte"
</script>

<div id="content-holder">
    <div id="content-topbar">
      <div id="content-topbar-title">Team Builder</div>
    </div>

    <Help/>

    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px;">Team Layouts</h1><br>
      <h2>Broken up into 5 categories:</h2>
      <div style="display: flex; justify-content: space-between; padding-left: 100px; padding-right: 100px;">
        <p style="color: #ffb3ba; margin-top: 4px;">Main DPS</p>
        <p style="color: #ffdfba; margin-top: 4px;">Sub DPS</p>
        <p style="color: #baffc9; margin-top: 4px;">Healer</p>
        <p style="color: #bae1ff; margin-top: 4px;">Shielder</p>
        <p style="color: #ffffba; margin-top: 4px;">Support</p>
      </div>
      <br>
    </div>
    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px; color: #ffb3ba">Main DPS Characters</h1><br>
    </div>
    <div id="content-grid-container" style="margin-top: -50px; margin-left: 50px;">
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Arlan</div>
        <a href="../development"><img src="/images/character-art/Arlan/Character_Arlan_Portrait.webp" id="content-grid-item-character" alt="Arlan" style="margin-left: -100px; margin-top: 10px; height: 320px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fivestar">Clara</div>
          <a href="../characters/clara"><img src="/images/character-art/Clara/Character_Clara_Portrait.webp" id="content-grid-item-character" alt="Clara" style="margin-left: -30px; margin-top: 10px; height: 300px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fourstar">Dan Heng</div>
          <a href="../development"><img src="/images/character-art/Danheng/Character_Danheng_Portrait.webp" id="content-grid-item-character" alt="DanHeng" style="margin-left: -150px; margin-top: -75px; height: 450px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Himeko</div>
        <a href="../characters/himeko"><img src="/images/character-art/Himeko/Character_Himeko_Portrait.webp" id="content-grid-item-character" alt="Himeko" style="margin-left: -230px; margin-top: -40px; height: 550px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Hook</div>
        <a href="../development"><img src="/images/character-art/Hook/Character_Hook_Portrait.webp" id="content-grid-item-character" alt="Hook" style="margin-left: -330px; margin-top: -60px; height: 550px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Jing Yuan</div>
        <a href="../characters/jingyuan"><img src="/images/character-art/Jingyuan/Character_Jing_Yuan_Portrait.webp" id="content-grid-item-character" alt="JingYuan" style="margin-left: -220px; margin-top: 10px; height: 400px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Seele</div>
        <a href="../characters/seele"><img src="/images/character-art/Seele/Character_Seele_Portrait.webp" id="content-grid-item-character" alt="Seele" style="margin-left: -200px; margin-top: -150px; height: 390px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Sushang</div>
        <a href="../development"><img src="/images/character-art/Sushang/Character_Sushang_Portrait.webp" id="content-grid-item-character" alt="Sushang" style="margin-left: -120px; margin-top: 10px; height: 380px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar" style="font-size: 15px; padding-top: 3px;">Trailblazer (P)</div> <!-- might need another way of listing this -->
        <a href="../development"><img src="/images/character-art/Trailblazer/Character_Trailblazer_29_Destruction_Portrait.webp" id="content-grid-item-character" alt="Trailblazer" style="margin-left: -30px; margin-top: 0px; height: 380px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Yanqing</div>
        <a href="../characters/yanqing"><img src="/images/character-art/Yanqing/Character_Yanqing_Portrait.webp" id="content-grid-item-character" alt="Yanqing" style="margin-left: -220px; margin-top: -30px; height: 440px;"></a><!-- update before out of beta -->
      </div>
    </div>

    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px; color: #ffdfba">Sub DPS Characters</h1><br>  
    </div>
    <div id="content-grid-container" style="margin-top: -50px; margin-left: 50px;">
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Herta</div>
        <a href="../development"><img src="/images/character-art/Herta/Character_Herta_Portrait.webp" id="content-grid-item-character" alt="Herta" style="margin-left: -30px; margin-top: 0px; height: 300px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Pela</div>
        <a href="../development"><img src="/images/character-art/Pela/Character_Pela_Portrait.webp" id="content-grid-item-character" alt="Pela" style="margin-left: -130px; margin-top: 20px; height: 400px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Qingque</div>
        <a href="../development"><img src="/images/character-art/Qingque/Character_Qingque_Portrait.webp" id="content-grid-item-character" alt="Qingque" style="margin-left: -110px; margin-top: -90px; height: 400px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Sampo</div>
        <a href="../development"><img src="/images/character-art/Sampo/Character_Sampo_Portrait.webp" id="content-grid-item-character" alt="Sampo" style="margin-left: -140px; margin-top: 10px; height: 400px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Serval</div>
        <a href="../development"><img src="/images/character-art/Serval/Character_Serval_Portrait.webp" id="content-grid-item-character" alt="Serval" style="margin-left: -110px; margin-top: -140px; height: 550px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Silver Wolf</div>
        <a href="../characters/silver-wolf"><img src="/images/character-art/SilverWolf/Character_Silver_Wolf_Portrait.webp" id="content-grid-item-character" alt="SilverWolf" style="margin-left: -150px; margin-top: -10px; height: 300px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Welt</div>
        <a href="../characters/welt"><img src="/images/character-art/Welt/Character_Welt_Portrait.webp" id="content-grid-item-character" alt="Welt" style="margin-left: -100px; margin-top: -60px; height: 440px;"></a><!-- update before out of beta -->
      </div>
    </div>

    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px; color: #baffc9">Healer Characters</h1><br>  
    </div>
    <div id="content-grid-container" style="margin-top: -50px; margin-left: 50px;">
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Bailu</div>
        <a href="../characters/bailu"><img src="/images/character-art/Bailu/Character_Bailu_Portrait.webp" id="content-grid-item-character" alt="Bailu" style="margin-left: -150px; margin-top: -30px; height: 250px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Luocha</div>
        <a href="../characters/luocha"><img src="/images/character-art/Luocha/Character_Luocha_Portrait.webp" id="content-grid-item-character" alt="JingYuan" style="margin-left: -160px; margin-top: 0px; height: 400px; width: flex;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Natasha</div>
        <a href="../development"><img src="/images/character-art/Natasha/Character_Natasha_Portrait.webp" id="content-grid-item-character" alt="Natasha" style="margin-left: -50px; margin-top: 20px; height: 400px;"></a><!-- update before out of beta -->
      </div>
    </div>

    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px; color: #bae1ff">Shielder Characters</h1><br>  
    </div>
    <div id="content-grid-container" style="margin-top: -50px; margin-left: 50px;">
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Gepard</div>
        <a href="../characters/gepard"><img src="/images/character-art/Gepard/Character_Gepard_Portrait.webp" id="content-grid-item-character" alt="Gepard" style="margin-left: -320px; margin-top: -245px; height: 650px;"></a><!-- update before out of beta -->
        </div>
        <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fourstar">March 7th</div>
          <a href="../characters/march-7th"><img src="/images/character-art/March7th/Character_March_7th_Portrait.webp" id="content-grid-item-character" alt="March7th" style="margin-left: -280px; margin-top: -60px; height: 500px;"></a><!-- update before out of beta -->
        </div>
        <div id="content-grid-item">
          <div id="content-grid-item-star-decor" class="fivestar" style="font-size: 15px; padding-top: 3px;">Trailblazer (F)</div>
          <a href="../development"><img src="/images/character-art/Trailblazer/Character_Trailblazer_29_Destruction_Portrait.webp" id="content-grid-item-character" alt="Trailblazer" style="margin-left: -30px; margin-top: 0px; height: 380px;"></a><!-- update before out of beta -->
        </div>
    </div>

    <div id="content-box-listing">
      <h1 style="margin-top: 7.5px; color: #ffffba">Support Characters</h1><br>  
    </div>
    <div id="content-grid-container" style="margin-top: -50px; margin-left: 50px;">
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Asta</div>
        <a href="/characters/asta"><img src="/images/character-art/Asta/Character_Asta_Portrait.webp" id="content-grid-item-character" alt="Asta" style="margin-left: -70px; margin-top: 10px; height: 400px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fivestar">Bronya</div>
        <a href="../characters/bronya"><img src="/images/character-art/Bronya/Character_Bronya_Portrait.webp" id="content-grid-item-character" alt="Bronya" style="margin-left: -220px; margin-top: -225px; height: 700px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Tingyun</div>
        <a href="../development"><img src="/images/character-art/Tingyun/Character_Tingyun_Portrait.webp" id="content-grid-item-character" alt="Tingyun" style="margin-left: -70px; margin-top: -10px; height: 400px;"></a><!-- update before out of beta -->
      </div>
      <div id="content-grid-item">
        <div id="content-grid-item-star-decor" class="fourstar">Yukong</div>
        <a href="../development"><img src="/images/character-art/Yukong/Character_Yukong_Portrait.webp" id="content-grid-item-character" alt="Yanqing" style="margin-left: -50px; margin-top: -60px; height: 580px; width: flex;"></a><!-- update before out of beta -->
      </div>
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

    #content-grid-container{
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px;
    height: auto;
    z-index: 2;
    margin-top: 10px;
    padding: 10px;
    }
    #content-grid-item {
    background-color: #43454e;
    padding: 0px;
    height: 200px;
    border-top-right-radius: 20px;
    margin: 10px;
    z-index: 1;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
    text-decoration: none;
    }
    #content-grid-item-star-decor {
        position: absolute;
        width: 130px;
        height: 25px;
        margin-top: 175px;
        font-family: DIN;
        font-size: 20px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        overflow: hidden;
    }
    .fivestar {
        background-color: #ffd070;
        overflow: hidden;
    }
    .fourstar {
        background-color: #af86ff;
        overflow: hidden;
    }
    #content-grid-item-character {
        overflow: hidden;
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