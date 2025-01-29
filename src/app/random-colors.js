
// Helper Functions

const relativeLuminance = (red, green, blue) => {
  let RsRGB = red/255;
  let R = RsRGB <= 0.03928 ? RsRGB/12.92 : Math.pow(((RsRGB + 0.055)/1.055), 2.4);
  let GsRGB = green/255;
  let G = GsRGB <= 0.03928 ? GsRGB/12.92 : Math.pow(((GsRGB + 0.055)/1.055), 2.4);
  let BsRGB= blue/255;
  let B = BsRGB <= 0.03928 ? BsRGB/12.92 : Math.pow(((BsRGB + 0.055)/1.055), 2.4);
  return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
}

const colorContrast = (L1, L2) => {
  return L1 > L2 ? (L1  + 0.05)/(L2 + 0.05) : (L2  + 0.05)/(L1 + 0.05);
}

const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};

export function randomColor(min = 1, max = 255, minContrast) {
  /* */
  let red = getRandomIntInclusive(min, max);
  let green = getRandomIntInclusive(min, max);
  let blue = getRandomIntInclusive(min, max);
  let myContrast = 0;
  
  if (minContrast) {
    let L1 = relativeLuminance(red, green, blue);
    const L2 = relativeLuminance(255, 255, 255);
    
    myContrast = colorContrast(L1, L2);
    while (myContrast < minContrast) {
        red = getRandomIntInclusive(min, max);
        green = getRandomIntInclusive(min, max);
        blue = getRandomIntInclusive(min, max);
        L1 = relativeLuminance(red, green, blue);
        myContrast = colorContrast(L1, L2);
    }
  }
  return `rgb(${red}, ${green}, ${blue})`;
};

//export default function getRandomQuote() {return quoteDB[Math.floor(Math.random() * quoteDB.length)]};