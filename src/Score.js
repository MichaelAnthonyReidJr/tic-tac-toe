import React from 'react'
import './Score.css'


export const Score= ({ scores, currentPlayer }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="score">
      <span className={`score x-score ${!currentPlayer  && "inactive"}`}> X - {xScore}</span>
      <span className={`score o-score ${currentPlayer  && "inactive"}`}>  O - {oScore}</span>
    </div>
  )
}