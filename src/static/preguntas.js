let inicio = '<div class="p-6 border rounded">';
let final = "</div>";
let hora = "";
let fecha = '<input type="date" name="respuesta" min="2020-07-22" max="" value="2021-07-22" />';
let rCorta = '<input class="p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuesta" placeholder="Respuesta corta" >';
let rLarga = '<textarea class="p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuesta" placeholder="Respuesta larga" ></textarea>';
let oUnica = '<div id="radio"><div class="cursor-pointer inline-block px-3 py-2 bg-blue-500 text-white rounded shadow" onclick="resetRadio()">Reset</div><div class="cursor-pointer inline-block px-3 py-2 ml-5 bg-green-500 text-white rounded shadow" onclick="insertRadio()">Agregar</div><div class="my-3 flex g-1"><input type="radio" value="valor" name="respuesta" />'
 +'<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></div><div class="my-3 flex g-1"><input type="radio" value="valor" name="respuesta" /><input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText" placeholder="Valor del radiobutton" ></div></div>';
let oMultiple = '<div id="check"><div class="my-3"><input type="checkbox" value="" name="respuesta[]" /></div></div>';

function cambiarPregunta(e) {
    let el = document.getElementById("RDOM");
    if(e.value == "respuesta-corta") {
        el.innerHTML =  inicio + rCorta + final;
    }
    if(e.value == "respuesta-larga") {
        el.innerHTML = inicio + rLarga + final;
    }
    if(e.value == "opcion-unica") {
        el.innerHTML = inicio + oUnica + final;
    }

    if(e.value == "opcion-multiple") {
        // location.href = "http://localhost:4000/preguntas/crear/om";
        el.innerHTML = inicio + oMultiple + final;
    }

    if(e.value == "hora") {

    }
    if(e.value == "fecha") {
        el.innerHTML = inicio + fecha + final;
    }

    if(e.value == "*") {
        el.innerHTML = "";
    }
}


function resetRadio () {
    let radio = document.querySelectorAll('input[name="respuesta"]');
    console.log(radio, radio.item);
    for(let i=0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}

function insertRadio() {
    let radioPlace = document.getElementById("radio");
    let num = document.querySelectorAll('input[name="respuesta"]').length;
    radioPlace.innerHTML += '<div id="radio-d-' + num + '" class="my-3 flex"><input type="radio" value="" name="respuesta" />' +
    '<input class="ml-3 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" name="respuestaText[]" placeholder="Valor del radiobutton" ><div class="cursor-pointer inline-block px-3 py-2 ml-5 bg-red-500 text-white rounded shadow" onclick="deleteRadio(\'radio-d-' + num + '\')">Borrar</div></div>';
}

function deleteRadio(e) {
    console.log(e);
    document.getElementById(e).remove();
}