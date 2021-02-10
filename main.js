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
    /*inputChange(event) {
      this.inputValue = event.target.value;
    },*/
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
    doubleCount() {
      return this.notes.length * 2;
    },
    delNote(id) {
      this.notes.splice(id, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    changeColor() {
      if (this.inputValue.length < 3 || this.inputValue.length == 3) {
        return "green";
      } else if (this.inputValue.length > 3 && this.inputValue.length < 7) {
        return "grey";
      } else if (this.inputValue.length > 6 && this.inputValue.length < 9) {
        return "orange";
      } else {
        return "red";
      }
    },
    fontSizeChange() {
      if (this.inputValue.length > 9) {
        return "30px";
      } else if (this.inputValue.length > 8) {
        return "28px";
      } else if (this.inputValue.length > 7) {
        return "26px";
      } else if (this.inputValue.length > 6) {
        return "24px";
      } else if (this.inputValue.length > 5) {
        return "22px";
      } else if (this.inputValue.length > 4) {
        return "20px";
      } else if (this.inputValue.length > 3) {
        return "18px";
      } else if (this.inputValue.length > 2) {
        return "16px";
      } else if (this.inputValue.length > 1) {
        return "14px";
      } else {
        return "12px";
      }
    },
  },
  computed: {
    doubleCountComputed() {
      console.log("computed double count");
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      console.log("input value change");
      if (value.length > 10) {
        //this.inputValue = "";
        this.addNewNote();
      }
    },
  },
};

const app2 = Vue.createApp(App2);
app2.mount("#app2");
