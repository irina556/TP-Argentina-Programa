$.getScript("jspdf.min.js");
$(document).ready(function(){});


$("#formulario-reclamo").validate(
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
            
            email:{
                required:true,
                email:true

            },
            motivo:{
                required:true
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
            email:{
                required: "Este campo es obligatorio",
                email: "Por favor ingrese un email válido"
            },
            motivo:{
                required: "Este campo es obligatorio"
            }
            
        }
    }
);

function subir(event){
    event.preventDefault();
    if($("#formulario-reclamo").valid()==false){ //si al presionar el boton en el formulario hay errores, entonces retorna esos errores
        return;
    }
    else{
        const nextBtn = document.querySelector("#next-btn");
        const form = document.querySelector("#formulario-reclamo");
        const resumen = document.querySelector("#resumen");
        const summary = document.querySelector("#summary");


        // recopilar datos del primer paso
        let nombre = document.querySelector("#nombre").value;
        let apellido=document.querySelector("#apellido").value;
        let email = document.querySelector("#email").value;
        let motivo = document.querySelector("#motivo").value;
        let mensaje=document.querySelector("#exampleFormControlTextarea1").value;
        
        
        // mostrar resumen en el segundo paso
        summary.innerHTML = `Nombre: ${nombre}<br>
                            Apellido: ${apellido}<br>
                            Email: ${email}<br>
                            Motivo del reclamo: ${motivo}<br>
                            Mensaje: ${mensaje}<br>`;
                            genPDF(nombre,apellido,email,motivo,mensaje)
        
        // ocultar el primer paso y mostrar el segundo paso
        form.style.display = "none";
        resumen.style.display = "block";
        Swal.fire({
            icon:"success",
            text:"Los datos se han cargado correctamente. En breve nos comunicaremos con usted para atender su reclamo"})
    }
    function genPDF(nombre,apellido,email,motivo,mensaje){
        var doc=new jsPDF();
        doc.text(20,20,"Nombre: " + nombre);
        doc.text(20,40,"Apellido: " + apellido);
        doc.text(20,60,"Email: " + email);
        doc.text(20,80,"Motivo: " + motivo);
        doc.text(20,100,"Mensaje: "+ mensaje);
        doc.save('FormularioReclamo.pdf');
        
    }

}