// Cara membuat object pada javascript
// 1. ibject literal
let manusia = {
    // properti
    nama: 'rivana',

    // method
    hello: function(string) {
        console.log(`halo nama saya ${this.nama}`);
    }
}

// 2. function declaration
let MethodBuah = {
    //method
    makan: function() {
        console.log(`buah ${this.nama} enak`);
    }
}

function Buah(nama, warna) {
    // init
    let buah = Object.create(MethodBuah);
    // properties
    buah.nama = nama;
    buah.warna = warna;

    return buah;
}

const apel = Buah('apel', 'merah');

// 3. constructor function
function Mobil(merk, warna) {
    this.merk = merk;
    this.warna = warna;
    this.jalan = function() {
        console.log(`woosh`);
    }
}

Mobil.prototype.berhenti = function() {
    console.log('jangan ngerem mendadak!');
}

const livina = new Mobil('nisan', 'putih')