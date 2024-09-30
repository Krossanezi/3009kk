<template>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <header>    
        <nav>
            
            <div>
                <input type="checkbox" class="checkbox" id="chk">
                <label class="label" for="chk">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
                </label>

        </div>
    </nav>
   </header>
</head>
<body>
  <section class="banner">
        <div class="texto">
           <h1 class="titulo"></h1>
           <h2 class="sub_titulo"></h2>
          <div class="botoes">
    <figure>
    </figure>
    <br>
    <script src="tarefa.js"></script>

<section class="banner">
    <div class="texto">
       <h1 class="titulo"></h1>
       <div class="botoes">
         <a> <button class="overlay">Insira seu Prompt</button></a> 
       </div>
    </div>
    <br>
    <br>
    <div class="area" style="margin-top:80px;"> 
        <textarea rows="40" name="resposta" id="resposta"></textarea>
      </div>
      
                <input type="text" v-model="input_name" placeholder="Try Now">
                <input type="submit" value="Enviar" v-on:click="submitForm">
     
         
      </section>
      <br>
      <br>
             <a href="sobre.html"> <button class="overlay">Bem vindo ao seu template</button></a> 
             <br><br>
               <a href="parceiros.html"><button class="overlay"> Apresentamos um remember da pandemia</button> </a>
           </div>
        </div>
    </section>

<link rel="stylesheet" href="script.js">  
  <div class="hello">
    
  <br>
  <h2>Os estudos...</h2>
  <div class="container" style="width: 100%;">
    <img src="@/assets/gr.jpg" alt="imagemgr" width="320" height="260">
  </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <h2>O pessoal foi para a rua sem a permissão...</h2>
  <div class="high">
    <img src="@/assets/ygonamoura.jpg" alt="imagemygona" width="320" height="260">
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h2>O twitter parou com o rato frito...</h2>
  <div class="size">
    <img src="@/assets/aghata.jpg" alt="imagemaghata" width="580" height="">
  </div>
<br>
<br>
<br>
<br>
<video width="320" height="240" controls>
    <source src="@/assets/ygv.mp4" type="video/mp4">
  </video>
  <input name="pesquisaCep" id="pesquisaCep" type="number">
  <input type="button" name="Pesquisar" onclick="buscarEnderecoNoViaCEP()" value="Pesquisar">
<br>
<br>
<br>
<br>
<br>
<br>
<br>
  <h1>The best scale</h1>
  <br>
<table>
    <tr>
        <th>Nome</th>
        <th>Ano</th>
        <th>Meme</th> 
    </tr>
    <td>Aula Online</td>
        <td>2022</td>
        <td><div class="v" style="width: 100%;">
          <img src="@/assets/gr.jpg" alt="imagemgr" width="500" height="400">
        </div>
      </td>
    <tr>
        <td>Partiu ygonamoura</td>
        <td>2021</td>
        <td>  <div class="v">
          <img src="@/assets/ygonamoura.jpg" alt="imagemygona">
        </div>  </td>
      </tr>
          <td>Aghata Nunes borracheira</td>
          <td width="50" height="50">2020</td>
          <td>  <div class="v">
            <img src="@/assets/aghata.jpg" alt="imagemaghata">
          </div>   </td>

          <tr>
            <td>Uma diva Trabalhadora </td>
            <td>2021</td>
            <td>  
         <video width="320" height="240" controls>
              <source src="@/assets/trabalhadora.mp4" type="video/mp4" width="500" height="800">
            </video>
              </td>
    </tr>
</table>



</body>
</html>
    
</template>

<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color:hwb(153 12% 66%);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: hwb(153 12% 66%);
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

nav {
    background-color: #189d35;
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .logo a {
    text-decoration: none;
    color: white;
    font-size: 35px;
    font-weight: 600;
}

nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 10px;
}

nav li {
    margin-left: 7px;
}

nav li a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 5px;
    transition: 0.3s;
}

nav li a:hover {
    background-color: white;
    color: black;
}
.texto .botoes {
    margin-top: 1px;

}

.texto .botoes button {
    height: 90px;
    width: 170px;
    border-radius: 5px;
    border: 0;
    margin: 0 10px;
    font-size: 20px;
    font-weight: 500;
    padding: 0 10px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
}

.texto .botoes button.n-overlay {
    color: white;
    background: none;
    border: 2px solid white;
}

.texto .botoes button.n-overlay:hover {
    color: black;
    background-color: white;
}

.texto .botoes button.overlay {
    background: linear-gradient(rgba(30, 105, 0, 0.486),rgba(248, 0, 0, 0.493));
    color: white;
    animation: vibrar 0.5s ease-in-out infinite both;
}

@keyframes vibrar {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
nav{
    background-color: #189d35;
    padding: 10px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav .logo a{
    text-decoration: none;
    color: white    ;
    font-size: 35px;
    font-weight: 600;
}
nav ul{
    display: flex;
    list-style: none;
    padding: 10px;
}
nav li{
    margin-left: 7px;
}
nav li a{
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 5px;
    transition: 0.3s;
}
nav li a:hover{
    background-color: white;
    color: black;
}
.banner{
    height: 100vh;
    background: linear-gradient( rgba(0,0,0,0.281), rgba(0,0,0,0.308)),url('background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
}
.texto .titulo{
    color: #fff;
    font-size: 60px;
    font-weight: 600;
}
.texto .sub_titulo{
    color: #fff;
    font-size: 58px;
    font-weight: 600;
}
.texto .botoes{
    margin-top: 30px;
}
.texto .botoes button{
    height: 55px;
    width: 170px;
    border-radius: 5px;
    border: 0;
    margin: 0 10px;
    font-size: 20px;
    font-weight: 500;
    padding: 0 10px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
}
.texto .botoes button.n-overlay{
    color: white;
    background: none;
    border: 2px solid white;
}
.texto .botoes button.n-overlay:hover{
    color: black;
    background-color: white;
}
.texto .botoes button.overlay{
    background: burlywood;
    color: white;
    animation: vibrar 0.5s ease-in-out infinite both;
}
@keyframes vibrar {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
.testoap{
text-align: justify;
}
.link1{
    text-align: center;
    background: #DFDFDF;
    color: #FFF;
    text-decoration: none;
    font-weight: bold;
    border-width: 4px;
    border-style: solid;
    border-top-color: #DFDFDF;
    border-right-color: #DFDFDF;
    border-bottom-color: #DFDFDF;
    border-left-color: #DFDFDF;
    background: #DFDFDF;
    color: #FFF;
    font-weight: bold;
    border-color: #DFDFDF;
}
.link2{
    text-align: center;
    background: #DFDFDF;
    color: #FFF;
    text-decoration: none;
    font-weight: bold;
    border-width: 4px;
    border-style: solid;
    border-top-color: #DFDFDF;
    border-right-color: #DFDFDF;
    border-bottom-color: #DFDFDF;
    border-left-color: #DFDFDF;
    background: #DFDFDF;
    color: #FFF;
    font-weight: bold;
    border-color: #DFDFDF;
}

/*Botão Try now*/
#app form{
    margin-bottom: 0px;
}


</style>
