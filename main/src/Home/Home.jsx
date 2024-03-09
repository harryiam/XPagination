import { useEffect, useState } from "react"
import axios from "axios"
import Pagination2 from "../Pagination2/Pagination2"
import styles from "./Home.module.css"

export default function Home(){
    const [data,setData]=useState([])
    const [rdata,setRdata]=useState([])
    const [pageno,setPageno]=useState(1)
    useEffect(()=>{
        fetchData()
        console.log("rdata",rdata)
    },[])

    const fetchData=async()=>{
        try{
            const response=await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            setData(response.data)
            setRdata(response.data.slice(pageno-1,10));
        }catch(e){
            console.error(e)
            alert("fetchDataFailed")
        }
    }

    const updateDataI=(e)=>{
        setRdata(data.slice((pageno*10)-10,10*pageno));
        setPageno(pageno+1)
    }

    const updateDataD=(e)=>{
        if (pageno===1){
            alert("no previous pages")
        }
        else{
            setRdata(data.slice((pageno*10)-10,10*pageno));
            setPageno(pageno-1)
        }

    }

    console.log(data)
    console.log("p",pageno)
    return(
        <>
        <div className={styles.home}>
        <table className={styles.cumr}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {rdata.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.button}>
        <div className={styles.but2}>
            <button onClick={updateDataD} disabled={pageno === 1} >Previous</button>
             <button>{pageno}</button>
            <button onClick={updateDataI}>Next</button>
        </div>
        </div> 
      </div>
        {/* <div className={styles.card}>
            <h3>ID</h3>
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Role</h3>
        </div>
        {data.length>0 ? (rdata.map((e)=>(
            <Pagination2 key={e.id} id={e.id} name={e.name} email={e.email} role={e.role}/>
        ))
        ):(<></>)}
        <div className={styles.button}>
        <div className={styles.but2}>
            <button onClick={updateDataD}>Previous</button>
            {/* <input type="button" onChange={updateData}>1</input> */}
            {/* <button>{pageno}</button>
            <button onClick={updateDataI}>Next</button>
        </div>
        </div> */}
        </>
    )

}