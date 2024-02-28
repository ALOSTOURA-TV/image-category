* {
margin: 0;
}		

body{
background: #111;
}
		
.img1 img {
width: 100%;
height: 230px;
}

.portada {
position: absolute;
top: 0;
width:81%;
height: 170px;
display: flex;
padding: 30px;

}

.portada img {
width: 110px;
height: 160px;
margin-top: 20px;
border-radius: 10px;
box-shadow: 0px 0px 5px 2px rgba(255,255,255,0.32);
}

.portada .info {
margin: 25px 10px;

}

h3 {
color: #ffb200;
}
h {
color: #00FDFF;
}
.info p {
color: #fbd034;
}

.cuerpo {
margin: 0px 10px;
}

a button{
width: 100%;
font-size: 20px;
font-weight: 666;
color: black;
background: #ffffff;
padding: 10px;
border-radius: 10px;
border: 0;
}

.cuerpo .fondo{
width: 100%;
height: 60px;
padding: 1px 0;
margin-top: 10px;
background: linear-gradient(to right, transparent, #ffb200, transparent);
}

.btns{
display: flex;
width: 100%;
height:60px;
background: #000;
margin: 0px;
align-items: center;
justify-content: space-between;
}

.btns a {
display: grid;
text-align: center;
color: #fff;
padding: 10px;

text-decoration: none;
}

.btns a i{color: #fff;}

h2 {
color: white;
margin: 10px;
}

p {
color: #fff 
}






<style>
* {box-sizing: border-box;}
body{margin:0;background-color:#000;}
:root{
--plyr-color-main:#222;
--plyr-video-control-color:#007654/*#ff0030*/;}
.plyr--video{background:#fff;height:100%;overflow: hidden;}
.column{grid-template-columns: repeat(4,minmax(0,1fr));}
.grid{display:grid;gap:0.25rem;padding:0.25rem;}
.relative{position:relative;}
img,svg, video{max-width:100%;height:165px;border-radius:10px;}
.w-full{display:block;width:100%;}
@media (orientation:landscape){
.column{grid-template-columns:repeat(5,minmax(0,1fr));}}
</style>


<style>
.gallery{display: flex;flex-wrap: wrap;margin-top: 0px;}.gallery .image{
  width: calc(100% / 8);  padding: 3px;}.gallery .image span{display: flex; width: 100%;  overflow: hidden;}
.gallery .image img{width: 100%;vertical-align: middle;transition: all 0.3s ease;  cursor: pointer;}
.gallery .image:hover img{ transform: scale(1.1);}
.gallery .image.hide{ display: none;}.gallery .image.show{
  animation: animate 0.4s ease;}@keyframes animate {0%{
    transform: scale(0.5);  }  100%{  transform: scale(1); }}
@media (max-width: 1000px) {.gallery .image{
    width: calc(100% / 100%);  }}@media (min-width: 1360px){
  .gallery {margin-left: -0%;margin-right: -0%;}}
@media (max-width: 800px) {.gallery .image{
    width: calc(50% / 4);}}@media (max-width: 700px) {
  .wrapper nav .items{    max-width: 1000px;}  nav .items span{
    padding: 7px 15px;  }}@media (max-width: 600px) {
  .wrapper{    margin: 0px auto;  }  .wrapper nav .items{
    overflow: auto;  }  nav .items span{ margin: 0px;  }
    .gallery .image{   width: calc(100% / 4);    }}
<style>h1 {    color: red;    font-size: 25px;    font-family: system-ui;}
h2 a {font-family: system-ui;    background: #000000;    padding: 4px;    border-radius: 15px;    border: 1px solid white;    color: red;    font-size: 18px;    position: absolute;    right: 5px;    top: 15px;}
article#post-1208 .item movies {    max-height: 135px;    overflow: hidden;}
img {    width: 100%;    height: 165px;}
i.fas.fa-star {    position: relative;    top: -2px;    color: rgb(255, 0, 0);    font-size: 8px;}
.rating {    position: relative;    border-radius: 7px;    width: 25px;    text-align: right;    height: 7px;    font-family: sans-serif;    left: 70%;    top: -180px;    padding: 3px 15px 9px 5px;    align-self: center;    background: rgba(0, 0, 0, 0.76);    font-size: 10px;}
.data {    max-width: 134px;    height: 34px;    background: linear-gradient( 180deg , rgb(0 0 0 / 50%), rgb(0 10 33));    position: relative;    top: -58px;    overflow: hidden;}
a {    position: relative;    font-family: m,Verdana;    color: white;    font-size: 15px;    text-decoration: none;    top: 0px;}
span {    position: relative;    color: #03c57e;    font-family: system-ui;    font-size: 15px;    top: -0px;}
div.scrollmenu article {width:110px;height: 180px;display: inline-block;color: white;text-align: center;text-decoration: none;overflow: hidden;border:1px solid #563899;border-radius:5px;}
