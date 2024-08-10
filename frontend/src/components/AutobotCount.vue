<template>
    <div>
      <h3>Total Autobots: {{ autobots.length }}</h3>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        autobots: []
      };
    },
    async created() {
      const response = await axios.get('/autobots');
      this.autobots = response.data;
    }
  };
  </script>
  