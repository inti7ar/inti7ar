$(function(){var urlParams=new URLSearchParams(window.location.search);fetch(urlracin+"/data/posts.json").then(response=>{return response.text()}).then(data=>{$('.posts').addClass('container-xl m-auto').html('');if(urlParams.has('ctg')&&urlParams.get('ctg')=='videos')
loadPosts(data,false,true,true);else if(urlParams.has('ctg')&&urlParams.get('ctg')=='articles')
loadPosts(data,true,false,true);else
loadPosts(data,true,true,false);});});function loadPosts(data,articles,videos,loadAll)
{if(articles){$('<div class="ctg-head">').append('<span><i class="fa fa-newspaper ml-5"></i>مقالات</a>').append((!loadAll)?'<a href="/posts?ctg=articles">المزيد <i class="fa fa-arrow-circle-left"></i></a>':'').appendTo('.posts');$('<div class="articles row">').appendTo('.posts');}
if(videos){$('<div class="ctg-head">').append('<span><i class="fa fa-video ml-5"></i>فيديوهات</a>').append((!loadAll)?'<a href="/posts?ctg=videos">المزيد <i class="fa fa-arrow-circle-left"></i></a>':'').appendTo('.posts');$('<div class="videos row">').appendTo('.posts');}
$(jQuery.parseJSON(data)).each(function(key,post){if($('.'+post.ctg+'>*').length<4||loadAll)
{$('<div>').addClass('col-sm-6 col-md-4 col-xl-3').append(getCard(post)).appendTo('.'+post.ctg);}});}