import Title from './components/Title'
import Counter from './components/Counter'

import NewYear from './assets/newyear.webp'

import './App.css'

function App() {

  return (
    <div className='App'>
      <div className="container" style={{backgroundImage: `url(${NewYear})`}}>
        <Title title="Contagem regressiva para 2026" />
        <div className="countdown-container">
          <Counter title='Dias' number={2} />
          <Counter title='Horas' number={2} />
          <Counter title='Minutos' number={2} />
          <Counter title='Segundos' number={2} />
        </div>
      </div>
    </div>
  )
}

export default App
