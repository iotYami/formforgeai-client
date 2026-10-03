import { TextCursorInput , ChevronDown, SwitchCameraIcon } from "lucide-react";
import { useState } from "react";
import { Card,CardTitle,CardHeader,CardDescription,CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Toggle } from "./ui/toggle";




const input = (name: string) => <div className="flex flex-row gap-4"><TextCursorInput className="text-primary" / ><Input placeholder={name} /></div>
const toggle = (name: string) => <Toggle className='sm' variant='outline'> <SwitchCameraIcon className="text-primary"></SwitchCameraIcon>{name}</Toggle>
const dropdown = (name: string) => (
    
    <div className="flex flex-row gap-4">
        <ChevronDown className="text-primary"></ChevronDown>
        <Select>
        <SelectTrigger aria-label={name}>
            <span className="text-muted-foreground">
                {name}
            </span>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="option-1">Select an option</SelectItem>
            <SelectItem value="option-2">Another option</SelectItem>
        </SelectContent>    
    </Select>
    </div>
    
);
export function Canvas(
     {forms,inputValue,setOpen,open}: {forms: {name: string, type: string, id: number}[], inputValue: string, setInputValue: React.Dispatch<React.SetStateAction<string>>, setOpen: React.Dispatch<React.SetStateAction<boolean>>, open: boolean}
){
    // const [open, setOpen] = useState(false);
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
                        <div className="flex flex-col p-4 gap-4">
                            {forms.map((item) => (
                                item.type==='Input' ? input(item.name) : item.type==='Toggle' ? toggle(item.name) : item.type==='Dropdown' ? dropdown(item.name) : null
                            ))}

                        </div>

                       
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}