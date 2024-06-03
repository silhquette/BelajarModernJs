const nama = 'apel';
const warna = 'merah';

const ambil = (str, ...values) => {
    console.log(str);
    console.log(values);
}

const word = ambil`buah ${nama} warna ${warna}`;
console.log(word);