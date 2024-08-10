import { useEffect, useState } from "react";
import { ProjectData, TechnologiesData } from "../../models/Model";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Box, Modal, Typography } from "@mui/material";
import _ from "lodash";
import Skeleton from "@mui/material/Skeleton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 200,
  p: 4,
};

function Technologies() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [technologiesList, setData] = useState<TechnologiesData[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = (data: ProjectData) => {
    async function fetchData() {
      try {
        const promises = _.map(data?.technologies, (id: string) => {
          const technologies = collection(db, "technologies");
          const techDocRef = doc(technologies, id);
          return getDoc(techDocRef);
        });

        const docs = await Promise.all(promises);
        const technologiesList: TechnologiesData[] = [];
        docs.forEach((doc) => {
          const techName = doc.data()?.name;
          if (techName) {
            console.log("technologies data", doc.data()?.name);
            technologiesList.push({ id: doc.id, name: techName });
          }
        });

        setData(technologiesList);

        console.log("technologies", technologiesList);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }

    fetchData();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const myCollection = collection(db, "Briefcase");
        console.log("Fetching documents from 'project' collection");
        const querySnapshot = await getDocs(myCollection);
        const projectsList: ProjectData[] = [];
        querySnapshot.forEach((doc) => {
          setLoading(true);
          console.log(doc.id, " => ", doc.data());
          projectsList.push(doc.data() as ProjectData);
        });
        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? projects.map((project) => (
              <div
                key={project.id}
                className="flex cursor-pointer flex-col justify-between max-w-sm rounded w-90 h-[450px] overflow-hidden shadow-lg bg-white m-2"
              >
                <div onClick={() => handleOpen(project)}>
                  <img
                    className="w-full h-50 object-cover"
                    src={project.image}
                    alt="Imagen del Card"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl text-center mb-2">
                      {project.name}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <a
                    href={project.enlace}
                    target="_blank"
                    className="bg-[#ffd819] cursor-pointer font-bold hover:bg-[#2c3e50] hover:text-white  px-4 py-2 rounded"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            ))
          : Array.from(new Array(6)).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-sm w-full h-[450px] m-2"
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  className="mb-2"
                />
                <Skeleton variant="text" width="60%" className="mb-2" />
                <Skeleton variant="text" width="80%" />
              </div>
            ))}

        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropProps={{
            onClick: (e) => e.stopPropagation(), // Evita que el clic en el backdrop cierre el modal
          }}
        >
          <Box sx={style}>
            <button className="btn-close" onClick={handleClose}>
              {" "}
              X{" "}
            </button>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              <h5 className="absolute top-8 left-16">Desarrollado en</h5>
            </Typography>
            <hr></hr>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {technologiesList.map((item: TechnologiesData) => (
                <p className="text-center text-lg font-bold" key={item.id}>
                  {item.name}
                </p>
              ))}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Technologies;
