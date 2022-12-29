// // const fs = require('fs');
// var file = readFileFromLocalDirectory("../img/Plant1.png");
const plants = [
    {
        img: 'assets/img/Plant1.png',
        name: 'Callisia Repens',
        harga: '200.000',
        deskripsi: 'Tanaman abadi membentuk tikar merayap tunas berbunga naik, daun yang berdaging dan halus tumbuh lebih kecil ke arah ujung pucuk.',
        tips_perawatan: ['Hindari sinar matahari secara langsung', 'Siram secukupnya agar tanah tetap lembab Baik pada suhu 60°F - 77°F.', 'Memerlukan tingkat kelembapan sekitar 75%']
    },

    {
        img: 'assets/img/Plant2.png',
        name: 'Dischidia Ovata',
        harga: '180.000',
        deskripsi: 'Dischidia adalah tumbuhan dalam genus Dischidia yang berasal dari New Guinea dan Queensland Utara',
        tips_perawatan: ['Hindari sinar matahari secara langsung ', 'Siram secukupnya agar tanah tetap lembab Baik pada suhu 60°F - 77°F.', 'Memerlukan tingkat kelembapan sekitarasdads 75%']
    },
    {
        img: 'assets/img/Plant3.png',
        name: 'Hoya Carnosa ',
        harga: '200.000',
        deskripsi: 'adalah spesies tumbuhan berbunga asclepiad dalam keluarga dogbane Apocynaceae,salah satu dari banyak spesies Hoya yang berasal dari Asia Timur dan Australia.',
        tips_perawatan: ['Hindari sinar matahari secara langsung', 'Siram secukupnya agar tanah tetap lembab Baik pada suhu 60°F - 77°F.', 'Memerlukan tingkat kelembapan sekitar 75%']
    },
    {
        img: 'assets/img/Plant4.png',
        name: 'Myrtillocactus',
        harga: '180.000',
        deskripsi: 'adalah kaktus asli Meksiko utara dan tengah. menghasilkan buah yang dapat dimakan dan dijual untuk konsumsi, & dianggap spesies yang tumbuh cepat dan kuat.',
        tips_perawatan: ['Hindari sinar matahari secara langsung', 'Siram secukupnya agar tanah tetap lembab Baik pada suhu 60°F - 77°F.', 'Memerlukan tingkat kelembapan sekitar 75%']
    },
];


//
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
    h4.innerHTML = plants[index].name;
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



// 
document.addEventListener("DOMContentLoaded", function () {
    const elemen = document.querySelector(".bi.bi-bookmark-fill.d-block");
    elemen.addEventListener("click", function () {
        elemen.classList.toggle("warna-kuning");
    });
});


// // HOVER  CARD
const cardPlants = document.querySelectorAll('.card-plant');
const detail_img = document.querySelector('.isi img');

const firstCardPlant = cardPlants[0];
firstCardPlant.style.backgroundColor = '#eee';
firstCardPlant.style.borderRadius = '20px';

cardPlants.forEach(cardPlant => {
    cardPlant.addEventListener('mouseenter', function () {
        cardPlants.forEach(cardPlant => {
            cardPlant.style.backgroundColor = '#fff';
        });
        this.style.backgroundColor = '#eee';
        this.style.borderRadius = '20px';
        this.style.cursor = 'pointer';

    });
});



const deskripsi_tanaman = document.querySelector('.deskripsi-tanaman');
const tips_perawatan = document.querySelector('.tips-perawatan');
const nama = document.querySelector('.nama-tanaman');
//Deskripsi
const pp = document.createElement('p');
// ambil deskripsi objek pertamas
pp.innerHTML = plants[0].deskripsi;
deskripsi_tanaman.appendChild(pp);
// li

// ambil tips perawatan dari objek pertama
const perawatan = plants[0].tips_perawatan;

// iterasi seluruh tips perawatan
perawatan.forEach(tip => {
    // buat element li baru
    const li = document.createElement('li');
    // isi element li dengan tip perawatan
    li.textContent = tip;
    // tambahkan element li ke dalam element .tips-perawatan
    tips_perawatan.appendChild(li);
});


cardPlants.forEach((cardPlant, index) => {
    cardPlant.addEventListener('click', function () {
        nama.innerHTML = '';
        // cari index dari card-plant yang diklik dengan looping
        let clickedIndex;
        for (let i = 0; i < cardPlants.length; i++) {
            if (cardPlants[i] === cardPlant) {
                clickedIndex = i;
                break;
            }
        }
        nama.innerHTML = plants[index].name;


        detail_img.src = `assets/img/Plant${clickedIndex + 1}.png`;
        // ambil deskripsi objek pertamas
        pp.innerHTML = plants[clickedIndex].deskripsi;
        deskripsi_tanaman.appendChild(pp);
        // li
        // hapus semua element li yang ada di dalam element .tips-perawatan
        while (tips_perawatan.firstChild) {
            tips_perawatan.removeChild(tips_perawatan.firstChild);
        }
        // ambil tips perawatan dari objek pertama
        const perawatan = plants[clickedIndex].tips_perawatan;

        // iterasi seluruh tips perawatan
        perawatan.forEach(tip => {
            // buat element li baru
            const li = document.createElement('li');
            // isi element li dengan tip perawatan
            li.textContent = tip;
            // tambahkan element li ke dalam element .tips-perawatan
            tips_perawatan.appendChild(li);
        });

        console.log(clickedIndex);
    });
});



