import './editor.css'

export function Editor({text, setText}){
    return (
        <div className="containerBox">
            <div className="containerHeader">
                <div className="containerTitle">Your markdown editor</div>
                <button className="containerMaximize"></button>
            </div>
            <textarea id="editor" cols="40" rows="40" defaultValue={text} className="containerTextArea" onChange={setText}></textarea>
        </div>
    )
}