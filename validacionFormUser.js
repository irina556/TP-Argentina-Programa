$(document).ready(function(){});


$("#formulario-registro").validate(
    {
        rules:{
            nombre:{
                required:true,
                minlength:3,
                maxlength:20,
            },
            apellido:{
                required:true,
                minlength:3,
                maxlength:40,
                number:false,
            },
            dni:{
                required:true,
                minlength:8,
                maxlength:8,
                number:true
            },
            email:{
                required:true,
                email:true

            },
            localidad:{
                required:true,
                minlength:4,
                maxlength:30
            },
            provincia:{
                required:true
            },
            codigoPostal:{
                required:true,
                minlength:4,
                maxlength:4
            }
        },
        messages:{
            nombre:{
                required: "Este campo es obligatorio",
                minlength: "La cantidad de caracteres debe ser superior a 3",
                maxlength: "La cantidad de caracteres debe ser inferior a 20"
            },
            apellido:{
                required: "Este campo es obligatorio",
                minlength: "La cantidad de caracteres debe ser superior a 3",
                maxlength:"La cantidad de caracteres debe ser inferior a 40"

            },
            dni:{
                required: "Este campo es obligatorio",
                minlength: "Este campo debe contener 8 caracteres",
                maxlength: "Este campo debe contener 8 caracteres",
                number: "Solo puede ingresar números"
            },
            email:{
                required: "Este campo es obligatorio",
                email: "Por favor ingrese un email válido"
            },
            localidad:{
                required: "Este campo es obligatorio",
                minlength: "La cantidad de caracteres es inferior a 4",
                maxlength: "La cantidad de caracteres es superior a 30"
            },
            provincia:{
                required: "Este campo es obligatorio"
            },
            codigoPostal:{
                required: "Este campo es obligatorio",
                minlength: "El código postal no presenta 4 caracteres",
                maxlength: "El codigo postal no presenta 4 caracteres"
            }
        }
    }
);

function subir(event){
    event.preventDefault();
    if($("#formulario-registro").valid()==false){ //si al presionar el boton en el formulario hay errores, entonces retorna esos errores
        return;
    }
    else{
        const nextBtn = document.querySelector("#next-btn");
        const form = document.querySelector("#formulario-registro");
        const resumen = document.querySelector("#resumen");
        const summary = document.querySelector("#summary");


        // recopilar datos del primer paso
        let nombre = document.querySelector("#nombre").value;
        let apellido=document.querySelector("#apellido").value;
        let email = document.querySelector("#email").value;
        let localidad=document.querySelector("#localidad").value;
        let provincia=document.querySelector("#provincia").value;
        
        // mostrar resumen en el segundo paso
        summary.innerHTML = `Nombre: ${nombre}<br>
                            Apellido: ${apellido}<br>
                            Email: ${email}<br>
                            Localidad: ${localidad}<br>
                            Provincia: ${provincia}<br>`;
        
        // ocultar el primer paso y mostrar el segundo paso
        form.style.display = "none";
        resumen.style.display = "block";

        Swal.fire({
            icon:"success",
            text:"Los datos se han cargado correctamente"})
    }
}