import React from 'react'
import Button from '../shareComponents/BUTTON/Button'
import './index.css'
function Index() {
    return (
        <div className='intro'>
            <p className='title FONT'>
                Only Quality food
            </p> 
            <p className='sub__title FONT'> Explore the authentic vegan dishes with your friends and family</p>
       <Button  name={"View Menu"}/> 
       <Button name={"Reservation"}/>
        </div>
    )
}

export default Index
