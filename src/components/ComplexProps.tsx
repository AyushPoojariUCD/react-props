type User = {
  id: number
  name: string
  email: string
  role: "AI Engineer" | "Backend Developer" | "Data Engineer"
  skills: string[]
}

function UserCard({ user }: { user: User }) {

  const cardColors = {
    "AI Engineer": "bg-purple-100 border-purple-300",
    "Backend Developer": "bg-blue-100 border-blue-300",
    "Data Engineer": "bg-green-100 border-green-300"
  }

  return (
    <div className={`p-6 rounded-xl shadow-md border hover:shadow-lg transition ${cardColors[user.role]}`}>

      <h3 className="text-xl font-bold mb-1 text-gray-800">
        {user.name}
      </h3>

      <p className="text-sm text-gray-700 mb-2">
        📧 {user.email}
      </p>

      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-black bg-white shadow-sm mb-3">
        {user.role}
      </span>

      <div>
        <strong className="text-gray-700">Skills:</strong>

        <div className="flex flex-wrap gap-2 mt-2 text-black">
          {user.skills.map((skill: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-white rounded-md shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

const ComplexProps = () => {

  const users: User[] = [
    {
      id: 1,
      name: "Ayush",
      email: "ayush@email.com",
      role: "AI Engineer",
      skills: ["React", "Python", "Machine Learning"]
    },
    {
      id: 2,
      name: "Sara",
      email: "sara@email.com",
      role: "Backend Developer",
      skills: ["Node.js", "MongoDB", "Docker"]
    },
    {
      id: 3,
      name: "John",
      email: "john@email.com",
      role: "Data Engineer",
      skills: ["Spark", "Kafka", "SQL"]
    }
  ]

  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Complex Props
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Complex props in React allow components to receive structured data
        such as objects, arrays, and functions. In this example, a user object
        containing multiple properties like name, email, role, and skills is
        passed as a prop to the <code>UserCard</code> component.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

    </section>
  )
}

export default ComplexProps