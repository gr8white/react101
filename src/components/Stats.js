import React from 'react'

const Stats = (props) => {
  
  const totalPlayers = props.players.length

  const totalScore = props.players.reduce((total, player) => {
    return total + player.score
  }, 0) //the 0 represents the starting value when this function is called
  
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats