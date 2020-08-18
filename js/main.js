/*
<h1>:small_red_triangle_down: ProffyJSa - Documentation</h1>
<h2>Write here some details of project if you wish.</h2>
<p>
</p>
*/

/*
## :small_orange_diamond: marcia()
fx1<a href='#&marcia&'>marcia()</a></br>
### <b>Descrição:ada</b>
```Javascript
*/
function marcia() {

}
/*
```
*/

/*
## :small_orange_diamond: testeFuncional()
fx1<a href='#&testeFuncional&'>testeFuncional()</a></br>
### <b>Descrição:Teste de função</b>
```Javascript
*/
function testeFuncional() {

}
/*
```
*/



/*
## :small_orange_diamond: clovis()
fx1<a href='#&clovis&'>clovis()</a></br>
### <b>Descrição:Função para testar função</b>
```Javascript
*/
function clovis() {

}
/*
```
*/


/*
## :small_orange_diamond: marcia()
fx1<a href='#&presskey&'>pressKey()</a></br>
### <b>Descrição:ada</b>
```Javascript
*/

function pressKey() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

  $('body').keydown(function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  
    if(e.which == 122) {
      window.requestFullscreen();
    } 
  });
}
/*
```
*/


function openApp() {
  window.openFullscreen();
  pressKey();
  openLogo();
  setTimeout( () => {
    hideAllSections();
    appendHTML();
    showSection(11);
    }, 4000)
}

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

/*
## :small_orange_diamond: ocm()
(1fx)<a href='#&ocm&'>ocm()</a></br>
### <b>Descrição:</b>
```Javascript
*/
function ocm() {
    //Do something
}
/*
```
*/

/*
## :small_orange_diamond: dodo()
(1fx)<a href='#&dodo&'>dodo()</a></br>
### <b>Descrição:</b>
```Javascript
*/
function dodo() {
  //Do something
}
/*
```
*/
function testBack(){
  $("#a_landing").hide();
  $("#a_input").show();
}

function testInput() {
  $("#a_input").hide();
  $("#a_landing").show();

}

function hideAllSections() {
  $('section').hide();
 // $("#a_home").show();
}

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

    $('section').hide();
    $(a_section).show();

}


var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function openNav4() {
  document.getElementById("mySidenav").style.width = "100%";
}
