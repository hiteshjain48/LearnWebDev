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
});

const convertHexToRGB = (hex) => {
    if(!isValid(hex)) return null;
    const stripHex = hex.replace("#","");
    if(stripHex.length === 3){
        stripHex = stripHex[0] + stripHex[0] + stripHex[1] + stripHex[1] + stripHex[2] + stripHex[2];
        const r = parseInt(stripHex.substring(0,2),16);
        const g = parseInt(stripHex.substring(2,4),16);
        const b = parseInt(stripHex.substring(4,6),16);
        return {r,g,b};
    }
}

const convertRGBToHex = (r,g,b) => {
    let rHex = ("0" + r.toString(16)).slice(-2);
    let gHex = ("0" + g.toString(16)).slice(-2);
    let bHex = ("0" + b.toString(16)).slice(-2);
    return rHex+gHex+bHex;
}

const slider = document.getElementById('slider');
const sliderText = document.getElementById('sliderText');
slider.addEventListener('input', () =>{
    sliderText.textContent = `${slider.value}%`;
    console.log(slider.value);
})

const alterColor = (hex, percentage) => {
    let rgb = convertHexToRGB(hex);
    rgb.r = Math.floor(rgb.r + 255*percentage/100);
    rgb.g = Math.floor(rgb.g + 255*percentage/100);
    rgb.b = Math.floor(rgb.b + 255*percentage/100);
    return convertRGBToHex(rgb.r,rgb.g,rgb.b);
}

const alteredColor = document.getElementById("alteredColor");
