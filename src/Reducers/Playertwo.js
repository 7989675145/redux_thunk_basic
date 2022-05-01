const initialState = {
    name : 'Roshan',
    score : 90
}
export default function PlayeroneReducer(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case 'INC_PLAYERTWO_SCORE':
            return {...state,score:state.score+1}
        case 'DEC_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;
    }
}