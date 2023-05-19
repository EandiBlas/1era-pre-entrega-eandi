import './ModeView.css'
import { useState } from 'react'

const ModeView = () => {

    const [modeDark, SetDarkMode] = useState(false);

    const changeMode = () => {
        SetDarkMode(!modeDark);
    }

    const estilo = modeDark ? "dark" : "white";

    return (
        <div className={estilo}>
            <button onClick={ changeMode } >Cambiar Vista</button>
            <h2>Cambiar Vista</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam id in voluptas explicabo voluptatum voluptatem doloremque, impedit dolores velit ipsa ea quae quisquam cupiditate qui incidunt non commodi eveniet!</p>
        </div>
    )
}

export default ModeView