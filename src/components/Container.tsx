import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { BASE_ENDPOINT } from '../configs';
import CardDetails from './CardDetails';

enum Direction {
    PREV,
    NEXT,
}

const Container = () => {
    const [activeId, setActiveId] = useState("cc-001");
    const [privacyMode, togglePrivacyMode] = useState(false);

    const [cardList, error, loading] = useFetch(`${BASE_ENDPOINT}/cards`);
    const activeCard = cardList?.find(card => card.id === activeId);

    useEffect(() => {
        togglePrivacyMode(false);
    }, [activeId])

    const rotateCard = (dir: Direction) => {
        if (!cardList.length) return;
        const curIdx = cardList.findIndex(card => card.id === activeId);
        const safeIdx = curIdx === -1 ? 0 : curIdx;
        let nextIdx: number;
        if (dir === Direction.PREV) {
            nextIdx = safeIdx !== 0 ? safeIdx - 1 : cardList.length - 1;
        } else {
            nextIdx = (safeIdx + 1) % cardList.length;
        }
        const newCard = cardList[nextIdx];
        if(newCard) setActiveId(newCard.id);
    }

    if (error) return <p>There's an error: {error.message}</p>
    if (loading) return <p>Loading...</p>
    return (
        <div className='container'>
            {activeCard && <CardDetails 
                isPrivacyMode={privacyMode}
                togglePrivacy={() => togglePrivacyMode(isPrivacy => !isPrivacy)}
                {...activeCard}
            />}
            <div className='buttons'>
                <button onClick={() => rotateCard(Direction.PREV)}>Previous</button>
                <button onClick={() => rotateCard(Direction.NEXT)}>Next</button>
            </div>
        </div>
    );
}

export default Container;