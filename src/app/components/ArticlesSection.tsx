import styles from '../page.module.scss'
import arterix from '../assets/decos/asterix.svg'
import ArticleCard from './ArtilcleCard'
import PrimaryButton from './buttons/PrimaryButton'
import Link from 'next/link'

interface ArticlesSectionProps{

    articles: any[]
}

const ArticlesSection:React.FC<ArticlesSectionProps> = ({articles}) => {

    return(
    <div className={styles.articleSectionContainer}>
        <section className={styles.articleSectionGrid}>
            <div className={styles.articleSectionHeader}>
              <img src={arterix.src} alt="" />
              <h2 className={styles.title}>Leenos</h2>
              <p className={styles.text}>Sección de entrevistas, nuestros libros recomendados, artículos, novedades, acciones en la librería y más. </p>
            </div>
            { 
            articles &&
            articles.map((art, index:number) =>   
              <div key={index}>
               <ArticleCard 
                 title={art.title}
                 author={art.author}
                 image={art.image}     
               />
              </div>)}
        </section>
        <br />
        <Link href={""}>
        <PrimaryButton
        primary={false}
        text="Ver todos los artículos"
        /></Link>
        </div>
    )
}

export default ArticlesSection