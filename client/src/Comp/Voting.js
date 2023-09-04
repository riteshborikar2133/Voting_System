import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Voting() {
    const [president, setPre] = useState([])
    const getcand = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8888/list")
            if (res) {
                setPre(res.data)
            }
        }
        catch (err) {
            console.log("err" + err)
        }
    }
    
    useEffect(() => {
        getcand()
    }, [])


    const [data, setData] = useState([])
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(data)
        try{
            const ress = await axios.post("http://127.0.0.1:8888",data)
            const ress1 = await axios.put("http://127.0.0.1:8888/voteup",data)
            if(ress && ress1){
                console.log(ress)
                alert(ress.data.message)   
            }
        }
        catch(err){
            console.log("err",err)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' name='Name' onChange={handleChange} />
            <input type="text" placeholder='Enter your USN' name='USN' onChange={handleChange} />
            <input type="text" placeholder='Enter College Email Id' name='email' onChange={handleChange} />

            <select name='President' onChange={handleChange}>
                <option value="">Choose President</option>
                {
                    president.map((cand) => {
                        if (cand.Role === 'President') {
                            return (
                                <option key={cand._id} value={cand.Name}>{cand.Name}</option>

                            )
                        }
                        else return null
                    })
                }
            </select>

            <select name='Vice_President' onChange={handleChange}>
                <option value="">Choose Vice-President</option>
                {
                    president.map((cand) => {
                        if (cand.Role === 'Vice_President') {
                            return (
                                <option key={cand._id} value={cand.Name}>{cand.Name}</option>

                            )
                        }
                        else return null
                    })
                }
            </select>
            <select name='Secretary' onChange={handleChange}>
                <option value="">Choose Secretary</option>
                {

                    president.map((cand) => {
                        if (cand.Role === 'Secretary') {
                            return (
                                <option key={cand._id} value={cand.Name}>{cand.Name}</option>
                            )
                        }
                        else return null
                    })
                }
            </select>

            <select name='Joint_Secretary' onChange={handleChange}>
                <option value="">Choose Joint-Secretary</option>
                {

                    president.map((cand) => {
                        if (cand.Role === 'Joint_Secretary') {
                            return (
                                <option key={cand._id} value={cand.Name}>{cand.Name}</option>
                            )
                        }
                        else return null
                    })
                }
            </select>

            <select name='Treasurer' onChange={handleChange}>
                <option value="">Choose Treasure</option>
                {

                    president.map((cand) => {
                        if (cand.Role === 'Treasurer') {
                            return (
                                <option key={cand._id} value={cand.Name}>{cand.Name}</option>
                            )
                        }
                        else return null
                    })
                }
            </select>
            <input type="submit" className='submitbtn' value="Vote" />
        </form>
    )
}
