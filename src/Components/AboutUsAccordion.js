import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function AboutUsAccordion(){


    const accordionContent=[
        {
            question:'How does Centiment score its tweet?',
            content:<>Centiment performs an <span className="font-weight-bold">Natural Language Processing (NLP)</span> at the backend that receives tweet content and identify its sentiment. This number is then scaled on a 1-00 in which users can relate to it easier. The alghorithm can be tested by users by selecting the second widget (Make sure you're authenticated). </>
        },
        {
            question:"Why can't I interact with the widget?",
            content:<>You must be <span className="font-weight-bold">logged in</span> to add, delete, and modify any widget in the dashboard. However, you can always preview the basic landing dashboard page. By logging in, Centiment will <span className="font-weight-bold">preserve your widget configuration</span>, so when you visited the next time, it will still be there exactly how you left them.'</>
        },
        {
            question:"Does Centiment count all the tweet?",
            content:<>Centiment <span className="font-weight-bold">does not</span> count all the tweet that mentions a coin but rather ones that uses the dollar ($) symbol to indicates which coin they're refering to. Centiment also filters bot tweets so it would not be considered as tweet volume, neither their score will affect the sentiment score of a coin.</>
        },
        {
            question: 'How does Centiment filtered bots?',
            content:<>Centiment uses multiple algorithm to solve this issue, firstly with identifying the user, how much followers, tweets it haves, and other few parameters. Secondly, it identifies keywords in the tweet itself, whether it contains word or phrases that are likely bot, such as "win it","click the link in our bio". The combination between the two steps are done to make sure users can receive the best overall experience in our platform. </>
        }
        
    ]



    
    return(
        <>
       <div className="container container-xl-custom py-5 px-5">
            <h1 className="font-weight-bold pt-3 pb-5 text-center">Frequently Asked Question</h1>

            <Accordion alwaysOpen>
                {accordionContent.map((singleItem,index)=>(
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{singleItem.question}</Accordion.Header>
                        <Accordion.Body>{singleItem.content}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
    
        </div>
        </>
    )
}