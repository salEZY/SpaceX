import React, { useState } from 'react'


const Citati = quotes => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(0)

  let citati = quotes.quotes
  return(
  <div>
  <p>{citati[selected]}</p>
  <p>{votes}</p>
  <button onClick={() => setSelected((selected + 1) % citati.length)}>Next</button>
  <button onClick={() => setVotes(votes + 1)}>Add Vote</button>
  
  </div>
  )
}

export default Citati