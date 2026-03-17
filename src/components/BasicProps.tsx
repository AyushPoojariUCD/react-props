import { useState } from 'react'

interface ButtonProps {
  text: string
  color: "primary" | "secondary" | "danger" | "success"
  size?: "small" | "medium" | "large" | "xl"
  onClick?: () => void
  disabled?: boolean
}

function Button({ text, color, size = "small", onClick, disabled }: ButtonProps){
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`
        rounded font-semibold transition

        ${size === 'small' ? "text-sm px-4 py-1" : ""}
        ${size === 'medium' ? "text-base px-6 py-2" : ""}
        ${size === 'large' ? "text-lg px-8 py-3" : ""}
        ${size === 'xl' ? "text-xl px-10 py-4" : ""}

        ${color === 'primary' ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
        ${color === 'secondary' ? "bg-gray-500 text-white hover:bg-gray-600" : ""}
        ${color === 'danger' ? "bg-red-500 text-white hover:bg-red-600" : ""}
        ${color === 'success' ? "bg-green-500 text-white hover:bg-green-600" : ""}

        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {text}
    </button>
  )
}

const BasicProps = () => {

  const [count, setCount] = useState(0)

  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold text-gray-800">
        Basic Props
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Basic props in React allow you to pass simple data such as strings,
        numbers, booleans, and functions from a parent component to a child
        component. In this example, the <strong>Button</strong> component
        receives props like <code>text</code>, <code>color</code>,
        <code>size</code>, <code>onClick</code>, and <code>disabled</code>
        which control how the button looks and behaves.
      </p>

      {/* Different Colours */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">
          Different Colours: {count}
        </h3>

        <div className="flex gap-3 flex-wrap">
          <Button text="Primary" color="primary" onClick={() => setCount(count + 1)} />
          <Button text="Secondary" color="secondary" onClick={() => setCount(count + 1)} />
          <Button text="Danger" color="danger" onClick={() => setCount(count + 1)} />
          <Button text="Success" color="success" onClick={() => setCount(count + 1)} />

          {/* Reset Button */}
          <Button text="Reset" color="danger" size="small" onClick={() => setCount(0)} />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">
          Different Sizes
        </h3>

        <div className="flex gap-3 flex-wrap items-center">
          <Button text="Small" color="primary" size="small" />
          <Button text="Medium" color="primary" size="medium" />
          <Button text="Large" color="primary" size="large" />
          <Button text="XL" color="primary" size="xl" />
        </div>
      </div>

      {/* Disabled / Enabled */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">
          Disabled / Enabled
        </h3>

        <div className="flex gap-3">
          <Button text="Enabled" color="success" size="large" />
          <Button text="Disabled" color="danger" size="large" disabled />
        </div>
      </div>

    </section>
  )
}

export default BasicProps