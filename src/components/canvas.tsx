import { Card,CardTitle,CardHeader,CardDescription,CardContent } from "./ui/card";
export function Canvas(){
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

                        <CardContent>
                            
                        </CardContent>

                    </CardHeader>
                </Card>
            </div>
        </div>
    );

}