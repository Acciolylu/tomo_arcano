<template>
     <div class="duvidas">
      <h2>Dúvidas Frequentes</h2>
     
        <div class ="frequentes">
            <ul>
        <li><a href="#">Esqueci minha senha, e agora?</a></li>
        <li><a href="#">Como faço para adquirir uma versão para impressão da minha ficha?</a></li>
        <li><a href="#">Como faço para fazer upgrades nas minhas fichas de personagens?</a></li>
        <li><a href="#">É possível criar fichas de monstros usando o site?</a></li>
    </ul>
        </div>
   
     
    </div>
</template>

<script>

export default {
    name: "DuvidasF"
   
}
</script>


  <style scoped>

@font-face {
  font-family: 'Poppins';
  src: url(/public/fonte/PirataOne-Regular.ttf);}

  .duvidas {
    padding: 20px;
    text-align:center
  }
  
  .duvidas h2 {
    font-size: 24px;
    color: #800000;
    font-family: 'Poppins';
    
  }
  
  .frequentes ul {
    list-style-type: none;
    padding: 0;
   align-items: left;
  }
  
  .frequentes li {
    padding: 10px 0;
    font-size: 18px;
    align-items: left;
    
  }
  
  .frequentes li a {
    text-decoration: none;
    color: #333;
    align-items: left;
  }
  
  .frequentes li a:hover {
    text-decoration: underline;
  }

  
</style>
