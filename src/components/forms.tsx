import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
export function Forms() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Enter email" />
      <Input placeholder="Enter password" type="password" />
      <Button type="submit">Submit</Button>
    </div>
  );
}