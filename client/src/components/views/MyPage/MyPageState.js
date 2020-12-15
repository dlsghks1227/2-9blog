import React from 'react';
import { connect } from 'react-redux';
import { addName, addIntroduce } from '../../../store/reducer/myinfo';
import MyPageContainer from './MyPageContainer';

function MyPageState({ myinfo, addName, addIntroduce}) {
    const onChangeName = text => addName(text);
    const onChangeIntroduce = text => addIntroduce(text);

    return (
        <MyPageContainer myinfo={myinfo} onChangeName={onChangeName} onChangeIntroduce={onChangeIntroduce}/>
    )
}

export default connect(
    state => ({ myinfo: state.myinfo }),{
        addName,
        addIntroduce,
    }
)(MyPageState);
