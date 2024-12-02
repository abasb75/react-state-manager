import { useAction } from "../state";
import { useRef } from "react";

function AddNote(){

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const addNote = useAction(actions=>actions.notes.add);

    const add  =  ()=>{
        const text = inputRef.current?.value || "";
        if(!inputRef.current)  return;
        if(text.length<1){
            return;
        }
        addNote(text);
        inputRef.current.value = "";
    }

    return (<div  className="w-full h-24 p-4">
        <div className="w-full h-full bg-white rounded-md shadow flex overflow-hidden">
            <textarea  
                placeholder="type here  ..."
                ref={inputRef} 
                className="resize-none rounded-sm border-2 border-[#737373] w-full h-full text-gray-900  px-4"/>
            <button 
                onClick={add}
                className="bg-blue-600 w-28 px-2"
            >Add Note</button>
        </div>
    </div>);
}

export default AddNote;