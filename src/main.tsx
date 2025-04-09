import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import {App} from './App.tsx'
import {Store, StoreContext} from "./store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext value={new Store()}>
      <App/>
    </StoreContext>
  </StrictMode>,
)
