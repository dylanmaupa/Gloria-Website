import React from 'react'
import data from '../../../data/db'
import { Link } from 'react-router-dom'

const HomeRecipes = () => {
  return (
    <section id='recipes'>
      <h2>Explore Our <br /> Recipes</h2>

      <div className="wrapper">
        {data && data.recCards.map(card => {
            return(
                <div className="card">
                    <div className="img">
                        <img src={card.icon} alt="" />
                    </div>
                    <div className="textBox">
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                        <Link>{card.link}</Link>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default HomeRecipes
