

const reqCa = fetch(`http://localhost:8086/categorias`).then((resp)=>{
  resp.json().then((data)=>{
    const [{id,nombreCategoria}] =data
    console.log(id,nombreCategoria)
    const idDOM = document.getElementById("id")
    idDOM.innerHTML=id
    const nombreDom = document.getElementById("nombreCategoria")
    nombreDom.innerHTML = nombreCategoria

    const listaCategoria = document.getElementById('listaCategoria')

    data.map(({id, nombreCategoria}) =>{
      const li = document.createElement('li')
      li.innerHTML = `id: ${id} categoria: ${nombreCategoria}`
      listaCategoria.appendChild(li)
    })
  })  
}).catch(console.warn)










