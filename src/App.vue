<template>
   
    <Barra :logo="logo_src" :alt="app_name"/>
    <router-view/>
    
    

</template>

<script>
import Barra from './components/Barra.vue'
export default {
  components:{
    Barra
  },
  data(){
    return{
      logo_src:"/imgs/logo.png",
      app_name:"Tomo Arcano"
    }
  }
}
</script>


<style>
@font-face {
  font-family: 'PirataOne';
  src: url(../public/fonte/PirataOne-Regular.ttf);
}
*{ 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PirataOne';
 
}
</style>
