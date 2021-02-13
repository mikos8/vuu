Vue.createApp({
  data() {
    return {
      myHtml: "<h1>this is HTML code</h1><hr>",
      title: "Google Title",
      personFamily: {
        country: "Canada",
        city: "Toronto",
        Who: "My Family",
        Action: "Live Here",
      },
      items: [
        1
      ],
    };
  },
  methods: {
    changeTitle() {
      if (this.title == "Google Title") {
        this.title = "Yandex";
      } else {
        this.title = "Google Title";
      }
    },
    stopPropagation(event){
      event.stopPropagation()
    },
    addItem(){
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = ''
      console.log(this.$refs.myInput.value);

    }
  },
  computed:{
    eventItems(){
      return this.items.filter(i => i%2 === 0)
    }
  }
}).mount("#app");
