import { useRef, forwardRef } from "react"

interface InputProps {
  placeholder?: string
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    )
  }
)

// Recommended for forwardRef components
CustomInput.displayName = "CustomInput"

const RefProps = () => {

  // Create reference to DOM element
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input
  const focusInput = () => {
    inputRef.current?.focus()
  }

  // Clear the input
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  // Show current input value
  const showValue = () => {
    const value = inputRef.current?.value || ""
    alert(`Input Value: ${value}`)
  }

  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Ref Props
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        In React, <code>refs</code> allow components to directly access and interact
        with DOM elements without triggering a re-render. They are commonly used
        for focusing inputs, controlling media elements, or integrating with
        third-party libraries.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Normally refs cannot be passed to child components directly. React provides
        <code> forwardRef()</code> to allow a parent component to pass a ref down to
        a child component and attach it to a DOM element.
      </p>

      <div className="space-y-4 max-w-md">

        {/* Input controlled by ref */}
        <CustomInput
          ref={inputRef}
          placeholder="Type something here..."
        />

        {/* Ref action buttons */}
        <div className="flex gap-3 flex-wrap">

          <button
            onClick={focusInput}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Focus Input
          </button>

          <button
            onClick={clearInput}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Clear Input
          </button>

          <button
            onClick={showValue}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Show Value
          </button>

        </div>

      </div>

      {/* Explanation */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
        <p className="mb-2 font-semibold">How it works:</p>

        <ol className="list-decimal ml-5 space-y-1">
          <li>Parent creates a ref using <code>useRef()</code>.</li>
          <li>The ref is passed to the child component.</li>
          <li>The child component receives it using <code>forwardRef()</code>.</li>
          <li>The ref attaches to the DOM input element.</li>
          <li>The parent can control the input (focus, read value, clear).</li>
        </ol>
      </div>

    </section>
  )
}

export default RefProps