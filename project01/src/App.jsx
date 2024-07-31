import './App.css'
import Button from './components/Button'
import QuestionCard from './components/QuestionCard'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  


  return (
    <>
      <QuestionCard title="Question1" option="op1"/>
      <SpeedInsights />
    </>
  )
}

export default App
