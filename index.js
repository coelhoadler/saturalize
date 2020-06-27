/**
 * Change hexadecimal color
 * @param {string} hex - Hexadecimal with 3 or 6 characters
 * @param {number} luminosity - range of -1 and 1 {float}
 */
function saturalize(hex, luminosity = 0) {
    hex = hex.replace(/[^0-9a-f]/gi, '');
    const isValid = hex.length === 3 || hex.length === 6; 
    const WHITE = 255;
    const BLACK = 0;

    if (!isValid) throw new Error('Invalid HEX.');

    if (hex.length === 3) 
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];

    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);

    let newHex = '#';
    for (const twoDigit of twoDigitGroup) {
        const numberFromHex = parseInt(twoDigit, 16);
        const calcLuminosity = numberFromHex + (luminosity * 255);
        const blackOrLuminosity = Math.max(BLACK, calcLuminosity);
        const partialColor = Math.min(WHITE, blackOrLuminosity);

        const newColor = Math.round(partialColor);
        const numberToHex = newColor.toString(16);
        const finalHex = `0${numberToHex}`.slice(-2);

        newHex = newHex + finalHex;
    }

    return newHex;
}

try {
    const { body } = document;
    body.style.backgroundColor = saturalize('#43b309', .09);
    saturalize('',)
} catch ($e) {
    console.error('Error:', $e);
}
