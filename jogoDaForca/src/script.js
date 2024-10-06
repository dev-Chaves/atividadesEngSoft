const insertInfo = document.getElementById('insertInfo');
        const btnAdd = document.getElementById('btnAdd');
        const testInfo = document.getElementById('testInfo');
        const btnTest = document.getElementById('btnTest');
        const palavraDisplay = document.getElementById('palavraDisplay');
        const letrasErradas = document.getElementById('letrasErradas');
        const tentativasRestantes = document.getElementById('tentativasRestantes');

        let palavraSecreta = '';
        let palavraEscondida = [];
        let letrasIncorretas = [];
        let tentativas = 6;

        // Adicionar palavra secreta
        btnAdd.addEventListener('click', () => {
            if (insertInfo.value === '') {
                alert('Digite uma Palavra!!!');
            } else {
                palavraSecreta = insertInfo.value.toLowerCase();
                palavraEscondida = palavraSecreta.split('').map(() => '_');
                palavraDisplay.textContent = palavraEscondida.join(' ');
                insertInfo.value = ''; 
            }
        });

        // Testar letra
        btnTest.addEventListener('click', () => {
            const letra = testInfo.value.toLowerCase();

            if (letra === '' || letra.length > 1) {
                alert('Digite apenas uma letra!');
                return;
            }

            
            if (letrasIncorretas.indexOf(letra) !== -1 || palavraEscondida.indexOf(letra) !== -1) {
                alert('Você já tentou essa letra!');
                return;
            }

            
            if (palavraSecreta.indexOf(letra) !== -1) {
                palavraSecreta.split('').forEach((char, index) => {
                    if (char === letra) {
                        palavraEscondida[index] = letra;
                    }
                });
                palavraDisplay.textContent = palavraEscondida.join(' ');
            } else {
                letrasIncorretas.push(letra);
                letrasErradas.textContent = letrasIncorretas.join(', ');
                tentativas--;
                tentativasRestantes.textContent = tentativas;
            }

            
            if (tentativas === 0) {
                alert('Você perdeu! A palavra era: ' + palavraSecreta);
                resetGame();
            } else if (palavraEscondida.indexOf('_') === -1) {
                alert('Parabéns! Você ganhou!');
                resetGame();
            }

            testInfo.value = ''; 
        });

        function resetGame() {
            palavraSecreta = '';
            palavraEscondida = [];
            letrasIncorretas = [];
            tentativas = 6;
            palavraDisplay.textContent = '';
            letrasErradas.textContent = '';
            tentativasRestantes.textContent = tentativas;
        }