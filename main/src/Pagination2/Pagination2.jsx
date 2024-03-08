import styles from "./Pagenation2.module.css"
export default function Pagination2({id,name,email,role}){
    return(
        <>
        <div className={styles.card}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{role}</h3>
        </div>
        </>
    )
}