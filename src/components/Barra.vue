<template>
     <div class="Barra">
        <router-link to="/" id="logo_url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
       
    <div class="nome">
        <h1>Tomo Arcano</h1>
    </div>
    
  
        
    <router-link to="/">Help</router-link> 
    <router-link to="/Perfil">Perfil</router-link>
     </div>
</template>

<script>


export default {
name: "Barra",
props:["logo","alt"]
}
</script>

<style scoped>
.Barra {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 2px solid #880000;
}

.Barra img {
  max-width: 50px;
  margin-right: 20px;
}
.Barra #logo_url{
    margin:auto;
    margin-left: 0%;
}

.nome {
  font-family: 'PirataOne';
  font-size: 18px;
  margin:0;
  text-align: left
}

.Barra a{
    color: #880000;
    text-decoration: none;
    margin:12px;
    transition: .5s;
}
.Barra a:hover{
    color: #000000;
}
</style>