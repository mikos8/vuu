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

const App2 = {
    data(){
        return {
            title: 'Note list',
            placeholderStr: 'Enter name list',
            inputValue:'',
            notes:['Note1']
        }
    },
    methods:{
        inputChange(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        inputKeyPress(event){
            if(event.key === 'Enter'){
                this.addNewNote()
            }
        },
        delNote(id){
            this.notes.splice(id,1)
        }
    }
}

const app2 = Vue.createApp(App2);
app2.mount('#app2')