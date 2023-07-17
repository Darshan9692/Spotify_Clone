import React, { useEffect } from 'react'
import Signin from './components/Signin';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Spotify from './components/Spotify';


function App() {
  const [{ token }, disptch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      disptch({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, disptch]);
  return (
    <div>
      {
        token ? <Spotify /> : <Signin />
      }
    </div>
  )
}

export default App;
