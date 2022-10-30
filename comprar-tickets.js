// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

function total_a_pagar()
{
    quitarClaseError();

    if(nombre.value==="")
    {
        alert("Escribir nombre...");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }

    if(apellido.value==="")
    {
        alert("Escribir apellido...");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }

    if(mail.value==="")
    {
        alert("Escribir mail...");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if(!emailValido(mail.value))
     {
        alert("Escribir bien el mail...");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
     }

    if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)))
    {
        alert("La cantidad de Tickets ingresada es incorrecta...");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return ;
    }

    if(categoria.value==="--Seleccione--")
    {
        alert("Seleccione categoría...");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }


    //multiplico total * entradas

    let totalValorTickets=(cantidadTickets.value)*valorTicket;

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }
    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }
    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }
  //  totalPago.innerHTML=totalValorTickets;
    totalPago.value="Total a pagar $ "+totalValorTickets;
  
}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


//Desarrollo funcion 
function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.value="Total a pagar $ ";
}

//boton resumen.
btnResumen.addEventListener("click",total_a_pagar);
//boton borrar.
btnBorrar.addEventListener("click",reset_total_a_pagar);

