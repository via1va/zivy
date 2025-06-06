import './App.css'
import Catalog from './blocks/catalog'
import FirstBlock from './blocks/firstblock'
import Menu from './components/menu'

function App() {

  return (

    <>
      <div className='container'>
        <Menu />
      </div>
      <FirstBlock />
      <Catalog />
    </>
  )
}

export default App


