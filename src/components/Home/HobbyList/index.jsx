import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
    hobbyList : [],
    activeId : null,
    onHobbyClick : null,
};

 
function HobbyList(props) {
    const {hobbyList, activeId, onHobbyClick} = props;
    const handleClick = (hobby) =>{
        if(onHobbyClick)  return onHobbyClick(hobby);
        
    }
    return (
        <ul className = "hobby-list">
            {hobbyList.map(item => (
                <li 
                  key = {item.id}
                  className = {item.id === activeId ? 'active' : 'hello'}
                  onClick = {()=> {handleClick(item)}}
                >{item.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList;