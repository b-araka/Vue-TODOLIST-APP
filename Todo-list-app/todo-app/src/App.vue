<template>
  <div id="app">
    
    <nav>
      <router-link to="/" class="nav-item1">Todos List App</router-link>
      <router-link to= "/about" class="nav-item">About</router-link>
      <router-link to="/task" class="nav-item">Tasks Record</router-link>
    </nav>
    <router-view />
    <footer class="footer">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>

</style>
