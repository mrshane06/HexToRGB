const hexInput = document.getElementById('hex-input');
const convert = document.getElementById('convert');
const answer = document.getElementById('answer');

//creating limitations to the code
convert.addEventListener('click', () => {
    const hexCode = hexInput.value.trim();   //used trim() to remove any white space from both ends of a string.
    if (hexCode.length === 7 && hexCode.startsWith('#')) {
        const rgb = hexToRgb(hexCode);
        answer.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    } else {
        answer.textContent = 'Invalid hex code';
    }
});

//a function to recieve the rgb code from the hex code
function hexToRgb(hex) {
    const hexCode = hex.substring(1);
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    return { r, g, b };
}