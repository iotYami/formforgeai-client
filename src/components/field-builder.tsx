import {Card,CardHeader,CardContent,CardTitle,CardDescription} from '@/components/ui/card'
export function FieldBuilder({icon,title,description}) {
  return (
    <div className="div flex flex-col">
        <Card>
            <div className="div flex flex-row gap-4 items-center">
<CardTitle>
                </CardTitle>
                <div className="div flex text-primary text-xl ">
{icon}
                </div>
                
                <div className="div flex flex-col">
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