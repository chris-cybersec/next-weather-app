
import styles from "@/app/styles/min/Content.module.css"
import Image from "next/image"

const Content = ({time, temp, code}) => {

  return(
  <div className={styles.container}>
    <div className={styles.code}>
<Image src={`http://localhost:3000/icons/${code}.svg`} width={200} height={200} alt="code"/>
    </div>
<p>{code}</p>
    </div>
  )
}
  
  export default Content
