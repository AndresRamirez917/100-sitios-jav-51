async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products);
    const productsArr = products.map(elemento => Object.entries(elemento));
    console.log(productsArr);
    const productsArrSliced = productsArr.slice(0,4);
    products.forEach(element => {
        const randomData = (min, max) => Math.floor(Math.random() * max - min +1) + min;
        const randInt = randomData(1, productsArr.length); 
        const randIndex = randInt;
        
        for(i = 0; i < productsArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
            <div class="pricing-box">
                <img src="${productsArr[randIndex][5][1]}" alt="">
                <h3>100% Responsive</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Viverra euismod sagittis quam suspendisse. Eu ut egestas consectetur in rutrum amet sed lorem ipsum.</p>
            </div>
                    
                    `)
                    const pricing = document.getElementById('pricing');
                    pricing.append(box)
            }
        }
    }); 
}

const btn_enviar = document.getElementById('btn-enviar');
const enviar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    arr.push(nombre, email, mensaje)
    const messageArr = ["Nombre", "Email", "Mensaje"];
    for(i = 0; i < messageArr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
    
}
const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

getData()
btn_enviar.addEventListener("click", enviar)
