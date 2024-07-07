
import styles from './activities-grid.module.css'
import ActivitiesItem from "./activites-item"


export default function ActivitiesGrid({activitise}){
    return(
        <div>
            <ul className={styles.activities}>
                {
                    activitise.map((item, index)=>{
                        return(
                            <li key={item._id}>
                                <ActivitiesItem {...item}/>
                            </li>
                        )
                    })
            }
            </ul>
        </div>
    )
}