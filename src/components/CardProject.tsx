import { useEffect, useState } from "react";
import { Project } from "../types"

type CardProjectProps = {
    item: Project
}

function CardProject({ item }: CardProjectProps) {

  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const randomSeed = Math.floor(Math.random() * 1000); // Opcional: para randomizar
    const imageUrl = `https://picsum.photos/seed/${randomSeed}/2000`;
    setImage(imageUrl);
  }, []);

  return (
    <button className="w-full h-full rounded-4xl">
      <img src={image} alt="" className="w-full h-full object-cover rounded-4xl" />
    </button>
  )
}

export default CardProject