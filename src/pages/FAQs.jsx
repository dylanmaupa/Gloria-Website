import React, { useState } from 'react'
import RecipesHero from '../components/Recipes/RecipesHero'
import data from '../../data/db'

const FAQs = () => {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if(selected == i){
      return  setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <RecipesHero title={'FAQs'} />
      <div className="wrapperAC">
        <div className="accordion">
          {data && data.FAQs.map((faq, i) => {
            return (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{faq.question}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                  <p>{faq.answer}</p>
                  <ul>
                    <li>{faq.point}</li>
                    <li>{faq.point2}</li>
                    <li>{faq.point3}</li>
                    <li>{faq.point4}</li>
                    <li>{faq.point5}</li>
                    <li>{faq.point6}</li>
                    <li>{faq.point7}</li>
                    <li>{faq.point8}</li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FAQs
