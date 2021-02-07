const App = {
    data(){
        return {
            counter: 0,
            title:'Счетчик'
        }
    }
};

const app = Vue.createApp(App);
// vue.createApp(App).mount('#app) 

app.mount('#app'); // передаем css селектор корневого узла