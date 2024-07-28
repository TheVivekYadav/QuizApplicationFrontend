import './QuestionInputCss.css'



function QuestionInput(props){


    return(
        <div className="question-input">
            <input onClick={props.handleChange} type={props.typebtn} placeholder={props.option} value={props.option}/>
        </div>
    )
}

export default QuestionInput