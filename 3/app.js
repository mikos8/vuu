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
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
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
  },
}).mount("#app");
