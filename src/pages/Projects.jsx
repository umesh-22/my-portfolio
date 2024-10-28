import { ScrollArea } from "@/components/ui/scroll-area"
import ProjectTimeLine from "../components/timeline/ProjectTimeLine"


const Projects = () => {
  return (
    // <div className="min-h-screen bg-green-300">Projects</div>
    <>
    <ScrollArea>
    <ProjectTimeLine />
    </ScrollArea>
    </>
  )
}

export default Projects