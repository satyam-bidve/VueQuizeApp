<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const {quiez} = defineProps(['quiez'])

const router = useRouter()
const NavigateToQuize = ()=>{
   router.push(`/quiez/${quiez.id}`)
}

</script>

<template>
   <!-- <div v-for="quiez in quiezes" :key="quiez.id" class="card">
         <img :src="quiez.img" alt="not found">
      <div class="card-text">
         <h2>{{ quiez.name }}</h2>
         <p>{{ quiez.questions.length }} Questions</p>
      </div>
   </div> -->
   <div class="card" @click="NavigateToQuize">
         <img :src="quiez.img" alt="not found">
      <div class="card-text">
         <h2>{{ quiez.name }}</h2>
         <p>{{ quiez.questions.length }} Questions</p>
      </div>
   </div>
</template>

<style>
     .card{
          width: 310px;
          overflow: hidden;
          border-radius: 2%;
          box-shadow: 1px 1px 10px □ rgba(0,0,0,0.1);
          margin-bottom: 35px;
          margin-right: 20px;
          cursor: pointer;}        


      .card img {
          width: 100%;
          height: 190px;
          margin: 0}
      .card card-text{
         padding: 0 5px;
      }

      .card card-text h2{
        font-weight: bold;
      }

</style>