const app = Vue.createApp({
	data(){
		return{
			msg: "你好",
			name: "張三",
		};
	},
    computed:{
        greeting(){
            return `${this.msg} ${this.name}`;
        },
    },
    methods:{
        changeName(name){
            this.name = name;
        },
    },
});
const vm = app.mount("#app");