import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler from "./components/ThemeToggler"

import { useTheme } from "./store/ThemeContext"

function App() {

  const { theme } = useTheme()

  const sections = [
    { id: "basic", label: "Basic Props", icon: "🔧" },
    { id: "children", label: "Children Props", icon: "🧩" },
    { id: "complex", label: "Complex Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🎯" },
    { id: "theme", label: "Theme Context", icon: "🎨" }
  ]

  const themeStyles = {
    light: "bg-gray-100 text-gray-900",
    dark: "bg-gray-900 text-white"
  }

  return (
    <div className={`min-h-screen transition ${themeStyles[theme]}`}>

      <div className="flex flex-col items-center p-10 gap-6">

        {/* Navigation Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">

          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth"
                })
              }
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <span className="font-medium">{section.label}</span>
              <span>{section.icon}</span>
            </button>
          ))}

        </div>

        {/* Sections */}
        <div className="space-y-12 max-w-5xl w-full">

          <div id="basic" className="scroll-mt-32">
            <BasicProps />
          </div>

          <div id="children" className="scroll-mt-32">
            <ChildrenProps />
          </div>

          <div id="complex" className="scroll-mt-32">
            <ComplexProps />
          </div>

          <div id="ref" className="scroll-mt-32">
            <RefProps />
          </div>

          <div id="theme" className="scroll-mt-32">
            <ThemeToggler />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App