
import type { Project as ProjectProps} from "./project";

export default function projectbox (Props:ProjectProps) {

    const {tittle,img,text,link}=Props;

    return(
        <section className="griditem">
        <article>
            <h2 id="projectname">{tittle}</h2>
            <figure>
              <img
                id="image"
                src={img}
                alt="projects photo"
              />
              <figcaption>
                project photo 
              </figcaption>
            </figure>
            <p id="projecttext">
             {text}
            </p>
            <a id="link" href={link}>Read more</a>
        </article>
    </section>
    )
}