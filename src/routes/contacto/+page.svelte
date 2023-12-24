<script>
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/fab/fab.js';
import '@material/web/ripple/ripple.js';
import '@material/web/divider/divider.js';
import '@material/web/elevation/elevation.js';


</script>

<div class='material'>
<label>
<a href = "mailto:antoine@pataldo.com">
<md-filled-button>Email</md-filled-button></a>
<md-outlined-button>Back</md-outlined-button>
<md-filled-button>Next</md-filled-button>
<a href = "mailto:antoine@patraldo.com"><md-fab>EmailFAB</md-fab>

<md-checkbox checked></md-checkbox>
<md-ripple></md-ripple>
<md-divider></md-divider>
<md-elevation></md-elevation>
<md-focus-ring></md-focus-ring>
</label>

</div>


<div class='email'>
<md-focus-ring for="control"></md-focus-ring>
  <input id="control">
<h1 style="font-size:7vw;"><a href = "mailto:antoine@patraldo.com">Email</a></h1>
<md-ripple>what</md-ripple>
</div>
<div class="masto">
<h1 style="font-size:6vw;"><a rel="me" href="https://mastodonte.red/@antoine">Mastodonte Punto Red</a></h1>
</div>




<style>
@import url('https://fonts.googleapis.com/css2?family=Marmelad&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');


.material {
display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
border: 10px dotted black;
 background: black;
 background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
color: black;
}

a, a:hover, a:active, a:visited, a:focus {
color: black;
    text-decoration:none;
}

.email {
position: relative;
    --md-focus-ring-shape: 8px;
border: 10px dotted black;
 background: goldenrod;
 background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
color: black;
}

.email a:hover {
color: green;
}

.masto {
 border: 10px dotted black;
 background: lightblue;
 background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
color: blue;
}

.masto a:hover {
color: teal;
}


</style>


