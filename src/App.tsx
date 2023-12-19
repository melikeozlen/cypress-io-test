import Title from './components/title'

const App = () => {
  return (
    <div>
      <Title title={"Hello"} onSmthngHappen={(name)=>console.log(name)}/>
    </div>
  )
}

export default App