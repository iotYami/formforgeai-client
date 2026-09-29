import { Card,CardTitle,CardHeader,CardDescription,CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

const input = (name: string) => <Input placeholder={name} />;
const toggle = (name: string) => <input type="checkbox" aria-label={name} />;
const dropdown = (name: string) => (
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
);
export function Canvas(
     {forms}: {forms: {name: string, type: string, id: number}[]}
){

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

                        <ul>
                        {forms.map((item) => (

                            <li key={item.id} className="text-muted-foreground p-4">
                                {'type : ' + item['type']+ ' ' + ', name : ' + item['name']}
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}