<template>
  <div >
      <h1 v-text='title'></h1>
      <input v-model="newItem" v-on:keyup.enter="addNew()">
      <ul>
          <li v-for="item in items"
          :class="{finished:item.isFinished,unfinished:!item.isFinished}"
          @click="toggleFinish(item)"
          >
              {{item.label}}
          </li>
      </ul>
      <p style="color:orange">here is {{childword}}</p>
      <cl-todolist msg="lese" v-on:child = 'listenToMe'></cl-todolist>
  </div>
</template>

<style>
    .finished{
        color:red;
        cursor: pointer;
    }
    .unfinished{
        color:blue;
        cursor: pointer;        
    }
</style>


<script>
import Store from '../../store/store.js'
// import ClTodolist from '../../components/todoList/todoList.vue'
import ClTodolist from '../../components/todoList/todoList.js'

    export default{
        name:'todoList',
        data(){
            return{
                title:"this is a todo list",
                items:Store.fetch(),
                newItem:'',
                childword:'',
            }
        },
        // components:{ClTodolist},
        watch:{
            items:{
                handler:function(items){
                    //console.log(val,oldVal)
                    Store.save(items);
               },
                deep:true
            }
        },
        methods:{
            toggleFinish(item){
                item.isFinished = !item.isFinished;
            },
            addNew(){
                if(this.newItem){
                    this.items.push({
                        label:this.newItem,
                        isFinished:false,
                    })
                }
                this.newItem = '' ;
            },
            listenToMe(cmsg){
                console.log(cmsg);
                this.childword = cmsg ;
            }
        },
    }
</script>