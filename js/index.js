/*let urlAPI = " https://pokeapi.co/api/v2/pokemon/"
let peticion = fetch(urlAPI)
peticion.then(res => res.json())
    .then(infomacion => {
        for (const picachu of infomacion.results) {
            fetch(picachu.url)
            .then(res2 => res2.json)
            .then(lospokemon => {
                console.log(lospokemon)
        infomacion.forEach(element => {
                data.array.forEach(element => {
                    
                });
            })
        });
})
*/
let Inicio = 0

function poke(val){
    borrar();
    Inicio=Inicio+val
let urlAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50'
let dir1 = 'https://pokeapi.co/api/v2/pokemon/?offset='
let dir2 = '&limit=20 '
let dir3 = dir1+Inicio+dir2
console.log (dir3)
let peticion = fetch(dir3)
    .then(res => res.json())
    .then(data => {
        for (const picachu of data.results) {
            fetch(picachu.url)
                .then(res2 => res2.json())
                .then(lospokemon => {
                    lospokemon.stats.forEach((atributo, posicion) => {
                        if (posicion == 1) {
                            console.log(lospokemon.sprites.other.home)
                            console.log(atributo.stat.name)


                            document.querySelector("#dataInfo").innerHTML += `
                                        
                                        <div class="col ">
                                        <div class="card ">
                                        <div class="card-body   ">
                                        <img src="${lospokemon.sprites.other.home.front_default}" class= container "w-5 d-flex  align-content-center justify-content-center "> 
                                        <h2 class="card-title justify-content-center align-content-center text-center" >${picachu.name}</h2>
                                        <h6 class="card-text justify-content-center align-content-center text-center">${atributo.stat.name}</h6>
                                        </div>
                                        </div>
                                        </div>
                                        `
                                     
                        };
                    });
                })
        }
    })}

    function borrar(){
      
        document.getElementById('dataInfo').innerHTML='';
        
    }
