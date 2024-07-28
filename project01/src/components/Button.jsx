import './ButtonCss.css'



function Button(prop){


    return (
        <div className="button">
            <button onClick={prop.onClick}>{prop.btnName || "Button"}</button>
        </div>
    )
}

export default Button