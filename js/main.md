 <h1 align="center">:small_red_triangle_down: Proffy - Documentation</h1>
<h2 align="center">Curso Python e Django - Desenvolvimento Web e Banco de Dados</h3>
<h3 align="center">

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>
 
 
<p align="center">
  <a href="#openApp()">openApp()</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#openLogo()">openLogo()</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#appendHTML()">appendHTML()</a>
</p> 


## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
Função para isto e aquilo...

```Javascript

function openApp(){
  openLogo();
  setTimeout( () => {
    hideAllSections();
    appendHTML();
    showSection(11);
    }, 4000)
}

```

## :small_orange_diamond: openLogo()
### <b>Descrição:</b>
Função para isto e aquilo...

```Javascript

function openLogo(){
  var wrapper = document.createElement("div");
  wrapper.innerHTML = '\
  <link rel="stylesheet" href="css/landing.css">\
  <section id="a_home" class="home">\
    <div id="page-landing">\
      <div id="page-landing-container" className="container">\
        <div className="logo-container">\
          <img src="./img/images/p.svg" alt="AberturaApp"/>\
        </div>\
      </div>\
    </div>\
  </section>';
    document.body.appendChild(wrapper);
}

```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>

``` Javascript

function appendHTML() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = '\
        <link rel="stylesheet" href="css/landing.css">\
        <section id="a_landing">\
        <div id="page-landing">\
            <div id="page-landing-container" className="container">\
                <div className="logo-container">\
                    <img src="./img/images/logo.svg" alt="Proffy"/>\
                    <h2>Sua plataforma de estudos online.</h2>\
                </div>\
                <img \
                    src="./img/images/landing.svg" \
                    alt="Plataforma de estudos" \
                    className="hero-image"\
                />\
                <div className="buttons-container">\
                    <a href="" className="study">\
                        <img src="./img/images/icons/study.svg" alt="Estudar"/>\
                        Estudar\
                    </a>\
                    \
                    <a href="" className="give-classes">\
                    <button onclick="openFullscreen()">\
                    <img src="./img/images/icons/give-classes.svg" alt="Dar aulas"/>\
                        Dar aulas\
                    </a>\
                </div>\
\
                <span className="total-conections">\
                    Total de 200 conexões já realizadas. \
                        <img \
                            src="./img/images/icons/purple-heart.svg" \
                            alt="Coração roxo"\
                        />\
                </span>\
\
            </div>\
        </div>\
    </section>';
        document.body.appendChild(wrapper);
}

```

## :small_orange_diamond: appendHTML()

### <b>Descrição:</b>
```Javascript

function routeTeste(){
  $("#a_landing").hide();
  $("#a_input").show();
}

```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
```Javascript

function testInput() {
  $("#a_input").hide();
  $("#a_landing").show();
}

```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
Função para exibir as seções

```Javascript

function hideAllSections() {
  $('section').hide();
  $("#a_home").show();
}

```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
Função para exibir as seções

```Javascript

function showSection(a_section) {

  switch (a_section) {
      case 1:
        a_section = "#a_home";
          break;
      case 2:
        a_section = "#a_input";
          break;
      case 11:
        a_section = "#a_landing";
          break;
      default:
        a_section = "#a_home";
          break;
  }

//  if (a_section === 2) {
  //  a_section = "#a_linux";
  //}
    $('section').hide();
    $(a_section).show();

}

```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
Função para recolher o menu quando a opção for selecionada

```Javascript


$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
  
  // Função para recolher o menu quando clicar na página sem escolher nenhuma opção
  $(document).on('click', function(event){
    var $clickedOn = $(event.target),
    $collapsableItems = $('.collapse'),
    isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
    isLink = ($clickedOn.closest('#navToggle').length == 1),
    isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    
    if( (!isToggleButton && isLink) || isOutsideNavbar ) {
      $collapsableItems.each(function(){
        $(this).collapse('hide');
      });
    }
  });
  
  // Função para recolher o menu quando clicar na página sem escolher nenhuma opção
  $(document).on('click', function(event){
    var $clickedOn = $(event.target),
    $collapsableItems = $('.collapse'),
    isToggleButton = ($clickedOn.closest('.dropdownMenuButton').length == 1),
    isLink = ($clickedOn.closest('#dropdownMenuButton').length == 1),
    isOutsideNavbar = ($clickedOn.parents('.btn').length == 0);
    
    if( (!isToggleButton && isLink) || isOutsideNavbar ) {
      $collapsableItems.each(function(){
        $(this).collapse('hide');
      });
    }
  });


```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
Get the documentElement (<html>) to display the page in fullscreen

```Javascript

var elem = document.documentElement;

 View in fullscreen 
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {  Firefox 
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {  Chrome, Safari and Opera 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {  IE/Edge 
    elem.msRequestFullscreen();
  }
}

 Close fullscreen 
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {  Firefox 
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {  Chrome, Safari and Opera 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {  IE/Edge 
    document.msExitFullscreen();
  }
}

```

## :small_orange_diamond: appendHTML()
### <b>Descrição:</b>
Função para exibir as seções

```Javascript

function openNav4() {
  document.getElementById("mySidenav").style.width = "100%";
}
