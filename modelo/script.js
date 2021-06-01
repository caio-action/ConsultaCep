var url 
var search 


function valuesearch(){
    search = document.getElementById('ConsCep').value
    url = `https://viacep.com.br/ws/${search}/json/`
    fetch(url) 
    .then( response => {
        return response.json()
     }).then( response =>{
       var res = document.getElementById('resultado')
       res.innerHTML= response.logradouro
       console.log(response)
        console.log(res)
     })
         

}
    var searching 
    var urll 
    

    function valuesearching() {
    searching = document.getElementById('resultado2')
    var cidade = document.getElementById('city').value
    var estado = document.getElementById('UF').value
    var log = document.getElementById('Logr').value
   
    console.log(searching)
    urll =`https://viacep.com.br/ws/${estado}/${cidade}/${log}/json/`
    fetch(urll)
    .then(responde => {
        return responde.json()
    }) .then(respondes =>{
        console.log(respondes)
        var salvarcep = ""
        respondes.map(responde => {
            salvarcep = salvarcep + `<p> - ${responde.logradouro} - ${responde.cep}</p>`
            
        
        })
        searching.innerHTML= salvarcep
    })
    
}




/*var procurar =
 fetch(url)
 .then(response => {
     return response.json()
})
procurar.then(json => {
    /*var para = document.createElement("p");
    var node = document.createTextNode( `${json[2].address.street} - ${json[2].username},${json[2].name} `)
    para.appendChild(node);
    var element = document.getElementById('CEP');
    element.appendChild(para);
    console.log(json)
})*/





