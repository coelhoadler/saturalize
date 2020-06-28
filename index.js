try {
    const rangeSaturalize = document.getElementById('saturalizeRange');
    const originalColorDiv = document.getElementById('originalColor');
    const editedColorDiv = document.getElementById('editedColor');

    const hexColor = document.getElementById('hexColor');

    originalColorDiv.style.background = hexColor.value;
    editedColorDiv.style.background = hexColor.value;
    
    rangeSaturalize.addEventListener('change', event => {
        const rangeValue = event.target.value;
        const saturalizeColor = saturalize(hexColor.value, parseFloat(rangeValue));
        editedColorDiv.style.background = saturalizeColor;
        editedColorDiv.innerText = saturalizeColor;
    });
    
    hexColor.addEventListener('blur', event => {
        const color = event.target.value;
        hex = color.replace(/[^0-9a-f]/gi, '');
        rangeSaturalize.value = 0;
        if (hex) {
            originalColorDiv.style.background = `#${hex}`;
            editedColorDiv.style.background = `#${hex}`;
            editedColorDiv.innerText = `#${hex}`;
        }
    });

} catch ($e) {
    console.error('Error:', $e);
}
