import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import { setAtiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

HomePage.propTypes = {
    
};

const randomHobbyID = ()=>{    
    return 1000 + Math.trunc(Math.random()*9000);
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state=> state.hobby.activeId);
    const dispatch  = useDispatch();
    console.log("hobbyList: ", hobbyList);

    const handleAddHobbyList = ()=>{
            const newID = randomHobbyID();
            const newHobby = {
                id: newID,
                title: `Hobby ${newID}`
            }
            console.log("new Hobby",newHobby);
   
        // Dispatch action to add a new hobby to Redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby) =>{
        const action = setAtiveHobby(hobby) ;
        console.log("active in ", hobby);
        const liItem  = document.querySelector(".active");
        console.log(liItem);
        dispatch(action);

    }
    return (
        <div className= "home-page">
             <button onClick = {handleAddHobbyList}>Random Hobby</button>
            <h1>Redux - react</h1>
           <HobbyList
            hobbyList = {hobbyList}
            activeId = {activeId}
            onHobbyClick = {handleHobbyClick}
           ></HobbyList>
        </div>
    );
}

export default HomePage;


