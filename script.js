var apps = document.querySelectorAll('.l-app');
const fiqonApp = document.querySelector('.fiqon');
const leftParts = document.querySelectorAll('.la-pt');

// Cria um array para guardar as linhas e inicializa com null
//var lines = Array.from({ length: apps.length }, () => null);

var lines = [];

for (var i = 0; i < apps.length; i++) {
    lines[i] = null;
}


apps.forEach(function (app, index) {
    app.addEventListener('click', function () {
        this.classList.toggle('bordered');

        let selectedApps = Array.from(document.querySelectorAll('.l-app.bordered'));
        console.log(selectedApps)

        // Se a linha já existe, remova
        if (lines[index]) {
            lines[index].remove();
            lines[index] = null;
        }
        // Caso contrário, se o app estiver selecionado, crie a linha
        else if (this.classList.contains('bordered')) {
            //let partIndex = Math.min(selectedApps.length, 2) - 1; // use part1 se 1 app estiver selecionado, part2 se 2 ou mais estiverem selecionados
            let partIndex;
            if (selectedApps.length > 1) {
                partIndex = 1; // Índice para 'part2'
            } else {
                partIndex = 0; // Índice para 'part1'
            }

            lines[index] = new LeaderLine(
                LeaderLine.pointAnchor(leftParts[partIndex], 'draw'),
                fiqonApp, {
                    color: '#12e066',
                    endPlug: 'arrow1',
                    dash: {
                        animation: true
                    },
                    showEffectName: 'draw'
                }
            );

            lines[index].hide('none');

            // Show the line with draw animation
            setTimeout(() => {
                lines[index].show('draw');
            }, 100);
        }
    });
});