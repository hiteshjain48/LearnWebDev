const isValid = (hex) => {
    if(!hex) return false;
    const actualHex = hex.replace("#","");
    return actualHex.length === 3 || actualHex.length === 6;
}

const hexInput = document.getElementById('hexInput');
const hexOutput = document.getElementById('hexOutput')
const inputColor = document.getElementById('inputColor');
const alteredColor = document.getElementById("alteredColor");
const slider = document.getElementById('slider');
const sliderText = document.getElementById('sliderText');
const toggleBtn = document.getElementById('toggleBtn');
const lightenText = document.getElementById('lightenText');
const darkenText = document.getElementById('darkenText');
toggleBtn.addEventListener('click', ()=>{
    if(toggleBtn.classList.contains('toggled')){
        toggleBtn.classList.remove('toggled');
        lightenText.classList.remove('unselected');
        darkenText.classList.add('unselected')
        reset();
    }
    else {
        toggleBtn.classList.add('toggled');
        lightenText.classList.add("unselected");
        darkenText.classList.remove("unselected");
        reset();
    }
})
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValid(hex)) return;
    const stripHex = hex.replace("#","");
    inputColor.style.backgroundColor = "#"+stripHex; 
    alteredColor.style.backgroundColor = "#"+stripHex
    console.log(hex);
});

const convertHexToRGB = (hex) => {
    if(!isValid(hex)) return null;
    let stripHex = hex.replace("#","");
    if(stripHex.length === 3){
        stripHex = stripHex[0] + stripHex[0] + stripHex[1] + stripHex[1] + stripHex[2] + stripHex[2];
    }
    const r = parseInt(stripHex.substring(0,2),16);
    const g = parseInt(stripHex.substring(2,4),16);
    const b = parseInt(stripHex.substring(4,6),16);
    return {r:r,g:g,b:b};
}

const convertRGBToHex = (r,g,b) => {
    let rHex = ("0" + r.toString(16)).slice(-2);
    let gHex = ("0" + g.toString(16)).slice(-2);
    let bHex = ("0" + b.toString(16)).slice(-2);
    return rHex+gHex+bHex;
}


slider.addEventListener('input', () =>{
    const hex = hexInput.value;
    sliderText.textContent = `${slider.value}%`;
    if(!isValid(hex)) return;
    const valueAddition  = 
    toggleBtn.classList.contains('toggled') ? 
    -slider.value 
    : slider.value;
    const altColor = alterColor(hex,valueAddition);
    // console.log(altColor)
    alteredColor.style.backgroundColor = "#"+altColor;
    
})

const alterColor = (hex, percentage) => {
    const rgb = convertHexToRGB(hex);
    console.log(rgb)
    const amount = Math.floor((percentage/100) * 255);
    
    const newR = increaseWithin0To255(rgb['r'],amount);
    const newG = increaseWithin0To255(rgb['g'],amount);
    const newB = increaseWithin0To255(rgb['b'],amount);
    // console.log({newR, newG, newB});
    return convertRGBToHex(newR, newG, newB);
  }
const increaseWithin0To255 = (hex, amount) => {
    // const newHex = hex + amount;
    // if(newHex > 255) return 255;
    // if(newHex < 0) return 0;
    // return newHex;
    return Math.min(255, Math.max(0, hex + amount));
  }

const reset = () => {
    sliderText.textContent = '0%'
    slider.value = 0;
    alteredColor.style.backgroundColor = "#"+hexInput.value.replace("#","");
}

