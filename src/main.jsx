import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome.jsx'
import Footer from './components/Footer.jsx'
import AllTheBooks from './components/AllTheBooks.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <MyNav />
  <Welcome />
  <AllTheBooks />
   <Footer />
 
  </>
   )
