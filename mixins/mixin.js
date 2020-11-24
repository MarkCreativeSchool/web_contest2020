export default {
  data() {
    return {
      prefix: ""
    }
  },
  mounted() {
    console.log("mixin mounted", document.domain, document.URL)
    this.prefix = ""
    if (document.domain === "127.0.0.1") {
      this.prefix = "/dist"
    }
    if (document.domain === "contest.japias.jp") {
      this.prefix = "/tqj23/230005R"
    }
  }
}
