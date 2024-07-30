import QuestionInput from "./QuestionInput"
import './QuestionCardCss.css'
import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";


function QuestionCard(props){

    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState({});
    const [option, setOption] = useState(false);

    const [loading,setLoading] = useState(false);

    const [error, setError] = useState(false);

    const [next, setNext] = useState(0)

    const [resArr, setResArry] = useState()



    useEffect(()=>{
        // iffi
        ;(async ()=>{
            try {
                setLoading(true)
                setError(false);
                const response = await axios.get('/api/questions');
                const responseData = response.data;
                setResArry(responseData.length)
                console.log(response.data[0]);
                console.log(response.data[1]);
                let data = response.data[next];
                console.log(data)
                setQuestion(data.question)
                setAnswer(data.answer)
                setOption(data.option)
                setLoading(false)
            } catch (error) {
                setError(true);
                setLoading(false)
            }
        })()
    },[next])

    function createOptions(){
        let options = [];
        for(let i = 0; i < 4; i++){
            let op = option[i]
            options.push(<QuestionInput typebtn="button" key={i} option={op}/>);
        }
        return options;
    }

    const handlePrevClick = ()=>{
        if (next<resArr-1){
        setNext(next+1)
            console.log(next)
    }
        else
        alert("You have reached the end of the quiz")
    }
    const handleNextClick = ()=>{
        if (next>0){
        setNext(next-1)
            console.log(next)
    }
        else
        alert("You have reached the start of the quiz")
    }

    const handleshowAnswerClick = ()=>{
        alert(option[answer])
    }



    if (loading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>Something Wen't Worng<br/>or Contact Vivek Yadav to active on backend</div>
    }
    

    return (
        <div className="question-card">
            <div className="question-card__header">
                <input className="question-card__title" placeholder={question}/>
                {createOptions()}
            </div>
            <div  className="buttons">
            <Button btnName="Prev" onClick={handleNextClick}/>
            <Button btnName="Show Answer" onClick={handleshowAnswerClick}/>
            <Button btnName="Next" onClick={handlePrevClick}/>
            </div>
        </div>
    )
}

export default QuestionCard
