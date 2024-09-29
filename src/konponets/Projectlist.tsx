import { useState } from "react";
import type { Project as ProjectProps} from "./project";


type projectListprops={
    projects: ProjectProps[]
    onAddproject: ({value}: { value:number}) => void;
}





export default function ProjectList(props:projectListprops) {
    const [projects, setprojects] = useState<ProjectProps[]>(props.projects ?? []);
    const {onAddproject}=props;
    const [value, setvalue] = useState(0);


    const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
        onAddproject({value});
        setvalue(0);
	};
   
    return (
        <section className="griditem">
        
            <h2>projects</h2>
            <ul id="projectList">
            {projects?.map((projcet) => (
                  <li  onClick={() => setvalue(projcet.id)}>{projcet.tittle} {projcet.date} <form onSubmit={handleSubmit}> <button  onClick={() => setvalue(projcet.id)} type="submit">change</button></form></li>
				))}
            </ul>
        </section>
    )
  }
