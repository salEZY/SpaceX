import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const recept = 'Палачинке'
  const sastojak1 = 'јаја'
  const cena1 = 42
  const sastojak2 = 'брашно'
  const cena2 = 50
  const sastojak3 = 'шећер'
  const cena3 = 32

  const recept1 = {
    naziv: 'Palacinke',
    sastojci: [
      {
        naziv: 'jaja',
        cena: 45
      },
      {
        naziv: 'brasno',
        cena: 55
      },
      {
        naziv: 'secer',
        cena: 33
      },
      {
        naziv: 'nutela',
        cena: 60
      },
      {
        naziv: 'banana',
        cena: 20
      }
    ]
  }
  let arr = [cena1,cena2,cena3]
  return (
    <div>
      <Naslov title={recept} />
      <Deo ingredient={sastojak1} price={cena1}/>
      <Deo ingredient={sastojak2} price={cena2}/>
      <Deo ingredient={sastojak3} price={cena3}/>
      <Ukupno arr={arr} />
      <Recept recept={recept1} />
    </div>
  )
}

const Naslov = ({ title }) => {
  return (
  <h1>{title}</h1>
  )
}
const Deo = ({ ingredient, price }) => {
  return (
  <p>{ingredient} - {price}</p>
  )
}
const Ukupno = ({ arr }) => {
  let sum = arr.reduce((a,b) => a + b)
  return (
  <p>Ukupna cena: {sum}</p>
  )
}

const Recept = ({ recept }) => {
  let cene = []
  const sastojci = recept.sastojci.map((el) => {
    cene.push(el.cena)
    return <p> {el.naziv} - {el.cena} </p>
  })
  return (
    <>
    <Naslov title={recept.naziv} />
    <p>{sastojci}</p>
    <Ukupno arr={cene} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

