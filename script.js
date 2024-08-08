document.addEventListener("DOMContentLoaded", () => {
    const testButton = document.getElementById("test-simulation");
    const clearButton = document.getElementById("clear-tests");
    const resultsDiv = document.getElementById("results");
    const probabilityElement = document.getElementById("probability");
    const testCountElement = document.getElementById("test-count");
    let testCount = 0;
    let adjustedProbability = 0;

    function updateResults() {
        const N_sim = Math.floor(Math.random() * 1000); // Random number of simulated realities
        const N_base = Math.floor(Math.random() * 1000); // Random number of base realities

        const P_sim = N_sim / (N_sim + N_base);
        adjustedProbability = Math.min(Math.max(adjustedProbability + (P_sim - 0.5) * 100, 0), 100); // Adjusted probability

        const resultText = adjustedProbability > 50
            ? `You are likely in a simulation. (Adjusted Probability: ${adjustedProbability.toFixed(2)}%)`
            : `You are likely not in a simulation. (Adjusted Probability: ${adjustedProbability.toFixed(2)}%)`;

        resultsDiv.innerHTML = `<p>${resultText}</p>
                                <p><strong>Number of Simulated Realities:</strong> ${N_sim}</p>
                                <p><strong>Number of Base Realities:</strong> ${N_base}</p>`;
        probabilityElement.textContent = `${adjustedProbability.toFixed(2)}%`;
    }

    function clearTests() {
        testCount = 0;
        adjustedProbability = 0;
        testCountElement.textContent = testCount;
        probabilityElement.textContent = `0%`;
        resultsDiv.innerHTML = '';
    }

    testButton.addEventListener("click", () => {
        testCount++;
        testCountElement.textContent = testCount;
        updateResults();
    });

    clearButton.addEventListener("click", () => {
        clearTests();
    });
});