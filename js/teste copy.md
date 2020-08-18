
<h1>:small_red_triangle_down: Proffy - Documentation</h1>
<h2>Detalhes: ....</h2>
<h3> 
<p>
<a href='#openapp'>openApp</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='#openlogo'>openLogo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#appendhtml">appendHTML</a>
</p>
</h3>

## openApp

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

## == openLogo() ===============================

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

## appendHTML()

### <b>Descrição:</b>
```Javascript

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
