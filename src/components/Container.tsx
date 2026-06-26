import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { BASE_ENDPOINT } from '../assets/configs';
import CardDetails from './CardDetails';

const Container = () => {
    const [activeId, setActiveId] = useState("cc-001");
    const [privacyMode, togglePrivacyMode] = useState(false);

    const [cardList, error, loading] = useFetch(`${BASE_ENDPOINT}/cards`);
    const activeCard = cardList?.find(card => card.id === activeId);

    console.log({cardList});

    if (error) return <p>There's an error: {error.message | 'unknown error'}</p>
    if (loading) return <p>Loading...</p>
    return (
        <div className='container'>
            {activeCard && <CardDetails {...activeCard}/>}
        </div>
    );
}

export default Container;