window.addEventListener('load', function(){
    console.log('JS vinculado correctamente');

    let formulario = this.document.querySelector('form#register')

    let inputName = formulario.querySelector('input[name="name"]')
    let inputLast_name = formulario.querySelector('input[name="last_name"]')
    let inputEmail =formulario.querySelector('input[name="email"]')
    // let inputDate = formulario.querySelector('input[name="date"]')
    let inputPhoto = formulario.querySelector('input[name="photo"]')
    let inputPhone = formulario.querySelector('input[name="phone"]')
    let inputPassword =formulario.querySelector('input[name="password"]')
    let inputBases = formulario.querySelector('input[name="bases"]')

    let errores ={}
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputName.addEventListener('blur', function(){
        switch(true){
            case this.value.length === 0:
                errorName.innerHTML = "El nombre es obligatorio";
                this.classList.add('is-invalid')
            break;
            case this.value.trim().length <=2:
                errorName.innerHTML = "Tenes que poner al menos dos caracteres";
                this.classList.add('is-invalid')
            break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorName.innerHTML = ""
            break;
        }
    })
    inputLast_name.addEventListener('blur',function(){
        switch (true){
            case this.value.length === 0 :
                errorLast_name.innerHTML = "El apellido es obligatorio";
                this.classList.add('is-invalid')
            break;
            case this.value.trim().length <=2 :
                errorLast_name.innerHTML = "Tenes que poner al menos dos caracteres";
                this.classList.add('is-invalid')
            break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorLast_name.innerHTML =""
            break;
        }
    })

    inputEmail.addEventListener('blur', function(){
        switch (true){
            case this.value.length === 0:
                errorEmail.innerHTML ="El campo email es obligatorio";
                this.classList.add('is-invalid')
            break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML ="Debes escribir un email valido"
                this.classList.add('is-invalid')
            break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
            break;
        }
    })

    inputDate.addEventListener('blur', function(){
        switch(true){
            case this.value === 0 :
                errorDate.innerHTML = "La fecha es obligatoria";
                this.classList.add('is-invalid')
            break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDate.innerHTML = ""
            break;
        }
    })
    
    inputPhoto.addEventListener('change', function(){
        switch (true){
            case !regExExtensions.exec(this.value) :
                errores.photo = "Solo imagenes con extension jpg, jpeg, png, o gif";
                errorPhoto.innerHTML= errores.photo;
                this.classList.add('is-invalid')
                this.value ="";
            break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPhoto.innerHTML = " ";
            break;
        }
    })

    
    inputPhone.addEventListener('blur',function(){
        switch (true){
            case this.value.trim().length <=8 :
                errorPhone.innerHTML = "Debes ingresar un número de telefono";
                this.classList.add('is-invalid')
            break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPhone.innerHTML = ""
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

    formulario.addEventListener('submit' , function(e){
        e.preventDefault();
        let elementos = formulario.elements
        if(inputBases.checked == false){
            inputBases.classList.add('is-invalid');
            errorBases.innerHTML = "Debe de aceptar las bases y condiciones"
        }
        let error = false;
        for(let i=0 ; i<elementos.length-1 ; i++) {
            if(elementos[i].value == 0 && i!=9 && i!=10){
                elementos[i].classList.add('is-invalid');
                error=true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }
    })
})