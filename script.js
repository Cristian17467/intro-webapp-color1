document.addEventListener('DOMContentLoaded', function () {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const hexCode = document.getElementById('hexCode');
    const colorPicker = document.getElementById('colorPicker');

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);

        const color = `rgb(${red}, ${green}, ${blue})`;
        const hex = rgbToHex(red, green, blue);

        colorDisplay.style.backgroundColor = color;
        hexCode.textContent = hex;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        colorPicker.value = hex;
    }

    function updateSliders() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        const red = parseInt(hex.slice(1, 3), 16);
        const green = parseInt(hex.slice(3, 5), 16);
        const blue = parseInt(hex.slice(5, 7), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateSliders);
    greenInput.addEventListener('input', updateSliders);
    blueInput.addEventListener('input', updateSliders);

    colorPicker.addEventListener('input', updateFromColorPicker);

    updateColor();
});
