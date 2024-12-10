import './viewer.css'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
export function Viewer({text}){
    const markedText = {__html: marked.parse(text)}
    
    return (<>
    <div className="containerBox-viewer">
        <div className="containerHeader">
            <div className="containerTitle">Your Viewer</div>
            <button className="containerMaximize"></button>
        </div>
        <div id="preview" className="containerViewer" dangerouslySetInnerHTML={markedText}></div>
    </div>
    </>)
}