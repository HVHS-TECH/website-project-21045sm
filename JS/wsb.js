// WSB //

// Graph Guess Game
(function() {
    const canvas = document.getElementById('graph-canvas');
    if (!canvas) return; // Don't run if not present
    const ctx = canvas.getContext('2d');
    const statusDiv = document.getElementById('graph-status');
    const scoreDiv = document.getElementById('graph-score');
    const btnUp = document.getElementById('guess-up');
    const btnDown = document.getElementById('guess-down');

    let points = [100]; // Start value
    let score = 0;
    let round = 0;
    const maxRounds = 20;

    function drawGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - points[0]);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(i * (canvas.width / maxRounds), canvas.height - points[i]);
        }
        ctx.strokeStyle = "#0077ff";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw current point
        ctx.beginPath();
        ctx.arc(round * (canvas.width / maxRounds), canvas.height - points[points.length - 1], 6, 0, 2 * Math.PI);
        ctx.fillStyle = "#ff2222";
        ctx.fill();
    }

    function nextRound(guess) {
        if (round >= maxRounds) {
            statusDiv.textContent = "Game Over!";
            btnUp.disabled = true;
            btnDown.disabled = true;
            return;
        }
        // Random up/down: -20 to +20
        const change = Math.floor(Math.random() * 41) - 20;
        const next = Math.max(10, Math.min(190, points[points.length - 1] + change));
        points.push(next);

        // Determine result
        const result = next > points[points.length - 2] ? "up" : (next < points[points.length - 2] ? "down" : "same");
        if ((guess === "up" && result === "up") || (guess === "down" && result === "down")) {
            score++;
            statusDiv.textContent = `Correct! It went ${result}.`;
        } else if (result === "same") {
            statusDiv.textContent = "No change! Try again.";
        } else {
            score--;
            statusDiv.textContent = `Wrong! It went ${result}.`;
        }
        round++;
        scoreDiv.textContent = `Score: ${score} | Round: ${round}/${maxRounds}`;
        drawGraph();
    }

    btnUp.onclick = () => nextRound("up");
    btnDown.onclick = () => nextRound("down");

    // Initial draw
    statusDiv.textContent = "Guess if the line will go up or down!";
    scoreDiv.textContent = `Score: ${score} | Round: ${round}/${maxRounds}`;
    drawGraph();
})();