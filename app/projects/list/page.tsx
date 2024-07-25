import Link from "next/link"

const Projects = () => {
  return (
    <div>
      <h1>Projects List Appear Here</h1>
      <ul>
                    <Link href='/projects/bilal'>
                        <li>Bilal</li>
                    </Link>
                    <Link href='/projects/ali'>
                        <li>ali</li>
                    </Link>
                    <Link href='/projects/ahmad'>
                        <li>
                            ahmad
                        </li>
                    </Link>

                </ul>
    </div>
  )
}

export default Projects
