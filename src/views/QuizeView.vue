<script setup>
import { ref, watch } from 'vue';
import card from '../components/card.vue'
import q from '../data/quizes.json'
const quiezes = ref(q)
const search = ref("")

// for searching the quiez need to check on each change in sate in search imput
watch(search, () => {
  quiezes.value = q.filter(quize => quize.name.toLowerCase().includes(search.value.toLowerCase()));
  console.log(quiezes.value);
});

</script>

<template>
  <div>
      <header>
        <h1>Quizes</h1>
        <input v-model.trim="search" type="text" placeholder="Search">
      </header>
 
       <div class="options-container">
        <card  v-for="quiez in quiezes" :key="quiez.id" :quiez="quiez" />
       </div>

    </div>
  </template>

  <style scoped>

   header{
        margin-bottom: 10px;
        margin-top: 30px;
        display: flex;
        align-items: center;
      }

      header H1{
        font-weight: bold;
        margin-right: 30PX;
      }

      header input{
        border: none;
        background-color: □ rgba(128,128,128,0.1);
        padding: 10px; 
        border-radius: 15px;
        border: solid black;
        box-shadow: 10PX;
      }
      .options-container {
        display: flex;
        flex-wrap:  wrap;
        margin-top: 40px;
      }
      /* card */
 
  </style>
