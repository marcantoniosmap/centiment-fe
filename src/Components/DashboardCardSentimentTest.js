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

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={5} value={fieldText} onChange={(e)=>handleChange(e)} placeholder="Test your tweet here.."/>
                </Form.Group>
                <div className="d-flex justify-content-between w-100 pt-4">
                    <div className="d-flex align-items-center align-self-end">
                        <p className="m-0">Result Score : {score}</p>
                    </div>
                    <div>
                    </div>

                        <button onClick={(e)=>handleSubmission(e)} className={`btn btn-primary ${!fieldText&&'disabled'}`}>Submit</button>
                </div>
            </Form>
            
        </div>
    )
}