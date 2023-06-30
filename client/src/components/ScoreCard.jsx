import React from 'react'

const ScoreCard = ({ title, desc }) => {
  return (
    <div className='score-card'>
      <h1>{title}</h1>
      <p className='font-medium'>{desc}</p>
    </div>
  )
}

export default ScoreCard