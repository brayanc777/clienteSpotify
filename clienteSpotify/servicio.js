//1. declarar una variable para almacenar la url del api
let url="https://api.spotify.com/v1/artists/{id}/0TnOYISbd1XYRBk9myaseg/top-tracks"

//2. almacenar en una variable o en varias, datos de control que se necesiten en el api
let token="Bearer BQBu9lwvtDDCPqYdIeX_7sMv7gLyOf_cLDsG6rJ8ft4R9wxcgF8Q2wsV3wJzsZGlADAFvcfMvWQjUgUdNAfwoMVrflg1oQH-ZzUhk7_1aIGhitp3K6Q"
//3. construir la peticion que se va a enviar
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    }
}
//4. ejecutar el cinsumo api
fetch(url,peticion)
.then(function(){})
.then(function(){})
.caches(function(){})