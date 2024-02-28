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
