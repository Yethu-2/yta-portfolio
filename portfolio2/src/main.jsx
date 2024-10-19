import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CenteredElementGrid from './Grid.jsx'
import App from './App.jsx'
import App2 from './App2.jsx'
import RecipeReviewCard from './Card.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
    {/* <App />
    <CenteredElementGrid />
    <RecipeReviewCard /> */}
  </StrictMode>,
)
