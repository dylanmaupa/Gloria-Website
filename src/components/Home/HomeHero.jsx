import React from 'react'
import Button from '../Button'


const HomeHero = () => {
    return (
        <section id="hero">
            <div className="textBox">
                <h1>The Number <br /> One Flour for <br /> over 100 years!</h1>
                <p>It will rise, and you will shine!</p>
            </div>
            <div className="btns">
                <Button title={"Let's Bake!"} />
                <Button title={'Contact Us'} />
            </div>
        </section>
    )
}

export default HomeHero
