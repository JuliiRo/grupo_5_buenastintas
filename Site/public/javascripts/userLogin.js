window.addEventListener('load', function(){
    console.log('JS vinculado correctamente');

    let formulario =document.querySelector('form#login')
    console.log(formulario)

   
    
    let inputRecordar = formulario.querySelector('input[name="recordar"]')
    let inputPassword= formulario.querySelector('input[name="password"]')
    let inputEmail =formulario.querySelector('input[name="email"]')
    console.log(inputRecordar)

    let errores ={}
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    inputEmail.addEventListener('blur', function(){
    switch (true) {
        case this.value.length === 0:
            errorEmail.innerHTML = "El campo email es obligatorio";
            this.classList.add('is-invalid')
            break;
        case !regExEmail.test(this.value) :
            errorEmail.innerHTML = "El email debe ser valido"
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            errorEmail.innerHTML = ""
            break;
    }
 
})



inputPassword.addEventListener('blur', function(){
    switch(true){
        case this.value.length === 0 :
            errorPassword.innerHTML = "La contraseña es obligatoria";
            this.classList.add('is-invalid')
        break;
        case !regExPassword.test(this.value) :
            errorPassword.innerHTML = "La contraseña debe tener entre 8 y 12 caracteres, una mayúscula una minúscula y un número"
            this.classList.add('is-invalid')
        break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            errorPassword.innerHTML = ""
        break;
    }
})

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    let elementos = formulario.elements



    let error = false
    for (let index = 0; index < elementos.length-2; index++) {
        if(elementos[index].value == 0){
            elementos[index].classList.add('is-invalid');
           error = true;
        }
    }
    if(!error){
        formulario.submit()
    }else{
        msgError.innerHTML = "Los campos señadados son obligatorios"
    }

})
 })
