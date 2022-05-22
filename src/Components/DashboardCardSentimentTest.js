import { Button } from "bootstrap"
import { Form } from "react-bootstrap"

export default function DashboardCardSentimentTest(){

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={5}  placeholder="Test your tweet here.."/>
                </Form.Group>
                <div className="d-flex justify-content-between w-100 pt-4">
                    <div className="d-flex align-items-center align-self-end">
                        <p className="m-0">Result Score : 50</p>
                    </div>
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>

                </div>
            </Form>
            
        </div>
    )
}