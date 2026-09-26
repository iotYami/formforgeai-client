
import { Forms } from "@/components/forms"
import { AppSidebar } from "./components/app-sidebar"
import {Builder} from '@/components/builder'
import { Canvas } from "./components/canvas"
export function App() {
  return (
    <div className="flex w-full min-h-svh p-6">
      <div className="flex w-full max-w-full min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex w-full min-w-0 flex-col gap-8 md:flex-row">
          <AppSidebar />
          <div className="flex flex-col md:flex-row gap-4">
            <Builder />
          </div>
          <Canvas />
        </div>
      </div>
    </div>
  )
}

export default App
