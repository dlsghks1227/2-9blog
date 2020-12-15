const NAME = 'myinfo/NAME';
const INTRODUCE = 'myinfo/INTRODUCE';
const PROFILE_PHOTO = 'myinfo/PROFILE_PHOTO';

export const addName = text => ({
    type: NAME,
    name: text
});

export const addIntroduce = text => ({
    type: INTRODUCE,
    intro: text
})


const initialState = {
    name: "",
    intro: "",
}

export default function myinfo(state = initialState, action) {
    switch(action.type) {
        case NAME:
            return {
                ...state,
                name: action.name
            }
        case INTRODUCE:
            return {
                ...state,
                intro: action.intro
            }
        default:
            return state
    }
}