
import { Button } from "./ui/button"
import { Dialog,DialogHeader,DialogTitle,DialogDescription,DialogContent,DialogFooter, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Field } from "./ui/field"
import { Label } from "./ui/label"
// import {open, setOpen} from "./canvas"
import { useState } from "react"
import React from "react"
import {api} from '../lib/axios'


export function InputDialog({name,description,inputValue,setInputValue,open,setOpen,type}: {name: string,description: string,inputValue: string,setInputValue: React.Dispatch<React.SetStateAction<string>>,open: boolean,setOpen: React.Dispatch<React.SetStateAction<boolean>>,type: string}){
    const [elements, setElements] = useState<string[]>(['']);
    const [numOfElements,setnumOfElements] = useState<number>(0)
    
    const handlesubmit = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInputValue(e.target.value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        api.post('/adddata', { name: inputValue, type: type })
            .then(() => setOpen(false))
            .catch((error) => console.error(error));
    }
    const addField = ()=> {
        setnumOfElements(numOfElements+1)
    }
    
    return (
        <Dialog open={open} onC>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <Field>
                    <Label htmlFor="input" className="text-primary">the name of {name}</Label>
                    <Input className="text-primary" onChange={handlesubmit} 
                        id="input"
                        type="text"/>
                    </Field>
                    {type==='Dropdown' && (
                        <Button onClick={addField}>Add a field</Button>
                    )}
                    {Array(numOfElements).map(()=> (
                        <Input className="text-primary" onChange={handlesubmit} 
                        id="input"
                        type="text"/>
                    ))}
                    <DialogFooter className="p-5">
                        <Button type="submit" variant="outline">Submit</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}