let pi = 3.14;
let argument = process.argv.slice(2);

function areaCalculation (radius) {
    let area = pi * (radius * radius);
    console.log(`Yarıçapı: ${radius}  olan bir dairenin Alanı: ${area} dır.` )
}

areaCalculation(argument * 1);