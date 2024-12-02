
import { useAction, useStateSelector } from "../state";

export default function Header(){

    const toggleDarkMode = useAction(actions=>actions.toggleDarkMode);
    const { increment, decrement } = useAction(actions=>actions.counter);
    const counter = useStateSelector(state=>state.counter);

    console.log('header rendered!')

    return (<div className="w-full h-16 bg-white border-b-2 border-[#c0c0c0] flex items-center px-4">
        <button 
            className="p-2 bg-gray-300 rounded-sm text-white hover:bg-blue-400"
            onClick={()=>toggleDarkMode()}
        > toggle darkmode</button>

        <div className="w-full h-full flex items-center justify-end gap-2">
          <button className="text-gray-950 border-2 p-2 rounded-sm"  onClick={()=>increment()}>-</button>
          <h1  className="text-gray-950 ">{counter}</h1>
          <button  className="text-gray-950 border-2 p-2 rounded-sm" onClick={()=>decrement()}>+</button>
        </div>
    </div>);
}