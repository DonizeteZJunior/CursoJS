import { useLocation } from 'react-router-dom'
import './style.css'

export const Sobre = () => {
    const location = useLocation();
    const {state} = location;

    return (
        <div>
            <h1>Sobre</h1>
            <p>{state}</p>
        </div>
    )
}