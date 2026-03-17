import { useTheme } from "../store/ThemeContext"

const ThemeToggler = () => {

  const { theme, toggleTheme } = useTheme()

  const themeStyles = {
    light: "bg-gray-100 text-gray-800",
    dark: "bg-gray-900 text-white"
  }

  return (
    <section className={`p-8 rounded-2xl shadow-lg transition ${themeStyles[theme]}`}>

      <h2 className="text-3xl font-bold mb-4">
        Theme Context API
      </h2>

      <p className="mb-6 leading-relaxed">
        The Context API allows global state to be shared across the entire
        application without passing props manually through every component.
        Here we use a <code>ThemeContext</code> to manage light and dark mode.
      </p>

      <div className="flex items-center gap-4">

        <button
          onClick={toggleTheme}
          className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Toggle Theme
        </button>

        <span className="text-sm font-medium">
          Current Theme: {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </span>

      </div>

      <div className="mt-6 p-4 rounded-lg border border-gray-300">
        <p>This section reacts to the global theme context.</p>
      </div>

    </section>
  )
}

export default ThemeToggler