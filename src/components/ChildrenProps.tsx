import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  title?: string
  color?: "blue" | "green" | "purple" | "red"
}

function Card({ children, title, color = "blue" }: CardProps) {

  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50"
  }

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          {title}
        </h3>
      )}

      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
}

interface ContainerProps {
  children: ReactNode
  layout?: "vertical" | "horizontal" | "grid"
}

function Container({ children, layout = "vertical" }: ContainerProps) {

  const layoutClasses = {
    vertical: "flex flex-col gap-4",
    horizontal: "flex gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }

  return (
    <div className={layoutClasses[layout]}>
      {children}
    </div>
  )
}

const ChildrenProps = () => {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Children Props
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        The <code>children</code> prop in React allows components to receive
        and render nested content inside them. This makes components more
        flexible and reusable because you can pass any JSX elements between
        the opening and closing tags of a component.
      </p>

      <div className="space-y-6">

        <h3 className="text-lg font-semibold">
          Card Component with Children
        </h3>

        <Container layout="grid">

          <Card title="User Profile" color="blue">
            <p className="mb-2"><strong>Name:</strong> Ayush</p>
            <p className="mb-2"><strong>Email:</strong> ayush@email.com</p>
            <p className="mb-2"><strong>Role:</strong> Developer</p>
          </Card>

          <Card title="Statistics" color="green">
            <p className="mb-2"><strong>Projects:</strong> 12</p>
            <p className="mb-2"><strong>Commits:</strong> 540</p>
            <p className="mb-2"><strong>Stars:</strong> 120</p>
          </Card>

          <Card title="Notifications" color="purple">
            <p>🔔 You have 3 new messages</p>
          </Card>

          <Card title="Warning" color="red">
            <p>⚠️ Your subscription expires soon.</p>
          </Card>

        </Container>

      </div>

    </section>
  )
}

export default ChildrenProps