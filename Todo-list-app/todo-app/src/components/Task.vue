<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input
          type="text"
          placeholder="New Task"
          v-model="newTask"
          @keyup.enter="addTask"
        />
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <task-item
            v-for="(task, index) in tasks"
            :key="task.id"
            :task="task"
            @remove="removeTask(index)"
            @complete="completeTask(task)"
          ></task-item>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clearAll">Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incomplete }} </span>
      </div>
    </div>
  </div>
</template>

<script>
// Importing Task-item
import TaskItem from "./TaskItem.vue";

export default {
  name: "Task",
  components: {
    TaskItem,
  },
  data() {
    return {
      newTask: '',
      tasks: [
        { id: 1, title: "Learn Vue JS", completed: true },
        { id: 2, title: "Watch netflix", completed: true },
        { id: 3, title: "Go shopping", completed: false },
        { id: 4, title: "Learn guitar", completed: false },
        { id: 5, title: "Send email", completed: false },
      ],
    };
  },
  computed: {
    incomplete() {
      return this.tasks.filter(task => !task.completed).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          id: this.tasks.length + 1, // Generating a new id
          title: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    completeTask(task) {
      task.completed = !task.completed;
    },
    clearAll() {
      this.tasks = [];
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(task => !task.completed);
    }
  }
}
</script>

<style>
/* Add component-specific styles here */
</style>
