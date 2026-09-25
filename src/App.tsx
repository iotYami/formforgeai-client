
import { Forms } from "@/components/forms"
import { AppSidebar } from "./components/app-sidebar"
import {Builder} from '@/components/builder'
export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-full min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex flex-row gap-4">
          <AppSidebar className="flex flex-1" />
          <div className="flex flex-col md:flex-row gap-4">
            <Builder />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
