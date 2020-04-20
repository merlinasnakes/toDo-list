var botonAgregarTarea = document.getElementById("agregarTarea");
botonAgregarTarea.addEventListener("submit", agregarTarea);

function agregarTarea(event) {
  event.preventDefault();
  console.log(event);	
  var tareaNueva = document.getElementById("tareaNueva");
  tareaNueva.addEventListener("click", comprobarInput);

  var tareaUsuario = document.getElementById("tareaNueva").value;

  var nodeLi = document.createElement("li");

  var textoEliminar = document.createTextNode("Eliminar Tarea");
  var nodeButtonEliminar = document.createElement("button");
  nodeButtonEliminar.appendChild(textoEliminar);

  var nodeButtonTachar = document.createElement("button");
  var textoTachar = document.createTextNode("Tarea Realizada");
  nodeButtonTachar.appendChild(textoTachar);

  var textLi = document.createTextNode(tareaUsuario);
  nodeLi.appendChild(textLi);
  nodeLi.appendChild(nodeButtonEliminar);
  nodeLi.appendChild(nodeButtonTachar);
  document.getElementById("listaDeTareas").appendChild(nodeLi);
  nodeButtonEliminar.addEventListener("click", eliminarNodo);
  nodeButtonTachar.addEventListener("click", tacharTareaRealizada);

  var inputUsuario = document.getElementById("tareaNueva");
  inputUsuario.value = "";
  inputUsuario.addEventListener("click", comprobarInput);

  if (tareaUsuario === "") {
    tareaNueva.setAttribute("placeholder", "Agrega una tarea válida");
    tareaNueva.className = "error";
    eliminarNodo();
  }

  function eliminarNodo() {
    nodeLi.parentNode.removeChild(nodeLi);
  }

  function tacharTareaRealizada() {
    nodeLi.classList.toggle("tareaTachada");
  }

  function comprobarInput() {
    inputUsuario.className = "";
    inputUsuario.setAttribute("placeholder", "Agrega tu tarea");
  }
}
