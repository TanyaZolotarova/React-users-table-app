import { createSelector } from 'reselect';

const usersBaseSelector = (state) => state.rows;

const usersRawSelector = createSelector(
    usersBaseSelector,
    (state)=> state.generateUserRowte
);
const filterTextSelector = createSelector(
    usersBaseSelector,
    (state)=> state.filterText
);

const usersSelector = createSelector(
    usersRawSelector,
    (items) => {
        return items.map((user)=>{
            return {...user, name: 'test'};
        });
    }
)

export const usersSearchSelector = createSelector(
    [usersRawSelector, filterTextSelector],
    (items, text) => {
        return items.filter((user)=>user.name.indexOf(text) !== 0);
    }
)