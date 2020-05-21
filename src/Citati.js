import React, { useState } from 'react'


const Citati = quotes => {
  const [selected, setSelected] = useState(0)

  let citati = quotes.quotes
  return(
  <div>
  <p>{citati[selected]}</p>
  <button onClick={() => setSelected((selected + 1) % citati.length)}>Next</button>
  </div>
  )
}

export default Citati