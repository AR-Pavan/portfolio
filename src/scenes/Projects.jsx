import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import StreamIcon from '@mui/icons-material/Stream';
import "./Landing.css";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const projects=[
    {   id:"1",
        name:"Social Media App",
        description:"This is fully Responsive app where user can securely Register,Login and Post the Images in the app.",
        source:"https://github.com/AR-Pavan/social-media-backend",
        deployedUrl:"https://deerdo.netlify.app/"
    },{
        id:"2",
        name:"Student Dashboard",
        description:"This is responsive app where student can register,login and attend the classes,Submit the assignments,Check his score and attendance.",
        source:"https://github.com/AR-Pavan/capstone-backend",
        deployedUrl:"https://zenclass-capstone-project.netlify.app/"
    },
]
const Project = ({ item }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//   const projectTitle = data.name.split(" ").join("-").toLowerCase();
 
    return (
        <motion.div variants={projectVariant} className="relative">
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{item.name}</p>
            <p className="mt-7">
              {item.description}
            </p>
            <div className="buttonsGrp">
            <Stack direction="row" spacing={2}>
                <Button href={`${item.source}`} target="_blank"size="small" variant="outlined" startIcon={<GitHubIcon/>}>
                    Source
                </Button>
                <Button href={`${item.deployedUrl}`} target="_blank"size="small" variant="outlined" startIcon={<StreamIcon/>}>
                    Deployed Site
                </Button>
            </Stack>
            </div>
          </div>
          <img src={`../assets/project-${item.id}.png`} alt={item.name} />
        </motion.div>
      );

  
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projects.map((item)=>(
            <Project key={item.id} item={item}/>
          ))}
          {/* <Project title="Project 2" />

          {/* ROW 2 */}
          {/* <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */} 
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;