import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pannel() {

    const [data, setData] = useState([]);

    const getdata = async (candname) => {
        try {
            const res = await axios.get(`http://127.0.0.1:8888/list`)
            if (res) {
                // setData(res.data.resp)
                // console.log(res.data)
                setData(res.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getdata()
        // console.log(data)
    }, [data])

    return (
        <>
            <div className="head">
                <h1>Voting Count</h1>
            </div>
            <div className="votingsec">
                <div className="heading">
                    <h2>PRESIDENT</h2>
                    <p className='headingshd'>PRESIDENT</p>
                </div>
                <div className="cardsec">
                    {
                        data.map((item) => {
                            if (item.Role === "President") {
                                return (
                                    <div className="card-client">
                                        <div className="user-picture">
                                            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                                            </svg>
                                        </div>
                                        <p className="name-client"> {item.Name}</p>
                                        <p className='name-client'>{item.Role}</p>
                                        <p className='name-client'>{item.Vote}</p>
                                    </div>

                                )
                            }
                            else{
                                return null
                            }
                        })
                    }
                </div>


                <div className="votingsec">
                    <div className="heading">
                        <h2>VICE-PRESIDENT</h2>
                        <p className='headingshd'>VICE-PRESIDENT</p>
                    </div>

                    <div className="cardsec">
                        {
                            data.map((item) => {
                                if (item.Role === "Vice_President") {
                                    return (
                                        <div className="card-client">
                                            <div className="user-picture">
                                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                                                </svg>
                                            </div>
                                            <p className="name-client"> {item.Name}</p>
                                            <p className='name-client'>{item.Role}</p>
                                            <p className='name-client'>{item.Vote}</p>
                                        </div>

                                    )
                                }
                                else{
                                    return null
                                }
                            })
                        }

                    </div>
                </div>


                <div className="votingsec">
                    <div className="heading">
                        <h2>SECRETARY</h2>
                        <p className='headingshd'>SECRETARY</p>
                    </div>
                    <div className="cardsec">
                        {
                            data.map((item) => {
                                if (item.Role === "Secretary") {
                                    return (
                                        <div className="card-client">
                                            <div className="user-picture">
                                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                                                </svg>
                                            </div>
                                            <p className="name-client"> {item.Name}</p>
                                            <p className='name-client'>{item.Role}</p>
                                            <p className='name-client'>{item.Vote}</p>
                                        </div>

                                    )
                                }
                                else{
                                    return null
                                }
                            })
                        }
                </div>
                </div>


                <div className="votingsec">
                    <div className="heading">
                        <h2>JOINT-SECRETARY</h2>
                        <p className='headingshd'>JOINT-SECRETARY</p>
                    </div>
                    <div className="cardsec">
                        {
                            data.map((item) => {
                                if (item.Role === "Joint_Secretary") {
                                    return (
                                        <div className="card-client">
                                            <div className="user-picture">
                                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                                                </svg>
                                            </div>
                                            <p className="name-client"> {item.Name}</p>
                                            <p className='name-client'>{item.Role}</p>
                                            <p className='name-client'>{item.Vote}</p>
                                        </div>

                                    )
                                }
                                else{
                                    return null
                                }
                            })
                        }
                </div>
                </div>
                <div className="votingsec">
                    <div className="heading">
                        <h2>TREASURER</h2>
                        <p className='headingshd'>TREASURER</p>
                    </div>
                    <div className="cardsec">
                        {
                            data.map((item) => {
                                if (item.Role === "Treasurer") {
                                    return (
                                        <div className="card-client">
                                            <div className="user-picture">
                                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                                                </svg>
                                            </div>
                                            <p className="name-client"> {item.Name}</p>
                                            <p className='name-client'>{item.Role}</p>
                                            <p className='name-client'>{item.Vote}</p>
                                        </div>

                                    )
                                }
                                else{
                                    return null
                                }
                            })
                        }
                </div>
                </div>
            </div>
        </>
    )

}
