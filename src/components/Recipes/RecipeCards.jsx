import React from 'react'
import data from '../../../data/db'
import { Link } from 'react-router-dom'

const RecipeCards = () => {
    return (
        <div className='recipesWrapper'>
            {data && data.recipes.map(item => {
                return (
                    <div className="card">
                        <div className="img">
                            <img src={item.icon} alt="" />
                        </div>
                        <div className="textBox">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <Link>{item.link}</Link>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default RecipeCards
