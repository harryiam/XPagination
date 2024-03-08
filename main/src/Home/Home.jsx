import { useEffect, useState } from "react"
import axios from "axios"
import Pagination2 from "../Pagination2/Pagination2"
import styles from "./Home.module.css"

export default function Home(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
            const response=await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            setData(response.data)

        }catch(e){
            console.error(e)
        }
    }
    console.log(data)
    return(
        <>
        <div className={styles.card}>
            <h3>ID</h3>
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Role</h3>
        </div>
        {data.length>0 ? (data.map((e)=>(
            <Pagination2 id={e.id} name={e.name} email={e.email} role={e.role}/>
        ))
        ):(<></>)}
        </>
    )

}