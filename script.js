// aqui nessa função defini para mostrar a página correspondente ao link clicado ta ligado truta HEHEH 
function showPage(pageId, displayMode = 'block') {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = displayMode;
}

// Nessa parte do codigo eu defini a troca de imagen ao fundo da caixa de senha para ficar mais lindo a pagina HEHEh
function changeBackground() {
    const backgrounds = ['fundo1.jpg', 'fundo2.jpeg', 'fundo3.jpeg', 'fundo4.jpeg' , 'fundo5.jpeg', 'fundo6.jpg', 'fundo7.jpg', 'fundo8.jpeg', 'fundo9.jpeg', 'fundo10.jpg', 'fundo11.jpg', 'fundo13.jpg', 'fundo14.jpg', 'fundo15.jpg', 'fundo16.jpg', 'fundo17.jpg', 'fundo18.jpg', 'fundo19.jpg', 'fundo20.jpg', 'fundo21.jpg', 'fundo22.jpg', 'fundo23.jpg', ];
    const randomIndex = Math.floor(Math.random() * backgrounds.length); // Escolhe aleatoriamente um índice da lista
    const newBackground = backgrounds[randomIndex]; // Seleciona a imagem de fundo de maneira aleatória HEHE 

    document.getElementById('dialog-overlay').style.backgroundImage = `url('Arquivos/Fundo/${newBackground}')`; // Atualiza a imagem de fundo
}

// nessa linha o codigo faz a chamada inicial da função para mudar o fundo padrão FIFA 
changeBackground();

// Configura um intervalo para mudar a imagem de fundo a cada 1 minuto Achei que assim fica estiloso HAHAHA 
setInterval(changeBackground, 60000);

// Senha cifrada bem fuleira mas ja serve HEHE 
const senhaCifrada = "MTU1NA=="; // Senha codificada em Base64 disfarça que e segura kkkkkkkkkk 


// Aqui verifico a senha a padrão fica melhor 
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    // Decifra a senha antes de comparar ( O codigo faz a comparação ele e o bichão em  kkkkkkkk )
    const senhaDecifrada = atob(senhaCifrada);
    if (passwordInput === senhaDecifrada) {
        // com a senha correta, permitir acesso ao site ( Ao melhor do mundo o Patuver HEHEH ) 
        document.getElementById("dialog-overlay").style.display = "none";
        setTimeout(() => {
            document.getElementById("dialog-overlay").style.display = "flex";
            document.getElementById("password").value = ""; // Limpa o campo de senha achei isso importante vei
            document.getElementById("password").focus(); // Foca no campo de senha  ( Essa foi minha pior Vigarice )
        }, 60000); // Reexibir a caixa de senha após 1 minuto (60000 milissegundos)  ( Achei um minuto bom, assim não deixamos aberto no computador dos clientes... )
    } else {
        // Senha errada e para mostrar mensagem de erro ( Para deixa explicadinho o site dos cabra e pisica kkkkkkkk )
        alert("Senha incorreta. Tente novamente.");
    }
}

// Aqui e para quando eu digitar o enter clicar no botão Acessar ( Assim achei que fica bom, evita ter que pegar no mouse)
document.getElementById("password").addEventListener("keyup", function(event) {
    // aqui verifica se clicou no  "Enter" (código 13) clicar no enter para entra e vida HEHEH 
    if (event.keyCode === 13) {
        // aqui verifica a senha digitada ( a mais segura do mundo em kkkk )
        checkPassword();
    }
});

// Exibir a caixa de senha centralizada ao carregar a página ( por todo o codigo fiz assim, acho bem profissa! )
changeBackground();
document.getElementById("dialog-overlay").style.display = "flex"; // Exibir a caixa de senha centralizada ao carregar a página ( Aqui e o padão do patuver sempre ao centro HEHEH )
document.getElementById("password").focus(); // Focar no campo de senha ao carregar a página ( Achei melhor assim porque evita usar o mouse e ter sempre que clicar ali sacou HEHEHEH )
