const getN = () => { return document.getElementById("n").value;}
const getfx = () => { return document.getElementById("fx").value; }
const getA = () => { return document.getElementById('a').value; }
const getB = () => { return document.getElementById('b').value; }


const poly_eval = (p, x) => {
    return eval(p.split`x`.join`*x`.split`^`.join`**`);
}


const left = () => {
    let n = getN();
    let fx = getfx();
    let a = getA() * 1;
    let b = getB() * 1;
    let area = 0;
    let negative = false;
    if (b < a) { 
        [a, b] = [b, a];
        negative = true;
    }
    let dx = (b - a) / n;
    // skip last
    for (let i = a; i < b; i += dx) {
        area += poly_eval(fx, i);
    }
    area *= dx;
    if (negative == true) { area = -area; }
    document.getElementById("ans").innerHTML = area;
}

const right = () => {
    let n = getN();
    let fx = getfx();
    let a = getA() * 1;
    let b = getB() * 1;
    let area = 0;
    let negative = false;
    if (b < a) { 
        [a, b] = [b, a];
        negative = true;
    }
    let dx = (b - a) / n;
    // skip first
    for (let i = a + dx; i <= b; i += dx) {
        area += poly_eval(fx, i);
    }
    area *= dx;
    if (negative == true) { area = -area; }
    document.getElementById("ans").innerHTML = area;
}

const mid = () => {
    let n = getN();
    let fx = getfx();
    let a = getA() * 1;
    let b = getB() * 1;
    let area = 0; 
    let negative = false;
    if (b < a) { 
        [a, b] = [b, a];
        negative = true;
    }
    let dx = (b - a) / n;
    for (let i = a + (dx / 2); i <= b - (dx / 2); i += dx) {
        area += poly_eval(fx, i);
    }
    area *= dx;
    if (negative == true) { area = -area; }
    document.getElementById("ans").innerHTML = area;
}


const trap = () => {
    let n = getN();
    let fx = getfx();
    let a = getA() * 1;
    let b = getB() * 1;
    let area = 0; 
    
    let negative = false;
    if (b < a) { 
        [a, b] = [b, a];
        negative = true;
    }

    let prev_base = poly_eval(fx, a);
    let dx = (b - a) / n;

    for (let i = a + dx; i <= b; i += dx) {
        area += 0.5 * dx * (poly_eval(fx, i) + prev_base);
        prev_base = eval(poly_eval(fx, i));
    }


    if (negative == true) { area = -area; }
    document.getElementById("ans").innerHTML = area;
}
