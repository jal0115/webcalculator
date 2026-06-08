const display = document.getElementById('display');

function appendValue(value) {
    if (value === '.') {
        if (display.value.includes('.')) {
            return;
        }
    }
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearAll() {
    display.value = '0';
}

function del() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function square() {
    display.value = parseFloat((parseFloat(display.value) ** 2).toFixed(10));
}

function squareRoot() {
    let v = parseFloat(display.value);
    display.value = v < 0 ? 'Err' : parseFloat(Math.sqrt(v).toFixed(10));
}

function toggleSign() {
    if (display.value !== '0' && display.value !== 'Err') {
        display.value = display.value.startsWith('-')
            ? display.value.slice(1)
            : '-' + display.value;
    }
}

function reciprocal() {
    let v = parseFloat(display.value);
    display.value = v === 0 ? 'Err' : parseFloat((1 / v).toFixed(10));
}

function calc() {
    try {
        let result = eval(display.value);
        display.value = parseFloat(result.toFixed(10));
    } catch {
        display.value = 'Err';
    }
}
