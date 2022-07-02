import { Button } from "bootstrap"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { useDashboard } from "../DashboardContext"

export default function DashboardCardSentimentTest(){

    const {sentimentTest}=useDashboard()
    const [fieldText,setFieldText]=useState("")
    const [score,setScore]=useState("-")

    async function handleSubmission(e){
        e.preventDefault()
        const result = await sentimentTest(fieldText)
        setScore(result)
        
    }
    function handleChange(e){
        if (e.target.value.length <=280){
            setFieldText(e.target.value)
        }else return 
    }
    function sentimentColor(score){
        if (score>=80) return '#0E8D5A'
        if (score<80 && score >=60 ) return '#71AA3C'
        if (score<60 && score >=40) return '#D1C51F'
        if (score<40 && score >=20) return '#DC8444'
        else return '#E35B5B'
    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={5} value={fieldText} onChange={(e)=>handleChange(e)} placeholder="Test your tweet here.."/>
                </Form.Group>
                <div className="d-flex justify-content-between w-100 pt-4">
                    <div className="d-flex align-items-center align-self-end">
                        <div className="m-0 d-flex ">Result Score : 
                        {
                            score==='-'? <span>-</span>:
                            <div className="mx-2 twitterScore d-flex justify-content-center align-items-center" style={{backgroundColor:sentimentColor(score)}}>{score}</div>
                        }
                        </div>
                    </div>
                    <div>
                    </div>

                        <button onClick={(e)=>handleSubmission(e)} className={`btn btn-primary ${!fieldText&&'disabled'}`}>Submit</button>
                </div>
            </Form>
            
        </div>
    )
}