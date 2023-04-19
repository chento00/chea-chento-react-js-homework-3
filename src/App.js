import { useState ,useEffect} from 'react';
import './App.css';
import Skeleton from './components/utils/Skeleton';
import ProductCard from './components/utils/ProductCard';
export default function App() {
  const [data,SetData]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      fetch("https://api.escuelajs.co/api/v1/products").then(respone=>respone.json()).then(data=>{
        SetData(data);
        setIsLoading(false);
      })
    },[])
    
  return (
    <>
      <div className='grid grid-cols-4'>
        {isLoading?<Skeleton/>:data.map((item,index)=>(
            <ProductCard index={index} title={item.title} description={item.description} image={item.images[0]}  />
        ))
        }
      </div>
    </>
  )
}