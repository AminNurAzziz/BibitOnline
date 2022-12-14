// // const fs = require('fs');
// var file = readFileFromLocalDirectory("../img/Plant1.png");
const plants = [
    {
        img: 'assets/img/Plant1.png',
        name: 'Callisia Repens',
        harga: '200.000'
    },
    {
        img: 'assets/img/Plant2.png',
        name: 'Callisia Repens',
        harga: '200.000'
    },
    {
        img: 'assets/img/Plant3.png',
        name: 'Callisia Repens',
        harga: '200.000'
    },
    {
        img: 'assets/img/Plant4.png',
        name: 'Callisia Repens',
        harga: '200.000'
    },
];


const choose_plant = document.querySelector('.choose-plant');

plants.forEach((plant, index) => {
    const card_plant = document.createElement('div');
    card_plant.classList.add('card-plant');
    card_plant.classList.add('d-flex');
    card_plant.classList.add('align-items-center');

    const img = document.createElement('img');
    const div = document.createElement('div');
    div.className = 'text';
    const h4 = document.createElement('h4');
    const h6 = document.createElement('h6');

    card_plant.appendChild(img);
    div.appendChild(h4);
    div.appendChild(h6);
    card_plant.appendChild(div);
    choose_plant.appendChild(card_plant);

    // img.src = plant.img;
    img.src = `assets/img/Plant${index + 1}.png`;
    h4.innerHTML = plant.name;
    h6.innerHTML = 'Rp. ' + plant.harga;
});



// Add JUMLAH
// mengambil elemen inputan number
const inputNumber = document.querySelector('.input');
// mengambil elemen tombol plus
const plusButton = document.querySelector('.plus');
// menambahkan event listener untuk tombol plus
plusButton.addEventListener('click', () => {
    // menambahkan nilai 1 pada inputan number
    inputNumber.value = parseInt(inputNumber.value) + 1;
    console.log(inputNumber.value);
});

// mengambil elemen tombol minus
const minusButton = document.querySelector('.minus');

// menambahkan event listener untuk tombol minus
minusButton.addEventListener('click', () => {
    // mengurangi nilai 1 pada inputan number
    inputNumber.value = parseInt(inputNumber.value) - 1;
});


document.addEventListener("DOMContentLoaded", function () {
    const elemen = document.querySelector(".bi.bi-bookmark-fill.d-block");
    elemen.addEventListener("click", function () {
        elemen.classList.toggle("warna-kuning");
    });
});
