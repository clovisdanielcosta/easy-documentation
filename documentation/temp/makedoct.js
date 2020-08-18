
var fs = require('fs'); 
var myData = []; //Recebe o conteúdo de cada arquivo 
var myCollection = [];  //Armazena as linhas de todos os arquivos

//Lendo todos os arquivos existenstes na pasta files de forma síncrona
export function processFiles(callback){

    console.log('Preparando arquivos...');

    //Verifica se o arquivo existe
    fs.appendFile('docTemp.md', '0', function (err) {
        if (err) throw err;
    });
    //Deleta arquivo anterior para não duplicar conteúdo
    fs.unlink("docTemp.md", function (err) {
        if (err) throw err;
        console.log('Excluindo documentação anterior...');
        });


    fs.readdirSync('./selectedFiles').forEach(file => {
    
        console.log('Verificando os arquivos...');
        //Efetuando a leitura do arquivo
        function addDoc(callback) {
            fs.readFile('./selectedFiles/'+file,'utf8', function doneReading(err, fileContents) {
                myData = fileContents;
                callback();
            });
        }

        console.log('Registrando dados temporários...');
        //Registrando o conteúdo no arquivo
        function addMyData() {

            //Adiciona num novo arquivo
            fs.appendFile('docTemp.md', myData, function (err) {
                if (err) throw err;
            });
        }    

        //Chamando a função
        addDoc(addMyData);
    
    });
    callback();
}

//Colocando dentro do array para percorrer
function addDocument() {
    
    var funcName = []; //Armazena o nome da função para comparação
    var funcHeader = []; //Armazena os shortcurts das funções
    var lineFiles = []; //Armazena apenas linhas sem shortcurts
    var sameName = 0; //Verifica se função já existe na documentação

    setTimeout(function() {
        fs.readFile('docTemp.md/','utf8', function doneReading(err, fileContents) {
            myData = fileContents;    
            
            myCollection = myData
            .toString()
            .replace(/\/\*/gi, "")
            .replace(/\*\//gi, "")
            .split("\n")
            .map((dados) => dados);            
            
            console.log('Verificando shortcuts...');
            for (let i = 0; i < myCollection.length;i++){
                if (myCollection[i].startsWith('fx1')){
                    //Armazena os shortcurts das funções para troca
                    var funcTemp = myCollection[i]
                                        .toString() 
                                        .split('&')
                                        .map((dados) => dados);
                    
                    //Verifica se a função já foi para a lista
                    for (let j = 0; j < funcName.length; j++){
                        if (funcTemp[1] === funcName[j]){
                            sameName++;
                        }
                    }
                    
                    if (sameName === 0 ) {
                                funcName.push(funcTemp[1]);
                                funcHeader.push(`${funcTemp[0]}${funcTemp[1].toLowerCase()}${funcTemp[2]}`
                                          .toString()  
                                          .replace(/(fx1)/gi, "") 
                                          .replace(/&/gi, ""));

                    }
                    
                } else { //Armazena linhas sem shortcuts
                    lineFiles.push(myCollection[i]);
                }
                if (sameName !== 0) break;
            }
            console.log('Validando...');
            if (sameName === 0) {

                //Registrando shortcuts no ínício do arquivo documentation.md
                funcHeader.sort();
                for (i in funcHeader){
                    fs.appendFile('documentation.md', funcHeader[i], function (err) {
                        if (err) throw err;
                    });    
                }


                console.log('Quantidade de funções documentadas:');
                console.log(funcName.length);
                console.log('Shortcuts: \n');
                console.log(funcHeader);
                console.log('Doumentação processada com sucesso!');
                console.log('Veja arquivo "documentation.md".');
            } else {
                //Se já existe é porque há erro
                console.log(`\nErro! Shortcut: ${funcTemp[1]} - duplicado.\n`);
                console.log('Shortcut deve ser exclusivo. Ex.:\n');
                console.log('Função: processar() - Shortcut: &processar& .\n');
                console.log('Documentação não gerada. Verifique erro(s).');
            }    
            
        });
    }, 300);
    
}


//Rodando a rotina de documentação
processFiles(addDocument);