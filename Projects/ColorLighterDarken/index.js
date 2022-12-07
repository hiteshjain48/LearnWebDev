const isValid = (hex) => {
    if(!hex) return false;
    const actualHex = hex.replace("#","");
    return actualHex.length === 3 || actualHex.length === 6;
}

const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValid(hex)) return;
    const stripHex = hex.replace("#","");
    inputColor.style.backgroundColor = "#"+stripHex; 
    console.log(hex);
})