import React from 'react';
import Lists from '../Lists/Lists';
import CreateLists from '../Lists/CreateLists';


const ListPage  = () => {
    return (<section>
        <div>
            {[1,2,3,4].map((list) =>
                <Lists key={list} />)}
            <CreateLists />
        </div>
    </section>)
}

export default ListPage;