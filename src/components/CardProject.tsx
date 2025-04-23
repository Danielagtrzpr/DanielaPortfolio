import { Project } from "../types"

type CardProjectProps = {
    item: Project
}
function CardProject({ item }: CardProjectProps) {
  return (
    <button className={`bg-[url(${item.image})] bg-cover bg-center bg-no-repeat w-full h-full rounded-4xl`}>
        
    </button>
  )
}

export default CardProject