<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 他の差別</li>
         <li class="breadcrumb-item"> <nuxt-link to="/otherdiscrimination/otherdiscrimination/genderdiscrimination">性差別</nuxt-link></li>
     </ol>
    <h3 class="start">性差別</h3>
    <p class="two">
       性差別とは人が実力ではなく、<mark class="highlights"><b>その人の性で差別される事を指します</b></mark>。
       AAU (American Association of University Women)によると、米国のほとんどの州では賃金格差があると示しています。
       性差別の主な原因として、家庭内での教育、生物学的役割の違い、宗教、伝統的な社会構造などが挙げられます。
       <mark class="highlights"><b>性差別は現社会で起きている様々な問題に繋がっていきます</b></mark>。
       セクハラ・モラハラ問題や、ジェンダーと社会的役割に関する偏見などの問題が現在取り上げられています。
<img class="drawing4" src="~/assets/equality.jpg">
    </p>

    <h3 class="start">現代ニュース</h3>
        <div class="activity">
            <h6 class="program">大相撲・救命女性が降りた土俵に「大量の塩」「めちゃくちゃ失礼」と非難の声：2018年4月五日 (日本)</h6>
            <hr>
            <p class="campaign">２０１８年、４月４日、京都府舞鶴市での大相撲の春巡業で多々見良三市長が挨拶をしている間に意識不明になり、土俵上倒れてしまいました。
            その時、看護資格を取得していた女性が土俵上に上がり、緊急処置を行い、他に、二人の女性も助けるために土俵に上がろうとすると、女性は土俵から降りてくださいというアナウンスが繰り返し流れ、批判が広まった。
            土俵には<b>「女人禁制」</b>と相撲界側は主張しましたが、場違いだと批判された。
            その後、相撲界の八角理事長はアナウンスを不適切だと言い、謝罪した。
            また、その後、<mark class="highlights"><b>女性が救助し終わった所を降りたさい塩を巻かれたことが発覚した</b></mark>。
            このことに対し、インターネット上で大炎上となり、またもや相撲界は批判を受けた。
            この問題に対し、理事長はコメントをした物の、説明不足だと炎上になり、批判を受けた。</p>
            <br></br>
            <h6 class="program">2018年グラミー賞でジェンダーの不平等（アメリカ）</h6>
            <hr>
            <p class="campaign">2018年1月29日、2018年グラミー賞授賞式が行われた。
            しかし、グラミー賞はその年、男性が優勢であり、<mark class="highlights"><b>男女平等に欠けていた</b></mark>。
            レコーディングアカデミーのニールポートナウ校長が候補者の不均衡について質問されたとき、彼は女性が指名されて賞を獲得するために<b>「ステップアップ」</b>する必要があるとコメントした。
            このコメントは、一般の人々や音楽アーティストから激しい批判を受けました。 
            世界的歌手のHalseyは次のようにコメントしています。
           　<b>「2017年には女性アーティストは音楽界にインパクトを残しました。しかし、候補者はピアと音楽に対する彼らの意見によって選ばれます。つまり、それは全産業が女性が支持することを期待する基準についての会話であることを意味します。」また、アネンバーグインクルージョンイニシアチブ（不平等に取り組むための研究ベースのソリューションを目指すイニシアチブ）は、「アーティストの22％、ライターの12％、プロデューサーの2％だけが女性である場合、女性は音楽をどのように「ステップアップ」するのですか？ 」さらに、「あなたのメンバーシップの構成はどのようなものであり、あなたはどのようにカウンターバイアスにステップアップしていますか？」</b>と問い詰めました。
           その後、ニール・ポートナウは謝罪し、彼のコメントは文脈から外されたと主張した。</p>
            <br></br>  
        </div>

    </div> 
    <div class="nextback">
           <!-- <nuxt-link to="/otherdiscrimination"><img class="back" src="~/assets/modoru2.png"></nuxt-link>-->
            <nuxt-link to="/otherdiscrimination/otherdiscrimination/asiandiscrimination"><img class="next" src="~/assets/tugi.png"></nuxt-link>
        </div>
    
     <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  components: { Header, Footer },
  head() {
    return {
      title: "性差別-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "性差別を紹介しています。また、過去に起こった事件などを取り上げています。" }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 63%; 
  margin: 0 auto;
  margin-top: 10px; 
  font-size: 18px; 
}


.start{
  font-family: "Noto Sans JP"; 
  color: #ffffff;
  background-color: #000000;
  background-position: center center;
  width: 83%; 
  margin: 0 auto;
  font-size: 30px; 
  border-radius: 3px; 
  text-shadow: 0.5px 0.5px #f6d405;
  text-align: center; 
}

.activity{
    width: 75%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program{
    width: 85%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}
.campaign{
  width: 80%; 
  margin: 0 auto;
  font-size: 15px; 
}


.drawing4{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  height: 370px; 
  margin-bottom: 20px; 
  margin-top: 0px; 
}
.next{
    display: inline-block;
    float: right; 
    margin-left: auto;
    margin-right: 40px;
    width: 100px; 
}

.back{
    display: inline-block;
    margin-left: 40px;
    float: left; 
    margin-right: auto;
    width: 100px; 
}

.nextback{
    text-align: center; 
}


</style>
