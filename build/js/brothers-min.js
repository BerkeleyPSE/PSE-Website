$(document).ready(function(){let s=[["Cathy An","miles_yun.png"],["Cathy An","miles_yun.png"],["George An","miles_yun.png"],["Cathy An","miles_yun.png"],["Cathy An","miles_yun.png"],["Cathy An","miles_yun.png"],["George An","miles_yun.png"],["Cathy An","miles_yun.png"]],n="";for(let e=0;e<s.length;e+=4){let l=s.slice(e,e+4);n+='<div class="d-inline-flex flex-row flex-wrap"><span class="flex-fill frame"><img src="./assets/'+l[0][1]+'"><p>'+l[0][0]+'</p></span><span class="flex-fill frame"><img src="./assets/'+l[1][1]+'"><p>'+l[1][0]+'</p></span><span class="flex-fill frame"><img src="./assets/'+l[2][1]+'"><p>'+l[2][0]+'</p></span><span class="flex-fill frame"><img src="./assets/'+l[3][1]+'"><p>'+l[3][0]+"</p></span></div>"}console.log(n),$("#brothers-section").append(n)});