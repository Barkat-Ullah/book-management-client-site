import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

// Define TypeScript types
interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
}

// Reusable TeamMember component
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imgSrc }) => {
  return (
    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
      <img
        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
        src={imgSrc}
        alt={name}
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
        {role}
      </p>

      <div className="flex mt-3 -mx-2">
        <a
          href="#"
          className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
          aria-label="Reddit"
        >
          <FaReddit />
        </a>

        <a
          href="#"
          className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="#"
          className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  // Team members data
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Arthur Melo",
      role: "Design Director",
      imgSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      name: "Amelia Anderson",
      role: "Lead Developer",
      imgSrc:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "Olivia Wathan",
      role: "Lead Designer",
      imgSrc:
        "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "John Doe",
      role: "Full Stack Developer",
      imgSrc:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ];

  return (
    <section className="bg-white mt-8">
      <div className="max-w-7xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Our Executive Team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imgSrc={member.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
