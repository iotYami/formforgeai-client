import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Card,CardTitle,CardHeader,CardDescription,CardContent } from "./ui/card";
export function Canvas(){
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            
            try{
                const response = await api.get('/getdata');
                if (response) {
                setData(response.data);
                console.log('Data received from API:', data);
                }
            }catch(error){
                console.error('Error fetching data from API:', error);
            }
        }
        getData();
    }, []);
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
                        {data.map((item, index) => (
                            'type : ' + item['type']+ ' ' + 'name : ' + item['name']
                        ))}
                    
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}