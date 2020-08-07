var urlracin="https://inti7ar.github.io/srcs"; $(function(){if(navigator.cookieEnabled)
{if(halfmoon.readCookie('theme')==null)
halfmoon.createCookie('theme','auto',60);if(halfmoon.readCookie('darkModeOn')==null)
halfmoon.createCookie('darkModeOn','yes',60);}
else
{var cookieAlert=$('<span>').append($('<p>').text('لقد تعذر علينا الوصول إلى ملفات تعريف الإرتباط وهذا سيؤثر على تجربتك لموقعنا المرجو إعادة تفعيلها للحصول على أفضل تجربة'));toastAlert('ملاحظة',$(cookieAlert).html(),'',15,true);}
fetch(urlracin+"/header.html").then(response=>{return response.text()}).then(data=>{document.querySelector("header").innerHTML=data;$('#toggelTheme').on("click ",function(){themeChecker(halfmoon.readCookie('theme'),true);});themeChecker(halfmoon.readCookie('theme'),false);$('#toggle-sidebar-btn').click(function(){if(typeof($('.sidebar>.sidebar-menu').html())=='undefined')
loadSidebar();});});fetch(urlracin+"/footer.html").then(response=>{return response.text()}).then(data=>{document.querySelector("footer").innerHTML=data;var copyear=new Date().getFullYear();copyear=(copyear>=2020)?copyear:2020;$('footer .year').text(copyear);$('footer img.brand').attr('src',urlracin+'/images/inti7arGray.svg');$('#terms-of-use').click(function(){if(typeof($('#terms-of-service').html())=='undefined')
{fetch(urlracin+"/terms.html").then(response=>{return response.text()}).then(data=>{$('footer').append(data);halfmoon.toggleModal('terms-of-service')
$('#terms-of-service .close').click(function(){halfmoon.toggleModal('terms-of-service');});});}
else
halfmoon.toggleModal('terms-of-service');});$('#toggelCookies').click(function(){if(typeof($('#cookies').html())=='undefined')
{fetch(urlracin+"/cookies.html").then(response=>{return response.text()}).then(data=>{$('footer').append(data);halfmoon.toggleModal('cookies');$('#cookies .close').click(function(){halfmoon.toggleModal('cookies');});});}
else
halfmoon.toggleModal('cookies');});});});function loadSidebar(){fetch(urlracin+"/data/sidebar.json").then(response=>{return response.text()}).then(data=>{$('div.sidebar').html($('<div class="sidebar-menu">'));$(jQuery.parseJSON(data)).each(function(key,obj)
{$('<h5 class="sidebar-title">').append($('<i>').addClass('ml-10 fa fa-'+obj.icon)).append(obj.title).append($('<div class="sidebar-divider">')).appendTo('div.sidebar-menu');$(obj.children).each(function(k,child){var iconClss=(child.icon.isBrand)?'fab':'fa';var icon=$('<span class="sidebar-icon">').append($('<i>').attr({'class':iconClss+' fa-'+child.icon.src,'aria-hidden':'true'}));$('<a>').attr({'id':child.id,'class':'sidebar-link sidebar-link-with-icon','href':child.link.src,'target':child.link.target}).append(icon).append(child.title).appendTo('div.sidebar-menu')})
$('div.sidebar-menu').append($('<br>'))});});}
function themeChecker(theme,swtch){if($.inArray(theme,['dark','light','auto'])>-1)
{if(theme=='dark'&&swtch)
changeThemeTo('light');else if(theme=='light'&&swtch)
changeThemeTo('auto');else if(theme=='auto'&&swtch)
changeThemeTo('dark');else
changeThemeTo(theme);}
else
{halfmoon.createCookie('theme','auto',60);changeThemeTo('auto');}}
function changeThemeTo(theme){var isDark;if(navigator.cookieEnabled)
{halfmoon.createCookie('theme',theme,60);halfmoon.toggleDarkMode();switch(theme)
{case'auto':var time=new Date().getHours();if(time>=8&&time<20)
switchTheme('light');else
switchTheme('dark');$('#toggelTheme').attr('class','fa fa-moon btn btn-icon');break;case'dark':switchTheme('dark');$('#toggelTheme').attr('class','fa fa-sun btn btn-icon');break;case'light':switchTheme('light');$('#toggelTheme').attr('class','fa fa-adjust btn btn-icon');break;default:return;}
isDark=(halfmoon.readCookie("darkModeOn")=="yes");}
else
{$('#toggelTheme').remove();isDark=false;}
var img=isDark?"inti7arWhite.svg":"inti7arBlack.svg";$('.navbar-brand > img').attr('src',urlracin+'/images/'+img);}
function switchTheme(mode){if(mode=='dark'&&halfmoon.readCookie("darkModeOn")=="no")
halfmoon.toggleDarkMode();if(mode=='light'&&halfmoon.readCookie("darkModeOn")=="yes")
halfmoon.toggleDarkMode();}
function toastAlert(alertTitle,alertContent,type,time,close){halfmoon.initStickyAlert({content:alertContent,title:alertTitle,alertType:(type!="")?"alert-"+type:"",fillType:"filled",hasDismissButton:close,timeShown:(time*1000)})}
function getCard(post){var isvideo=(post.ctg=='videos')?'<i class="fa fa-play-circle"></i>':'';return($('<a class="card post-card">').attr('href',post.link).append($('<span class="post-img">').append(isvideo).css('background','url("'+post.img+'")')).append($('<div class="content">').append($('<h2 class="content-title">').text(post.title))));}
function existsOn(elem,table){var exist=false;$(table).each(function(k,v){if(v==elem)
exist=true;});return(exist);}
function getSuggPosts(ctg){fetch(urlracin+"/data/posts.json").then(response=>{return response.text()}).then(data=>{$('#sugg'+ctg).html('');$('<h4 class="col-sm-12">').append($('<i class="fa fa-'+((ctg=="videos")?"backward":"book-reader")+' ml-10">')).append(((ctg=='videos')?'شاهد':'إقرأ')+' أيضا').appendTo('#sugg'+ctg);var datajs=[];$(jQuery.parseJSON(data)).each(function(k,p){if(p.ctg==ctg&&($('div.desc').attr('id')!=p.id))
datajs.push(p);});var suggPosts=[];while(suggPosts.length<6&&suggPosts.length<datajs.length){var elem=Math.floor(Math.random()*datajs.length);if(!existsOn(elem,suggPosts))
suggPosts.push(elem);}
$(suggPosts).each(function(k,v){$('#sugg'+ctg).append($('<div class="col-sm-6 col-md-12 col-lg-6">').append(getCard(datajs[v])));});});}
