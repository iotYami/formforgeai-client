import { AppSidebar } from "./components/app-sidebar"
import {Builder} from '@/components/builder'
import { Canvas } from "./components/canvas"
import { useState , useEffect } from "react"
import { api } from "./lib/axios"

type CanvasItem ={
    name : string,
    type:string,
    id:number
}

export function App() {
  const [data , setData] = useState<CanvasItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
    async function getData() {
      
            try{
                setLoading(true);
                const response = await api.get<CanvasItem[]>('/getdata');
                if (response) {
                setData(response.data);
                setError(null);
                setLoading(false);
                console.log('Data received from API:', response.data);
                }
            }catch(error){
                console.error('Error fetching data from API:', error);
                setError('Error fetching data from API');
            } finally {
                setLoading(false);
            }
        }
    useEffect(() => {getData();}, []);
    const onChange= (name:string , type:string, id:number)=> {
        setData((prevData)=>[
            ...prevData,
            {'name':name,'type':type,'id':id}
        ]
    )
    }
    
  return (
    <div className="flex w-full min-h-svh p-6">
      <div className="flex w-full max-w-full min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex w-full min-w-0 flex-col gap-8 md:flex-row">
          <AppSidebar />
          <div className="flex flex-col md:flex-row gap-4">
            <Builder onchange={onChange} />
          </div>
          <Canvas forms={error ? [{name: 'Error', type: 'Error', id: -1}] : (loading? [{name: 'Loading', type: 'Loading', id: -1}] : data)} />
        </div>
      </div>
    </div>
  )
}

export default App
