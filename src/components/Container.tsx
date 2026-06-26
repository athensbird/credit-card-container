import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { BASE_ENDPOINT } from '../configs';
import CardDetails from './CardDetails';
import { Card, CardList } from '../type';

enum Direction {
    PREV,
    NEXT,
}

const Container = () => {
    const [activeId, setActiveId] = useState<string>("cc-001");

    const [cardList, error, loading] = useFetch<CardList>(`${BASE_ENDPOINT}/cards`);
    const activeCard: Card = cardList?.find(card => card.id === activeId);

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

    const handleKeyPress = (event) => {
        const key = event.key
        if (/^[0-9]$/.test(key)) {
            const newIdx = Number(key) % cardList.length;
            const newCard = cardList[newIdx];
            if(newCard) setActiveId(newCard.id);
        } else if (key === 'ArrowRight' || key === 'Tab') {
            rotateCard(Direction.NEXT);
        } else if (key === 'ArrowLeft') {
            rotateCard(Direction.PREV);
        } 
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {window.removeEventListener('keydown', handleKeyPress)}
    }, [cardList, activeId])

    if (error) return <p>There's an error: {error.message}</p>
    if (loading) return <p>Loading...</p>
    return (
        <div className='container'>
            { /* set key here to tell React to re-render a new card instead of using stale data from last card */}
            {activeCard && <CardDetails key={activeCard.id} {...activeCard} />}
            <div className='buttons'>
                <button aria-label='prev card' onClick={() => rotateCard(Direction.PREV)}>Previous</button>
                <button aria-label='next card' onClick={() => rotateCard(Direction.NEXT)}>Next</button>
            </div>
        </div>
    );
}

export default Container;