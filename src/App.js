import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';



const App = () => {

    // Obtenemos las tareas guardadas de localstorege
    const tareasGuardadas =
        localStorage.getItem('tareas') ?
        JSON.parse(localStorage.getItem('tareas')) : [];

    // Establecemmos el estado de las tareas, como cambiar las tareas[cambiarTareas] 
    // useState, pones arreglos[] y dentro ponemos objetos
    const [tareas,  cambiarTareas] = useState(tareasGuardadas);

    // Guardando el estado dentro de localStorege
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    // Acceder a  localstorege y comprobamos si mostrarCompletadas es null
    let configMostrarCompletadas = '';
    if (localStorage.getItem('mostrarCompletadas') === null) {
        configMostrarCompletadas = true
    } else {
        configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
    }

    // Estado de mostrarCompletadas
    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

    useEffect(() => {
        localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
    }, [mostrarCompletadas]);

    return (
        <div className='contenedor' >
            <Header
                mostrarCompletadas={mostrarCompletadas}
                cambiarMostrarCompletadas={cambiarMostrarCompletadas}
            />
            <FormularioTareas
                tareas={tareas}
                cambiarTareas={cambiarTareas}
            />
            <ListaTareas
                tareas={tareas}
                cambiarTareas={cambiarTareas}
                mostrarCompletadas={mostrarCompletadas}
            />
        </div>
    );
}

export default App;
