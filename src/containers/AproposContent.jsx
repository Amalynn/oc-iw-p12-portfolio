import ProfileSmall from "../assets/images/profile/profile-200w.webp";
import ProfileLarge from "../assets/images/profile/profile-400w.webp";

export default function AproposContent() {
    return (
        <div className="apropos-content">
            <div className="apropos-content-profile">
                <img
                    srcSet={`${ProfileSmall} 200w}, ${ProfileLarge} 400w `}
                    sizes="(min-width: 992px) 400px, 200px "
                    src={ProfileSmall}
                    alt="My profile avatar"
                />
            </div>
            <div className="apropos-content-description">
                <p>
                    Passionnée par l&apos;histoire minière de ma région, je me
                    suis tournée vers la géologie avec un BTS de Géologie
                    Appliquée (Nancy) puis un master en &quot;Exploration et
                    Géomatique des Ressources Minérales (Université
                    d&apos;Orléans). J&apos;ai travaillé quelques années en tant
                    que technicienne géologue de terrain: suivre les campagnes
                    de sondages, réaliser des campagnes de prospection
                    géophysique, préparer mes missions et mon matériel, seule,
                    en binôme ou en équipe étaient mon quotidien.
                </p>
                <p>
                    Je me suis orientée ensuite vers des projets de R&D toujours
                    en géosciences mais cette fois-ci plutôt axés dans les
                    domaines de la télédétection et géomatique. Entrée dans ce
                    monde fut captivant et stimulant. Passée du terrain à la
                    recherche m&apos;a permis d&apos;explorer de nouvelles
                    thématiques et méthodes de travail.
                </p>
                <p>
                    C&apos;est ma dernière expérience avec le développement du
                    programme de recherche CepAtlas qui m&apos;a amené à cotoyer
                    le domaine du web. Concevoir, imaginer, retranscrire une
                    idée en code, trouver des solutions pour mener à bien le
                    projet confié, travailler avec une équipe pluridisciplinaire
                    sont autant de raisons qui m&apos;ont fait aimer travailler
                    sur ce type de projet.
                </p>
                <p>
                    Aujourd&apos;hui, j&apos;ai consolidé mes compétences en
                    développement web en suivant la formation &quot;Développeur
                    web/Intégrateur web&quot; d&apos;OpenClassrooms.
                    L&apos;objectif : &quot;Participer à des projets innovants
                    alliant développement web, géosciences et géomatique.&quot;
                </p>
            </div>
        </div>
    );
}
