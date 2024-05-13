import cssText from "data-text:~style.css"
import { motion } from "framer-motion"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"
import Draggable from "react-draggable"
import Icon from "src/features/icon"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: false
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const variants = {
  expanded: { height: "200px" },
  collapsed: { height: "2.5rem" }
}

const PlasmoOverlay = () => {
  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const btnCss =
    "p-2 rounded-md hover:bg-blue-500 hover:text-white hover:shadow-md"

  const handleDragStart = () => {
    setDragging(true)
  }

  const handleDragStop = () => {
    setDragging(false)
  }

  return (
    <Draggable
      axis="y"
      bounds="body"
      handle=".handle"
      onStart={handleDragStart}
      onStop={handleDragStop}>
      <motion.div
        layout={true}
        className={`z-50 flex fixed top-32 right-3 w-12 transition-all text-black shadow bg-gray-100`}
        style={{
          borderRadius: "8px",
          overflow: "hidden"
        }}
        initial="collapsed"
        animate={hovered || dragging ? "expanded" : "collapsed"}
        variants={variants}
        transition={{ duration: 0.3, ease: "ease-in-out" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        {hovered || dragging ? (
          <div className="flex flex-col justify-between items-center w-full h-full p-2">
            <div
              className="handle"
              style={{
                cursor: "grab",
                textAlign: "center"
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 15">
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M3 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-10 4a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"
                />
              </svg>
            </div>
            <button className={btnCss}>
              <Icon />
            </button>
            <button className={btnCss}>
              <Icon />
            </button>
            <button className={btnCss}>
              <Icon />
            </button>
            <div className="border border-b-1 border-gray-400 w-full my-1"></div>
            <button className={btnCss}>
              <Icon />
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center shadow rounded-lg my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2">
                <rect width="18" height="14" x="3" y="8" rx="2" />
                <path d="M12 5a3 3 0 1 0-3 3m6 0a3 3 0 1 0-3-3m0 0v17m9-7H3" />
              </g>
            </svg>
          </div>
        )}
      </motion.div>
    </Draggable>
  )
}

export default PlasmoOverlay
