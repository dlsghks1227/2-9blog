import React from 'react';
import ListCard from './ListCard';
import CreateCard from './CreateCard';

const Lists = () => {
    return <div>
        <div>
            <div>
                <input type="text" />
            </div>
            <ul>
                {[1,2,3,4].map((card, i) => <ListCard key={card} />)}
            </ul>
            <CreateCard />
        </div>
    </div>
}

export default Lists;