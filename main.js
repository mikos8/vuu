const App = {
  data() {
    return {
      counter: 0,
      title: "Счетчик",
    };
  },
};

const app = Vue.createApp(App);
// vue.createApp(App).mount('#app)

app.mount("#app"); // передаем css селектор корневого узла

const App2 = {
  data() {
    return {
      title: "Список заметок",
      placeholderStr: "Введите имя заметки",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue != "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    inputKeyPress(event) {
      if (event.key === "Enter") {
        this.addNewNote();
      }
    },
    delNote(id) {
      this.notes.splice(id, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
};

const app2 = Vue.createApp(App2);
app2.mount("#app2");
