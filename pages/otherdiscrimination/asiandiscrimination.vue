<template>
  <div class="full">
  <Header></Header>
   <div class="info">
    <ol class="bread">
         <li class="breadcrumb-item"> <nuxt-link to="/">ホーム</nuxt-link></li>
         <li class="breadcrumb-item"> 他の差別</li>
         <li class="breadcrumb-item"> <nuxt-link to="/otherdiscrimination/asiandiscrimination">アジア人差別</nuxt-link></li>
     </ol>
     <br>
    <h3 class="start_asia"><span class="under">アジア人差別</span></h3>
    <p class="two_asia">
        アジア人差別は人種差別の一種であり、ヨーロッパやアメリカなどを中心でみられる差別です。黒人差別同様、人種をきっかけに<mark class="highlights"><b>他人に屈辱されたり、見下されたる扱いを受けるなどのことが起きています</b></mark>。黒人差別よりは今現在メディアなどで取り上げられている差別ではないが、昔からある問題です。
<br>
    </p>
<br>
    <h3 class="start_asia"><span class="under">アジア人差別に関する最近のニュース</span></h3>

            <div class="activity">
            <h6 class="program_asia">コロナ禍での差別（世界）</h6>
            <hr>
            <br>
            <p class="campaign_asia">コロナによる差別：過去数ヶ月のコロナウイルス（COVID-19）の増加と蔓延により、アジアの民族グループに対する外国人恐怖症や人種差別のケースは非常に増加しています。
            米国、ドイツ、オーストラリア、エジプトなど、アジア以外のいくつかの国で差別が発生しています。非アジア人が抱く恐怖と不安は、ウイルスを<b>「持ち込み」、「拡散」</b>することに対するアジア人の批判を引き起こしているようです。
            さらに、彼らは<mark class="highlights"><b>アジア人がコロナウイルスであると主張しています</b></mark>。ヨーロッパ、アフリカ、北米など、アジア以外の国々でアジア人が差別されているとの報告がいくつかあります。
                                <br>例：3月19日から4月15日までの間に、アジア太平洋政策計画評議会と中国のアファーマティブアクション協会は、<b>1,497件</b>の差別があったと報告しています。
                                収集されたデータに基づいて、報告の60％以上が言葉によるいじめでした。
                                報告されたその他の行動には、<b>忌避、肉体的暴行、職場の差別、電車やタクシーなどの一部の交通機関による禁止</b>が含まれます。
                                </p>
            <br>
            <h6 class="program_asia">ハーバード大学におけるアジア系アメリカ人に対する人種的偏見（アメリカ）</h6>
            <hr>
            <br>
            <p class="campaign_asia">2018年10月、連邦裁判官は、米国のアイビーリーグ大学であるハーバード大学が<mark class="highlights"><b>アジア系アメリカ人の申請者を差別したという主張</b></mark>を却下しました。
            訴訟は、ハーバード大学がアジア系アメリカ人であれば受け入れられる人々の数に制限を設けたと主張した。
            SFFA（Students for Fair Admissions）は、ハーバード大学がアジア系アメリカ人の申請者に<b>20％</b>の制限を設けており、人種的バランスを取るための大学の努力が行き過ぎていると非難した。
            さらに、SFFAグループのエドワードブラムは、アジア系アメリカ人の申請者は他の申請者よりも高い成績を収めましたが、<mark class="highlights"><b>主観的な「個人的な」評価に基づいて受け入れられなかったと主張した</b></mark>。
            ハーバード大学はこれらの容疑を否定し、入学時の人種の使用は合法であり、申請者を受け入れる間は主観的な個人評価を行わなかったと主張しました。</p>
            <br>
        </div>


    </div>
    <div class="nextback">
            <nuxt-link to="/otherdiscrimination/genderdiscrimination"><img class="back" :src="`${prefix}/modoru2.png`"></nuxt-link>
            <nuxt-link to="/otherdiscrimination/sexualorientationdiscrimination"><img class="next" :src="`${prefix}/tugi.png`"></nuxt-link>
        </div>
     <Footer></Footer>
  </div>
</template>

<script>
import Mixin from "~/mixins/mixin";
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  name: "Index",
  mixins: [ Mixin ],
  components: { Header, Footer },
  head() {
    return {
      title: "アジア人差別-高校生による高校生のため黒人差別",
      meta: [
        { hid: "description", name: "description", content: "アジア人差別を紹介しています。また、過去に起こった事件などを取り上げています。" }
      ]
    }
  },
}　
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

/*.two{
  font-family: "Noto Sans JP";
  width: 63%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;
}*/

/*.start{
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
}*/
.two_asia{
  font-family: "Noto Sans JP";
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 18px;
  text-indent: 1em;
}

.start_asia{
    font-weight: bold;
    font-size: 30px;
    font-family: "Noto Sans JP";
    margin: 0 auto;
    width: 50%;
    color: black;
  }

.activity{
    width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    font-family: "Noto Sans JP";
}

.program_asia{
    width: 50%;
    margin: 0 auto;
    font-size: 21px;
    font-weight: bold;
}
.campaign_asia{
  width: 50%;
  margin: 0 auto;
  font-size: 15px;
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

.drawings{
    width: 300px;
    display: block;
  margin-left: auto;
  margin-right: auto;
}

hr{
  width: 50%;
  margin:0 auto;
}


</style>
