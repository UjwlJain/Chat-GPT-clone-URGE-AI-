import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from "../../Context/Context"
import { FidgetSpinner } from 'react-loader-spinner'
const Main = () => {

    const { onSent, recentPrompt, showResult, resultData, loading, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Urge-AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Ujjawal.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Predict the upcoming business trends.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improvise the following code snippet .</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <p>{recentPrompt}</p>
                        </div>
                        {loading ? <div className="loader">
                            <FidgetSpinner />
                        </div>
                            : <div className="result-data">
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            </div>}

                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} name="prompt" type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="info-bottom">
                        This AI Chat bot may display some inaccurate results considering that this is the BETA veresion and still under development
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main