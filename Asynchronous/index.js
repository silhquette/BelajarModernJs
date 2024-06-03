// syncronous callback function
function sayHello(callback) {
    callback("Rivana")
}

sayHello( name => console.log(`halo saya ${name}`) );

// asyncronous callback function
console.log('mulai');
$.ajax({
    url: 'data.json',
    success: (data) => {
        data.forEach(el => {
            console.log(el);
        });
    },
    error: er => console.log(er)
})
console.log('selesai');

// promise
let ditepati = true;
const myJanji = new Promise((resolve, reject) => {
    if(ditepati) {
        // ceritanya delay
        setTimeout(() => {
            resolve(
                // ceritanya json
                {
                    status: 200,
                    nama: 'Rivana'
                }
            )
        }, 3000);
    } else {
        reject(
            // ceritanya response
            {
                status: 404,
                response: 'not found'
            }
        );
    }
})

console.log('--mulai promise--');
myJanji
    .finally(() => console.log('selesai menunggu promise!'))
    .then(response => console.log(response))
    .catch(response => console.log(response));
console.log('--selesai promise--');