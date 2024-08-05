function updateThermometer(donationAmount) {
    const goalAmount = 3000; // Total goal amount
    const thermometer = document.getElementById('thermometer');
    const thermometerText = thermometer.querySelector('.thermometer-text');
    
    // Calculate percentage of goal reached
    const percentage = (donationAmount / goalAmount) * 100;

    // Set thermometer height and text
    thermometer.style.height = percentage + '%';
    thermometerText.textContent = `$${donationAmount} (${percentage.toFixed(2)}%)`;
}

function drawGraph(miles, money) {
    const canvas = document.getElementById('myGraph');
    const ctx = canvas.getContext('2d');

    // Set canvas size based on container
    canvas.width = document.querySelector('.graph-container').offsetWidth;
    canvas.height = 300;

    const weeks = Array.from({ length: 16 }, (_, i) => i + 1);
    
    const xoffset = 200;
    const yoffset = 100;
    const xAxisWidth = canvas.width - xoffset;
    const yAxisHeight = canvas.height - yoffset;

    // Draw X and Y axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(xoffset / 2, yAxisHeight + yoffset / 2);
    ctx.lineTo(xAxisWidth + xoffset / 2, yAxisHeight + yoffset / 2);
    ctx.stroke();

    // Y-axis for miles
    ctx.beginPath();
    ctx.moveTo(xoffset / 2, yoffset / 2);
    ctx.lineTo(xoffset / 2, yAxisHeight + yoffset / 2);
    ctx.stroke();

    // Draw miles data
    ctx.strokeStyle = '#1c2850';
    ctx.lineWidth = 2;

    ctx.beginPath();
    weeks.forEach((week, index) => {
        const x = xoffset / 2 + (xAxisWidth / (weeks.length - 1)) * index;
        const y = yAxisHeight + yoffset / 2 - (yAxisHeight / 50) * miles[index];
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();

    // Draw money data
    ctx.strokeStyle = '#b0314a';
    ctx.lineWidth = 2;

    ctx.beginPath();
    weeks.forEach((week, index) => {
        const x = xoffset / 2 + (xAxisWidth / (weeks.length - 1)) * index;
        const y = yAxisHeight + yoffset / 2 - (yAxisHeight / 3000) * money[index];
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();

    // Draw X-axis labels
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    weeks.forEach((week, index) => {
        const x = xoffset / 2 + (xAxisWidth / (weeks.length - 1)) * index;
        ctx.fillText(`${week}`, x, yAxisHeight + yoffset / 2 + 20);
    });

    // Draw Y-axis labels for miles
    ctx.fillStyle = '#1c2850';
    ctx.font = '12px Arial';
    const maxmiles = 50;
    for (let i = 0; i <= maxmiles; i += 5) {
        const y = yAxisHeight - (yAxisHeight / maxmiles) * i;
        ctx.fillText(i, xoffset / 2 - 20, y + yoffset / 2);
    }

    // Draw Y-axis labels for money
    ctx.fillStyle = '#b0314a';
    ctx.font = '12px Arial';
    for (let i = 0; i <= 3000; i += 300) {
        const y = yAxisHeight - (yAxisHeight / 3000) * i;
        ctx.fillText(`$${i}`, xoffset / 2 + xAxisWidth + 10, y + yoffset / 2);
    }
}

const donationAmount = 640
const miles = [21, 20, 31, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
const money = [0, 0, donationAmount, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
updateThermometer(donationAmount); 
drawGraph(miles, money);
window.addEventListener('resize', drawGraph); // Redraw on window resize
