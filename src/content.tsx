import cssText from "data-text:~style.css"
import { motion } from "framer-motion"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"
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
  expanded: { height: "auto" },
  collapsed: { height: 2.5 + "rem" }
}

const PlasmoOverlay = () => {
  const [hovered, setHovered] = useState(false)
  const btnCss = "p-2 rounded-md hover:bg-blue-500 hover:text-white"

  return (
    <motion.div
      layout={true}
      initial="collapsed"
      animate={hovered ? "expanded" : "collapsed"}
      variants={variants}
      transition={{ duration: 0.3, ease: "linear" }}
      className={`z-50 flex fixed top-32 right-3 w-12 transition-all text-black shadow bg-gray-100`}
      style={{
        borderRadius: "8px"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <div className="flex flex-col justify-between items-center w-full h-full overflow-hidden p-2">
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
  )
}

export default PlasmoOverlay
