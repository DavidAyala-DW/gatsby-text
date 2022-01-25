import React from 'react'
import { useState, useEffect} from 'react'

function useModal(handleCancel,window) {
    
    const [state, setState] = useState({});

    const handleChange = e => {
        setState( {...state,speed:Number(e.target.value)} )
    };
    
    useEffect(() => {
        const customConfig = JSON.parse(window.localStorage.getItem("customerSettings")) ?? {speed:4,animation:{desktop:"first",mobile:"first"}} ;
        setState(customConfig);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("customerSettings",JSON.stringify(state));
    }, [state]);

    const Modal = () => (

        <div 
            className={` 
                fixed transition duration-500 ease-in-out 
                max-w-sm w-11/12 right-4 md:right-16 flex flex-col z-50 
                rounded-xl bg-white px-4 py-6 top-32 shadow-2xl space-y-5`
            }
            
        >
            <div className="flex items-center">

                <p className='text-gray-700 text-left text-lg md:text-xl cursor-pointer font-bold '>
                    Choose your custom configuration
                </p>

                <p 
                    className='text-[#F15A29] font-bold text-2xl ml-auto cursor-pointer'
                    onClick={ () => {

                        handleCancel(false);    
                    
                    } }
                >
                    X
                </p>

            </div>

            <div className="flex items-center space-x-5">

                <p className='text-gray-700 text-left text-base md:text-lg cursor-pointer font-bold'>
                    Scroll speed:
                </p>

                <div className="flex items-center space-x-2">
                    <input 
                        type="range" 
                        min={1} 
                        max={10} 
                        step={1} 
                        defaultValue={state.speed} 
                        onMouseUp={handleChange}
                    />
                    <p className={`${state.speed == 10 ? "text-green-500" : state.speed == 1 ? "text-red-500" : "text-gray-800" } `}> {` ${state.speed}`}</p>
                </div>



            </div>

            <div className="flex items-center space-x-5">

                <p className='text-gray-700 text-left text-base md:text-lg cursor-pointer font-bold'>
                    Animation Desktop:
                </p>

                <select 
                    className='text-gray-800' name="" id="" value={state.animation.desktop} 
                    onChange={e => setState( {...state,animation:{desktop:e.target.value,mobile:state.animation.mobile}} )}
                >
                    <option value="first">Animation 1</option>
                    <option value="second">Animation 2</option>
                </select>

            </div>

            <div className="flex items-center space-x-5">

                <p className='text-gray-700 text-left text-base md:text-lg cursor-pointer font-bold'>
                    Animation Mobile:
                </p>

                <select className='text-gray-800' name="" id="" value={state.animation.mobile} 
                    onChange={e => setState( {...state,animation:{desktop:state.animation.desktop,mobile:e.target.value}} )}
                >
                    <option value="first">Animation 1</option>
                    <option value="second">Animation 2</option>
                </select>

            </div>

        </div>

    )

    return [state,Modal];

}

export default useModal
