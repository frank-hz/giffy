import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  async function handleSearch(value_keyword){
    const API_KEY = "LdrTLadb45xqAGhOEyEaWBMPl9pIy3CL";
    const API_URL = "api.giphy.com/v1/gifs/search";
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${value_keyword}&limit=15`);
    const result = await response.json();

    setResult(result.data)
    console.log(result.data);
  }

  return (
    <>
      <div className='p-5'>
        <input type="text" onInput={e => handleSearch(e.target.value)} />

        <div className="w-full flex wrap">
          {
            result 
            ? result.map(
              item => (<img key={item.id} className="h-auto max-w-xs" src={item.images.fixed_height.url} alt="image description"></img>)
            )
            : 'No Data'
          }
        </div>

      </div>
    </>
  )
}

export default App
