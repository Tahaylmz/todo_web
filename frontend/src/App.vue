<script setup>
import { ref, reactive } from "vue";
import Todo from "./components/Todo/Todo.vue";


const newTodo = ref("");
const todos = ref([{id: 1, text: "Learn Vue"},
                    {id: 2, text: "Learn React"},
                    {id: 3, text: "Learn Angular"}
                  ]);
const addTodo = () => {
        if (newTodo.value !== "") {
          todos.value.push({id: todos.value.length + 1, text: newTodo.value});
          newTodo.value = "";
        } else {
          alert("Please enter a todo");
        }
      }
</script>     

<template>
  <div> 
    <Todo v-model:newTodo="newTodo" v-model:todos="todos" :addTodo="addTodo"/> 
    </div>
</template>