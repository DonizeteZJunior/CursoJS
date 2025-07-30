import { useEffect, useRef, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const semTempo = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(semTempo.current);

        semTempo.current = setTimeout(() => {
            setTime((t) => t-1);
        }, 1000);

        if (time <= 0) {
            navigate('/sobre',{
                state: `Esse é o estado: ${Math.random()}`,
            });
        }

        return () => {
            clearTimeout(semTempo.current);
        }
    },[time]);

    return (
        <div>
            <h1>Você vai sair daqui em: {time}</h1>
        </div>
    )
}