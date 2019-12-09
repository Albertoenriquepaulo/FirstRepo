// class API {
//     constructor(apikey) {
//         this.apikey = apikey;
//     }

//     //obtener todas las monedas
//     async obtenerMonedasAPI() {
//         const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
//         //fetch a la api
//         const urlObtenerMonedas = await fetch(url);
//         //respuesta en JSON
//         const monedas = await urlObtenerMonedas.json();


//         return monedas;

//     }

//     async obtenerValores(moneda, criptomoneda) {
//         const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

//         //consultar en REST API
//         const urlConvertir = await fetch(url);

//         const resultado = await urlConvertir.json();

//         return resultado;

//     }
// }

class APIToken {
    constructor(apiToken) {
        this.apiToken = apiToken;
        let result = new Object();
    }

    getData() {
        const myheaders = {
            "Authorization": `Bearer ${this.apiToken}`
        }
        const url = 'https://gorest.co.in/public-api/users/1775'

        fetch(url, {
            method: "GET",
            headers: myheaders //{"Authorization": `Bearer ${token}`} //Ambos dan igual
        }).then(function (response) {
            return response.json()
        }, function (error) {
            console.log(error.message); //=> String
        })
            .then((element) => {
                console.log("element from class");
                console.log(element.result);
                //console.log(element.result);
                //console.log(element.result.address);
                this.result = element.result;
            })
        return this.result;
    }
}

class APITokenAsync1 {
    constructor(apiToken) {
        this.apiToken = apiToken;
        let result = new Object();
    }

    async getData() {
        const myheaders = {
            "Authorization": `Bearer ${this.apiToken}`
        }
        const url = 'https://gorest.co.in/public-api/users/1775'

        const getData = await fetch(url, {
            method: "GET",
            headers: myheaders //{"Authorization": `Bearer ${token}`} //Ambos dan igual
        });

        const data = await getData.json();
        //console.log(data.result);
         return data.result;
    }
}

class APITokenAsync {
    constructor(apiToken) {
        this.apiToken = apiToken;
        let result = new Object();
    }

    async getData() {
        const myheaders = {
            "Authorization": `Bearer ${this.apiToken}`
        }
        const url = 'https://gorest.co.in/public-api/users/1775'

        const getData = await fetch(url, {
            method: "GET",
            headers: myheaders //{"Authorization": `Bearer ${token}`} //Ambos dan igual
        })
        .then(data =>{
            return data.json();
        })
        .then (data =>{
            return data.result;
        })
        ;

        return getData;
    }
}