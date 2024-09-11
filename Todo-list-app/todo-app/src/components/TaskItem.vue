<template>
    <li>
        <button @click="$emit('complete')" :class="className"><i  class="far fa-circle"></i> {{ task.title }}</button>
        <button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
    </li>
</template>

<script>
export default {
    name: 'TaskItem',
    props: ['task'],
    computed: {
        className() {
            return {
                'toggle': true,
                'toggle-completed': this.task.completed
            };
        }
    }
}
</script>
