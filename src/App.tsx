import { AppSidebar } from "./components/app-sidebar"
import {Builder} from '@/components/builder'
import { Canvas } from "./components/canvas"
import { useState , useEffect } from "react"
import { api } from "./lib/axios"
import { InputDialog } from "./components/inputdialog"
type CanvasItem ={
    name : string,
    type:string,
    id:number,
}

export function App() {
  // state for the input value from the input dialog
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState(""); 
  const [type, setType] = useState(""); 



  // data handling for the canvas items
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
        );
        setType(type);
    }
    
  return (
    <div className="flex w-full min-h-svh p-6">
      <div className="flex w-full max-w-full min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex w-full min-w-0 flex-col gap-8 md:flex-row">
          <AppSidebar />
          <div className="flex flex-col md:flex-row gap-4">
            <Builder onchange={onChange} setOpen={setOpen} />
          </div>
          <Canvas forms={error ? [{name: 'Error', type: 'Error', id: -1}] : (loading? [{name: 'Loading', type: 'Loading', id: -1}] : data)} inputValue={inputValue} setInputValue={setInputValue} setOpen={setOpen} open={open} />
          <InputDialog name="Input Name" description="Input Description" inputValue={inputValue} setInputValue={setInputValue} open={open} setOpen={setOpen} type={type} />
        </div>
      </div>
    </div>
  )
}

export default App
