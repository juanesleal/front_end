import Image from 'next/image'
import { Grid } from '@mui/material'
import styles from './page.module.css'
import Header from './src/app/components/Header/Header'
import Mission from './src/app/components/Mission/Mission'
import QuestHeader from './src/app/components/Mission/QuestHeader'

export default function Home() {
  return (

    <main className={styles.main}>
      <div><Header></Header></div>
      <div><QuestHeader></QuestHeader></div>

      <div>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 8 }}>
          {Array.from(Array(6)).map((_, index) => (

            <Grid item xs={2} sm={4} md={4} key={index}>
              <Mission>xs=2</Mission>
            </Grid>

          ))}
        </Grid>
      </div>


    </main>
  )
}
