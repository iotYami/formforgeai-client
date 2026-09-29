import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Card,CardTitle,CardHeader,CardDescription,CardContent } from "./ui/card";

type CanvasItem ={
    name : string,
    type:string,
    id:number
}
export function Canvas(){
    const [data , setData] = useState<CanvasItem[]>([]);
    async function getData() {
            
            try{  
                const response = await api.get<CanvasItem[]>('/getdata');
                if (response) {
                setData(response.data);
                console.log('Data received from API:', response.data);
                }
            }catch(error){
                console.error('Error fetching data from API:', error);
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
        <div className="flex min-w-0 flex-1 flex-col gap-4 pl-3.5">
            <div className="text-xl text-muted-foreground">CANVAS</div>
            <div className=" text-2xl text-secondary-foreground">Form Preview</div>
            <div className="pl-3">
                <Card>
                    <CardHeader>
                        <CardTitle>
                           /preview/form/live_preview
                        </CardTitle>
                        <CardDescription>
                            your form is previewing here
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        this is the list of items :
                        {data.map((item) => (
                            'type : ' + item['type']+ ' ' + 'name : ' + item['name']
                        ))}
                    
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}