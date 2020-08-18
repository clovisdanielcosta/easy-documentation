function startBackup() {

var fs = require('fs');
var readline = require('readline');
var resp = "";
var respBkp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Confirma o processamento de nova documentação? (S/N): ", function(answer) {
    resp = answer;
    
    if (resp === 'S') {
    
                leitor.question("\nDeseja efetuar o backup da última documentação? (S/N): ", function(answerBkp) {
                    respBkp = answerBkp;
            
            if (respBkp === 'S') {

                //Verifica se o arquivo existe
                fs.appendFile('documentation.md', '', function (err) {
                    if (err) throw err;
                });

                //Fazendo backup da última documentação.
                fs.copyFile('documentation.md', './backup/documentation-bkp.md', (err) => {
                    if (err) throw err;
                    console.log('Backup fetuado com sucesso!');
                    console.log('Caminho: ./backup/documentation-bkp.md');
                    });
                
                leitor.close();
            } else {
                console.log('Operação de backup cancelada.');
                    leitor.close();
            }
            });

        leitor.close();

    } else {
    console.log('Processamento de nova documentação cancelado.');
        leitor.close();
    }
});

}        

startBackup();

