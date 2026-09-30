import { Card, CardDescription, CardTitle } from '@/components/ui/card'
type FieldBuilderProps = {
    icon: React.ReactNode,
    title: string,
    description: string,
    onchange: (name: string, type: string, id: number) => void,
    name: string,
    type: string,
    id: number,
}
export function FieldBuilder({icon,title,description,onchange,name,type,id}:FieldBuilderProps) {
  return (
    <div className="div flex flex-col p-4">
        <Card>
            <div className="div flex flex-row gap-4 items-center "  onClick={() => onchange(name, type, id)}>
                <div className="div flex text-primary text-xl p-4 ">
{icon}
                </div>
                
                <div className="div flex flex-col ">
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardDescription className='text-muted-foreground'>
                        {description}
                    </CardDescription>
                </div>

            </div>
        </Card>
    </div>
  )
}