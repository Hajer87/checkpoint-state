import React from 'react'
import '../style/Person.css'
import hajer from "../images/hajer.jpg";
import propTypes from 'prop-types'

function Person (props) {
      
       return(
        <div className='profile'> 
        <img style={{ broder:'solids 2 balck', padding:'50'}}src={props.imgSrc} alt ='person photo'></img>
        <div>
        <span className='fields'>FullName</span><span className='fullName'>{props.fullName}</span>        
         <br/>
          <span className='fields'>Biographie</span>
           <span>{props.bio}</span>
           <br/>
           <span className='fields'> Profession</span>
           <span> {props.profession}   </span>
           </div>
      </div>
            )
      }
     

export default Person;

Person.propTypes ={
      fullName: propTypes.string,
      bio: propTypes.string,
      profession: propTypes.string,
      imgSrc: propTypes.string
}