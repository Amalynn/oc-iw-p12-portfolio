import SkillCard from "../components/SkillCard";
import data from "../data/data.json";


export default function SkillList() {
    const skillsFiltered = data?.skills.filter( (skill) => skill.isVisible === true ) ;

    return (
        <div className="skills-grid">
            {skillsFiltered.map( (skill) => (
                <SkillCard
                    key={skill.id} 
                    icon={skill.faIcon}
                    name={skill.name}
                    description={skill.description}
                />
            ))}
        </div>     
    )      
}