// Simple Destructuring
function Mahasiswa(nama, nim, usia) {
    this.nama = nama;
    this.nim = nim;
    this.usia = usia;
    this.nilai = {
        uas: 100,
        uts: 90,
    }
}

let rivana = new Mahasiswa("Rivana", "120110210021", 21);

let {nama} = rivana     // nama = Rivana
let {nama_mhs, nim, usia} = rivana     // nama_mhs = Rivana; nim = 120110210021; usia = 21

// Swap Values
// [nama, nim] = [nim, nama];
console.log(nama);      // nama = 120110210021
console.log(nim);       // nim = Rivana

// Named Variables
let aulia = new Mahasiswa("Aulia", "120110210021", 21);

let {
    nama: panggilan = "Rivana", 
    nim: id,
    usia: old,
    email:em = "contoh@gmail.com"
} = aulia

// name = Rivana; id = 120110210021; old = 21
// email = contoh@gmail.com

// Destructuring with Function
let getNama = ({ nama, ...any }) => {
    return nama;
}

console.log( getNama(rivana) );  // Rivana

// Nest Destructuring
let Intoduction = ({nama, nim, nilai: {uas, uts}}) => {
    console.log(`saya ${nama} nim ${nim} dan nilai uas = ${uas}, uts = ${uts}`);
}

Intoduction(rivana);