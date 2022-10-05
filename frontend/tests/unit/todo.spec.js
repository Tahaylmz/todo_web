import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo/Todo.vue'

let wrapper;


describe('Todo.vue', () => {
	wrapper = shallowMount(Todo, {
		data() {
			return { newTodo: '', todos:[], addTodo: () => {
                if (newTodo.value !== "") {
                    todos.value.push({id: todos.value.length + 1, text: newTodo.value});
                    newTodo.value = "";
                } else {
                    alert("Please enter a todo");
                }
            } };


		},
	});

    
    it('should textbox is appear', () => {
		expect(wrapper.find('#text-input').exists())
	});
    it('should add button is appear', () => {
		expect(wrapper.find('#add-button').exists())
	});
    it('should list is appear', () => {
		expect(wrapper.find('#list').exists())
	});
})
