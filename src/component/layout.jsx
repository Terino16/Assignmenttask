

import Topnavbar from './Topnavbar'
import Footer from './footer';
const layout = ({ children }) => {
    return (
    <div>
        <Topnavbar/>
       
        {children}
      
        <Footer/>
    </div>
        )
  }
  
  export default layout
  