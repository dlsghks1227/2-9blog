import React, 
{ 
    useState 
} from 'react';
import 
{ 
    useParams 
} from 'react-router-dom';
import Nav from '../Nav/Nav'
import Header from '../Header/Header';
import UserContainer from './UserContainer';
import Footer from '../Footer/Footer';


function UserPage() {
    const [isClicked, ClickOrNot] = useState(false);
    const navBtnClicked = ()=>{
        ClickOrNot(!isClicked);
    }
    const { username } = useParams()

    return (
        <div>
            <UserContainer username={username}/>
        </div>
    )
}

export default UserPage
