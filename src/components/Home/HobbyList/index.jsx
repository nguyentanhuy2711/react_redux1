import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeID: PropTypes.number,
    onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
    hobbyList : [],
    activeID : null,
    onHobbyClick : null,
};

 
function HobbyList(props) {
    const {hobbyList, activeID, onHobbyClick} = props;
    const handleOnClick = (hobby) =>{
        if(onHobbyClick) {
            return onHobbyClick(hobby);        
        }
    }
    return (
        <ul className = "hobby-list">
            {hobbyList.map(item => (
                <li 
                  key = {item.id}
                  onClick = {()=> {handleOnClick(item)}}
                  className = {item.id === activeID ? 'active' : 'hello'}
                >{item.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList;