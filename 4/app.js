const h = Vue.h; //global method

Vue.createApp({
  data() {
    return {
      title: "Template",
    };
  },
  methods: {
    changeTitle() {
      if (this.title === "Template") {
        this.title = "Changed this title";
      } else {
        this.title = "Template";
      }
    },
  },
  computed: {},
  //   template: `
  //     <div class="card center">
  //       <h1>{{title}}</h1>
  //       <button class="btn" @click="title='titleChahge'">edit</button>
  //     </div>
  // `,
  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [
        h("h1", {}, this.title),
        h(
          "button",
          {
            class: "btn",
            onClick: this.changeTitle,
          },
          "change",
        ),
      ],
    );
  },
}).mount("#app");
