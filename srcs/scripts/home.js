$(function(){fetch(urlracin+"/data/posts.json").then(response=>{return response.text()}).then(data=>{$('.latastPosts').html('');var suggPosts=[];var datajs=jQuery.parseJSON(data);while(suggPosts.length<6&&suggPosts.length<datajs.length){var elem=Math.floor(Math.random()*datajs.length);if(!existsOn(elem,suggPosts))
suggPosts.push(elem);}
$(suggPosts).each(function(k,v){if((k<3&&$(window).width()>768&&$(window).width()<=1200)||(k<4)&&($(window).width()<=768||$(window).width()>1200))
{$('<div>').addClass('col-sm-6 col-md-4 col-xl-3').append(getCard(datajs[v])).appendTo('.latastPosts');}
else
return;});});});