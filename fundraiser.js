function updateThermometer(donation, matched) {
    const goalAmount = 3000; // Total goal amount
    const thermometer = document.getElementById('thermometer');
    const thermometer2 = document.getElementById('thermometer2');
    const thermometerText = thermometer.querySelector('.thermometer-text');
    const thermometer2Text = thermometer2.querySelector('.thermometer-text');
    
    const total = donation + 2*matched;

    // Calculate percentage of goal reached
    const percentage_donated = (matched)/goalAmount * 100;
    const percentage_matched = (total / goalAmount) * 100;
    
    // Set thermometer height and text
    
    thermometer.style.height = percentage_matched + '%';
    thermometer2.style.height = percentage_donated + '%';
    thermometerText.textContent = `$${total} (${percentage_matched.toFixed(2)}%)`;
    thermometer2Text.textContent = `$${matched} Matched`;
}

function drawGraph(miles, money) {
    const canvas = document.getElementById('myGraph');
    const ctx = canvas.getContext('2d');

    // Set canvas size based on container
    canvas.width = document.querySelector('.graph-container').offsetWidth;
    canvas.height = 300;

    // Clear the canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const numweeks = miles.length;
    const weeks = Array.from({ length: numweeks + 1 }, (_, i) => i + 1);
    
    // Adjusted offsets for extra space
    const xoffset = 75; // Increased offset to accommodate labels
    const yoffset = 50; // Increased offset to accommodate labels
    const xAxisWidth = canvas.width - xoffset * 2;
    const yAxisHeight = canvas.height - yoffset * 2;

    // Draw X and Y axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(xoffset, yAxisHeight + yoffset);
    ctx.lineTo(xAxisWidth + xoffset, yAxisHeight + yoffset);
    ctx.stroke();

    // Y-axis for miles
    ctx.beginPath();
    ctx.moveTo(xoffset, yoffset);
    ctx.lineTo(xoffset, yAxisHeight + yoffset);
    ctx.stroke();

    // Draw miles data
    ctx.strokeStyle = '#1c2850';
    ctx.lineWidth = 2;
    ctx.beginPath();
    weeks.forEach((week, index) => {
        if (index < miles.length) {
            const x = xoffset + (xAxisWidth / (weeks.length - 1)) * index;
            const y = yAxisHeight + yoffset - (yAxisHeight / 50) * miles[index];
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
    });
    ctx.stroke();

    // Draw money data
    ctx.strokeStyle = '#b0314a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    weeks.forEach((week, index) => {
        if (index < money.length) {
            const x = xoffset + (xAxisWidth / (weeks.length - 1)) * index;
            const y = yAxisHeight + yoffset - (yAxisHeight / 3000) * money[index];
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
    });
    ctx.stroke();

    // Draw X-axis labels
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    weeks.forEach((week, index) => {
        const x = xoffset + (xAxisWidth / (weeks.length - 1)) * index;
        ctx.fillText(`${week - 17}`, x, yAxisHeight + yoffset + 20);
    });

    // Draw Y-axis labels for miles
    ctx.fillStyle = '#1c2850';
    ctx.font = '12px Arial';
    const maxmiles = 50;
    for (let i = 0; i <= maxmiles; i += 5) {
        const y = yAxisHeight - (yAxisHeight / maxmiles) * i;
        ctx.fillText(i, xoffset - 20, y + yoffset);
    }

    // Draw Y-axis labels for money
    ctx.fillStyle = '#b0314a';
    ctx.font = '12px Arial';
    for (let i = 0; i <= 3000; i += 300) {
        const y = yAxisHeight - (yAxisHeight / 3000) * i;
        ctx.fillText(`$${i}`, xoffset + xAxisWidth + 10, y + yoffset); // Tick marks are drawn to the right
    }

    // Add axis labels
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    
    // X-axis label (Weeks)
    ctx.fillText('Weeks Until Marathon', canvas.width / 2, canvas.height - 10);

    // Y-axis label (Miles)
    ctx.save(); // Save the current context state
    ctx.translate(40, canvas.height / 2); // Move the origin
    ctx.rotate(-Math.PI / 2); // Rotate 90 degrees counter-clockwise
    ctx.fillText('Miles per Week', 0, 0);
    ctx.restore(); // Restore the context state

    // Y-axis label (Money)
    ctx.save(); // Save the current context state
    ctx.translate(xoffset + xAxisWidth + 55, canvas.height / 2); // Move to the right of the tick marks
    ctx.rotate(Math.PI / 2); // Rotate 90 degrees clockwise
    ctx.fillText('Total Amount Raised', 0, 0);
    ctx.restore(); // Restore the context state
}

// Initial draw
const donation = 445;
const matched = 1471.4;
const total = donation + 2*matched
const miles = [21, 20, 31, 30, 30, 36, 37, 40, 43, 40, 42, 49, 5];
const money = [0, 0, 640, 1000, 1000, 1615, 1615, 1665, 3310.4, 3387.8, 3387.8, 3387.8, total];
updateThermometer(donation, matched);
drawGraph(miles, money);

// Redraw on window resize with debounce
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => drawGraph(miles, money), 300);
});
