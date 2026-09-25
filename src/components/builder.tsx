import {CardHeader, CardContent,CardTitle,CardDescription,Card,CardAction,CardFooter} from "@/components/ui/card"
import {CaseSensitive, Plus,ToggleRight,ChevronDown,PaletteIcon,Square,Circle} from "lucide-react"
import { FieldBuilder } from "@/components/field-builder"
import { useState,useEffect } from "react"

const fields = [
    {
        icon: <CaseSensitive className=" text-primary" />,
        title: "Text Input",
        description: "Short answer field"
    
    },
    {
        icon:<ToggleRight className=" text-primary" />,
        title: "Toggle",
        description: "Switch field"
    },
    {
        icon:<ChevronDown className=" text-primary" />,
        title: "Dropdown",
        description: "Select an option from the dropdown"
    }
]

export function Builder() {
    const colors = [
    '#385503','#FF209595','#f55555'];
const [selectedColor,SelectColor] = useState('--primary');
useEffect(()=>{
    document.documentElement.style.setProperty('--primary',selectedColor)
},[selectedColor]);
const HandleSelect  = (e:string)=> {

    SelectColor(e)
}
  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Builder</h1>
            <p className="text-sm text-muted-foreground">Use the builder to create and customize your forms.</p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle><div className="div fill-primary flex flex-row gap-4">
                    <Plus className=" text-primary" /><span>Add Field</span></div></CardTitle>
                <CardDescription>Start building your form by adding fields below.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    {fields.map((field)=> (
                        <FieldBuilder icon={field.icon} title={field.title} description={field.description}/>
                    ))}   
                </div>
            </CardContent>
            <CardFooter>
                <CardAction>
                </CardAction>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle><div className="div fill-primary flex flex-row gap-4">
                    <PaletteIcon className=" text-primary" /><span>Theme</span></div></CardTitle>
                <CardDescription>Update the primary color live</CardDescription>
            </CardHeader>
            <CardContent>
                
                <div className="div flex flex-col gap-4">
                    <div className="div flex flex-row gap-4">
                        <Square color={selectedColor}/>
                        <span className="text-secondary-foreground">{selectedColor}</span>
                    </div>
                    <div className="div flex flex-col md:flex-row gap-4">
                    {
                        colors.map((color)=>(
                            <Circle color={color} onClick={() => HandleSelect(color)}/>
                        ))
                    }
                </div>
                </div>
            </CardContent>
        </Card>

    </div>
    
  )
}