
class Task{
    constructor(name, priority, tag){
        this.name =name;
        this.priority = priority;
        this.tag = tag;
        this.status = 'Incompleta';
        this.startDate = Date.now();
        this.endDate = null;
    }

    formatDate(){
        let date = new Date(this.startDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }
}


listaTODO = [];

function agregarTarea(){
    /* Funcion para agregar tareas a la lista */
    let tarea = prompt('Ingresar una tarea a realizar');
    if (tarea != null && tarea != ''){
        listaTODO.push(new Task(tarea));
    }else{
        alert('No se ingreso una tarea valida');
    }

    alert("las tareas a realizar son: \n"+ listaTODO.map(task => task.name).join("\n"));

}
function borrarTarea(){
    /* Funcion para borrar tareas de la lista */
    console.log('Se presiono el boton para borrar tareas')
    if (listaTODO.length == 0){
        alert('No hay tareas para borrar')
        return
    }
    let TareaStr = '';
    for (let i =0; i < listaTODO.length;i++){
        TareaStr += (i + 1) + '- ' + listaTODO[i].name + '\n';
    }
    alert("Las tareas a realizar son: \n" + TareaStr);
    
    let index = prompt( 'Ingrese el numero de la tarea a borrar');

    if (!isNaN(index) && index > 0 && index <= listaTODO.length){
        listaTODO.splice(index - 1,1);
        alert("La tarea se ha eliminado");
    }else{
        alert('El número ingresado es invalido');
    }
}
function verTareas(){
    /* Funcion para ver las tareas de la lista */
    let TareaStr = '';
    console.log('hola hola')
    if (listaTODO.length == 0){
        alert('No hay tareas para mostrar')
        return
    }
    for (let i = 0; i < listaTODO.length; i++){
        TareaStr += (i + 1) + '- ' + listaTODO[i].name + '\n';
    }
    alert("Las tareas a realizar son: \n" + TareaStr);
    return
}
function verTareasCompletas(){
    /* Funcion para ver las tareas de la lista */
    let TareaStr = '';
    console.log('hola hola')
    if (listaTODO.length == 0){
        alert('No hay tareas para mostrar')
        return
    }
    for (let i = 0; i < listaTODO.length; i++){
        TareaStr += (i + 1) + '- ' + listaTODO[i].name + ' |Status:'+ listaTODO[i].status + ' |Creada:'+ listaTODO[i].formatDate() + ' |Fecha de final'+ listaTODO[i].endDate +'\n';
    }
    alert("Las tareas a realizar son: \n" + TareaStr);
    return
}

function BuscasrTareas(){
    let listaFiltrada = [];
    /* Funcion que permite buscar tareas que contengan el texto ingresado, Utilizando filtros*/
    let texto = prompt('Ingrese el texto a buscar')
    // convertir en caso de ser numero a texto
    texto = texto.toString();
    texto = texto.toLowerCase();
    if (texto == null || texto == ''){
        alert("No se ha ingresado ningun texto")
    }else{
        listaFiltrada = listaTODO.filter((tarea) => {
            let tareaNombre = tarea.name.toLowerCase();
            return tareaNombre.includes(texto)
        })
        console.log(listaFiltrada)
    }
    if (listaFiltrada.length == 0){
        alert("No se encontraron tareas que contengan el texto ingresado")
    }else{
        alert("Las tareas son las siguientes: \n" + listaFiltrada.map(task => task.name).join("\n"))
    }
}
function editarFechas(){
    /* Funcion que permite agregar status, fecha de termino */
    let TareaStr = '';
    if (listaTODO.length == 0){
        alert('No hay tareas para editar')
        return
    }
    for (let i = 0; i < listaTODO.length; i++){
        TareaStr += (i + 1) + '- ' + listaTODO[i].name + '\n';
    }
    alert("Las tareas a realizar son: \n" + TareaStr);
    let index = prompt( 'Ingrese el numero de la tarea a editar');
    if (!isNaN(index) && index > 0 && index <= listaTODO.length){
        let status = prompt('Ingrese el status de la tarea');
        let endDate = prompt('Ingrese la fecha de termino de la tarea');
        listaTODO[index - 1].status = status;
        listaTODO[index - 1].endDate = endDate;
        alert("La tarea se ha editado");
    }else{
        alert('El número ingresado es invalido');
    }
        

}

// Agregar eventos cuando se presionen las teclas
window.addEventListener('keydown', function(event) {
    if (event.key == "a"){
        agregarTarea();
    } else if (event.key == "b"){
        borrarTarea();
    } else if (event.key == "l"){
        verTareas();
    } else if (event.key == "L"){
        verTareasCompletas();
    } else if (event.key == "s"){
        BuscasrTareas();
    } else if (event.key == "e"){
        editarFechas();
    }else if (event.key == "q"){
        alert("Esta seguro de salir de la aplicacion, esto hará que las tareas se pierdan");
        let confirmacion = prompt("Ingrese 'si' para salir");
        if (confirmacion == 'si'){
            window.close();
        }else{
            alert("No se ha cerrado la aplicacion");
        }

    }
});

