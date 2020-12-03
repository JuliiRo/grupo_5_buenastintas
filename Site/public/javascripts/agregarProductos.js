window.addEventListener('load', function(){
    console.log('JS vinculado correctamente');
    let formulario = this.document.querySelector('form#agregarProducto');

    let inputPrecio = formulario.querySelector('input[name="precio"]');;
    let textareaDescripcion = formulario.querySelector('textarea[name="descripcion"]');
    let inputImage = formulario.querySelector('input[name="image"]');

    let errores ={};
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputPrecio.addEventListener('blur', function(){
        switch (true) {
            case this.value.length === 0:
                errorPrecio.innerHTML = '*El precio es obligatorio'
                this.classList.add('is-invalid')
                break;
        
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorPrecio.innerHTML = ""
                break;
        }
    })
    textareaDescripcion.addEventListener('blur', function(){
        switch (true) {
            case this.value.length === 0:
                errorDescripcion.innerHTML = '*La descripción es obligatorio'
                this.classList.add('is-invalid')
                break;
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorDescripcion.innerHTML = ""
                break;
        }
    })
    inputImage.addEventListener('change', function(){
        switch (true){
            case !regExExtensions.exec(this.value) :
                errores.image = "*Solo imagenes con extension jpg, jpeg, png, o gif";
                errorImage.innerHTML= errores.image;
                this.classList.add('is-invalid')
                this.value ="";
            break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorImage.innerHTML = " ";
            break;
        }
    })

})