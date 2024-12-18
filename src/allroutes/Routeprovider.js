 import { RouterProvider } from 'react-router-dom'
import routes from './routes'


 export default function Routeprovider(){
    return (
        <div>
          <RouterProvider router={routes}/>
    
        </div>
    )
 }