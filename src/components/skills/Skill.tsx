import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FrameworkData, SkillData } from "../../models/Model";

function Skill() {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [framework, setFramework] = useState<FrameworkData[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const myCollection = collection(db, "skill");
        console.log("Fetching documents from 'skill' collection");
        const querySnapshot = await getDocs(myCollection);
        const skillsList: SkillData[] = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          skillsList.push({ id: doc.id, ...doc.data() } as SkillData);
        });
        setSkills(skillsList);
      } catch (error) {
        console.error(
          "Error fetching documents from 'skill' collection:",
          error
        );
      }
    };

    fetchSkills();

    const fetchDataFramework = async () => {
      try {
        const myCollection = collection(db, "framework");
        console.log("Fetching documents from 'framework' collection");
        const querySnapshot = await getDocs(myCollection);
        const frameworkList: FrameworkData[] = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          frameworkList.push(doc.data() as FrameworkData);
        });
        setFramework(frameworkList); // Ensure this is correctly named
      } catch (error) {
        console.error(
          "Error fetching documents from 'framework' collection:",
          error
        );
      }
    };

    fetchDataFramework();
  }, []); // Ensure the empty dependency array is present

  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex justify-center mt-4">
        <h2 className="relative lg:text-3xl md:text-5xl">Skills</h2>
      </div>
      <div className="flex justify-center relative top-4">
        <div className="h-2 w-52  border-t-4 border-[#ffd819]"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="m-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              style={{ width: `${skill.value}%` }}
              className={`block h-10 mb-2 mt-8  bg-gray-200 ${skill.class}`}
            >
              <p className="text-right text-white relative font-bold top-2">
                {skill.value}%
              </p>
              <p className="text-left text-white relative font-bold -top-4 ml-2">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div className="m-4">
          {framework.map((item) => (
            <div
              key={item.id}
              style={{ width: `${item.value}%` }}
              className={`block h-10 mb-2 mt-8  bg-gray-200 ${item.class}`}
            >
              <p className="text-right text-white relative font-bold top-2">
                {item.value}%
              </p>
              <p className="text-left text-white relative font-bold -top-4 ml-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
