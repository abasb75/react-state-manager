import { useAction, useStateSelector } from "../state";

function Notes(){

    const notes = useStateSelector(s=>s.notes);
    const deleteNote = useAction(a=>a.notes.delete);

    console.log('notes rendered')

    return (<div className="w-full px-4 py-3">
        {notes.map(note=>(<div className="bg-white w-full my-2 border-[1px] border-[#c1c1c1] rounded p-3" key={note.date}>
            <h1 className="text-black mb-3">{note.text}</h1>
            <button 
                onClick={()=>deleteNote(note.date)} 
                className="bg-gray-600 p-2 rounded hover:bg-blue-600"
            >Delete</button>
        </div>))}
    </div>);

}

export  default Notes;