
import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"


const spring = { damping: 10, stiffness: 100, restDelta: 0.003 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}


function FollowCursor() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div className="w-10 h-10 bg-apple-gradient rounded-full blur-xl animate-pulse" ref={ref} style={{ x, y }} />
}

export default FollowCursor