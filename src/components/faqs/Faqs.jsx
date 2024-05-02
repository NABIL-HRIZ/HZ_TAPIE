import React from 'react'
import './faqs.css'
import Accordion from 'react-bootstrap/Accordion';
const Faqs = () => {
    return (
        <div className='faqs' id='faqs'>
            <h2>Questions Fréquemment  <span>Posées</span></h2>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className='mt-5 mb-4'>
                    <Accordion.Header>Qu'est-ce qui rend les tapis marocains uniques ?</Accordion.Header>
                    <Accordion.Body>
                        Les tapis marocains sont réputés pour leur artisanat traditionnel et leur design distinctif. Chaque tapis est unique et reflète souvent des motifs culturels et historiques de la région où il a été fabriqué.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-4'>
                    <Accordion.Header>Quels sont les matériaux utilisés pour fabriquer les tapis marocains ?</Accordion.Header>
                    <Accordion.Body>
                        Les tapis marocains sont souvent tissés à la main à partir de laine de mouton de haute qualité. Certains tapis peuvent également inclure des fibres de coton ou des fils de soie pour des détails supplémentaires.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mb-4'>
                    <Accordion.Header>Quelles sont les différentes techniques de tissage utilisées dans la fabrication des tapis marocains ?</Accordion.Header>
                    <Accordion.Body>
                        Les tapis marocains sont souvent tissés à la main selon différentes techniques, telles que le nœud berbère, le nœud de Ghiordes, ou le tissage plat. Chaque technique offre un aspect unique au tapis fini.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='mb-4'>
                    <Accordion.Header>Comment puis-je entretenir mon tapis marocain ?</Accordion.Header>
                    <Accordion.Body>
                        Pour entretenir votre tapis marocain, il est recommandé de le dépoussiérer régulièrement à l'aide d'un aspirateur à faible puissance et de le faire nettoyer professionnellement si nécessaire. Évitez l'exposition directe au soleil et les zones à fort trafic pour préserver la qualité de votre tapis.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='mb-4'>
                    <Accordion.Header>Les tapis marocains sont-ils respectueux de l'environnement ?</Accordion.Header>
                    <Accordion.Body>
                        De nombreux tapis marocains sont fabriqués à partir de matériaux naturels et sont produits selon des méthodes artisanales traditionnelles, ce qui les rend souvent plus respectueux de l'environnement que les tapis industriels fabriqués en masse.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='mb-4'>
                    <Accordion.Header>Quelles sont les différentes régions du Maroc connues pour leurs tapis ?</Accordion.Header>
                    <Accordion.Body>
                        Le Maroc abrite plusieurs régions réputées pour leurs tapis, notamment les régions de l'Atlas, les montagnes du Rif et les villes impériales telles que Marrakech et Fès. Chaque région a ses propres styles et traditions de tissage.                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    )
}

export default Faqs
