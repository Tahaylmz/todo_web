import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo/Todo.vue'

let wrapper;

beforeEach(() => {
	  wrapper = shallowMount(Todo);
});

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

	it('renders a todo', () => {
		expect(wrapper.find('h1').text()).to.equal('Todo List');
	});

	it('renders a button', () => {
		expect(wrapper.find('button').text()).to.equal('Add');
	});

	it('renders a input', () => {
		expect(wrapper.find('input').text()).to.equal('');
	});

	it('renders a list', () => {
		expect(wrapper.find('ul').text()).to.equal('');
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
