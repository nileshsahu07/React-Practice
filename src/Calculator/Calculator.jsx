import { useState } from "react";

function Calculator() {

    const [value,setValue] = useState("")

    return (  
        <>
           <div className=" w-full h-screen flex justify-center items-center bg-blue-600">
            <div className=" p-5 rounded-lg bg-white">
                <form>
                    <div className="flex justify-end mt-1 mr-0 mb-3 ml-0">
                        <input
                            type="text"
                            value={value}
                            className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer text-right flex-1 py-1 px-2 text-4xl"
                        />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={()=>{setValue(" ")}} className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="DE" onClick={(e)=>{setValue(value.slice(0,-1))}} className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="." onClick={(e)=>{setValue(value+ e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="/" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900 "/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={(e)=>{setValue(value + e.target.value)}} className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="8" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="9" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="*" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900 "/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="5" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="6" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="+" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="2" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="3" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="-" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="0" onClick={(e)=>{setValue(value + e.target.value)}}  className="border-none outline-0 w-14 h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                        <input type="button" value="=" onClick={(e)=>{setValue(eval(value))}} className="border-none outline-0 w-[117px] h-14 bg-blue-950 m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-900"/>
                    </div>
                </form>
            </div>
           </div>
        </>
    );
}

export default Calculator;