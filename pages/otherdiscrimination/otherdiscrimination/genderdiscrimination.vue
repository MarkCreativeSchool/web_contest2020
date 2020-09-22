<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    
    <h3 class="start">性差別</h3>
    <p class="two">
       性差別とは人が実力ではなく、その人の性で差別される事を指します。AAU (American Association of University Women)によると、米国のほとんどの州では賃金格差があると示しています。性差別の主な原因として、家庭内での教育、生物学的役割の違い、宗教、伝統的な社会構造などが挙げられます。性差別は現社会で起きている様々な問題に繋がっていきます。セクハラ・モラハラ問題や、ジェンダーと社会的役割に関する偏見などの問題が現在取り上げられています。
<img class="drawing4" src="~/assets/equality.jpg">
    </p>

    <h3 class="start">現代ニュース</h3>
        <div class="activity">
            <h6 class="program">大相撲・救命女性が降りた土俵に「大量の塩」「めちゃくちゃ失礼」と非難の声：2018年4月五日 (日本)</h6>
            <hr>
            <p class="campaign">２０１８年、４月４日、京都府舞鶴市での大相撲の春巡業で多々見良三市長が挨拶をしている間に意識不明になり、土俵上倒れてしまいました。その時、看護資格を取得していた女性が土俵上に上がり、緊急処置を行い、他に、二人の女性も助けるために土俵に上がろうとすると、女性は土俵から降りてくださいというアナウンスが繰り返し流れ、批判になっています。土俵には「女人禁制」と相撲界側は主張しましたが、場違いだと批判されました。その後、相撲界の八角理事長はアナウンスを不適切だと言い、謝罪した。また、その後、女性が救助し終わった所を降りたさい塩を巻かれたことが発覚した。このことに対し、インターネット上で大炎上となり、またもや相撲界は批判を受けた。この問題に対し、理事長はコメントをした物の、説明不足だと炎上になり、批判を受けた。</p>
            <br></br>
            <h6 class="program">2018年グラミー賞でジェンダーの不平等（アメリカ）</h6>
            <hr>
            <p class="campaign">2018年1月29日、2018年グラミー賞授賞式が行われました。しかし、グラミー賞は今年男性が優勢であり、男女平等に欠けていた。レコーディングアカデミーのニールポートナウ校長が候補者の不均衡について質問されたとき、彼は女性が指名されて賞を獲得するために「ステップアップ」する必要があるとコメントしました。このコメントは、一般の人々や音楽アーティストから激しい批判を受けました。 Halseyは次のようにコメントしています。「2017年には女性アーティストは音楽界にインパクトを残しました。しかし、候補者はピアと音楽に対する彼らの意見によって選ばれます。つまり、それは全産業が女性が支持することを期待する基準についての会話であることを意味します。」また、アネンバーグインクルージョンイニシアチブ（不平等に取り組むための研究ベースのソリューションを目指すイニシアチブ）は、「アーティストの22％、ライターの12％、プロデューサーの2％だけが女性である場合、女性は音楽をどのように「ステップアップ」するのですか？ 」さらに、「あなたのメンバーシップの構成はどのようなものであり、あなたはどのようにカウンターバイアスにステップアップしていますか？」と問い詰めました。その後、ニール・ポートナウは謝罪し、彼のコメントは文脈から外されたと主張した。</p>
            <br></br>  
        </div>

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
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
.two{
  font-family: "Noto Sans JP"; 
  width: 73%; 
  margin: 0 auto;
  padding-top: 20px; 
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
    width: 80%;
    margin: 0 auto;
    margin-top: 30px; 
    font-family: "Noto Sans JP"; 
}

.program{
    width: 95%;
    margin: 0 auto;
    font-size: 21px; 
    font-weight: bold; 
}


.campaign{
  width: 90%; 
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

</style>
