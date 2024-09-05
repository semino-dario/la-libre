import styles from '../page.module.scss'
import nena from '../assets/images/nena.jpeg'
import ArticleCard from './ArtilcleCard'
import Footer from './Footer'

interface AllArticlesProps {
    articles : any[]
}

const AllArticles:React.FC<AllArticlesProps> = ({articles}) => {

    return(
        <section className={styles.allArticlesMainContainer}>
            <header className={styles.allArticlesHeader}>
            <img className={styles.allArticlesImage} src={nena.src} alt="imagen de niña leyendo" />
            <div className={styles.allArticlesHeaderContent}>
                <h1>
                    todos nuestros artículos
                </h1>
                <p>Entrevistas, reseñas, recomendaciones, artículos y mucho más...</p>
            </div>
            </header>
            <main>
                <ArticleCard
                title={"Un artículo muy importante"}
                author={"Darío Semino"}
                image='https://res.cloudinary.com/dsw6fpqoz/image/upload/v1724858854/Image2_txm016.jpg'
                />
                <ArticleCard
                title={"Un artículo muy importante"}
                author={"Darío Semino"}
                image="https://res.cloudinary.com/dsw6fpqoz/image/upload/v1724953721/Rectangle_4182_lnj7ji.jpg"
                /> <ArticleCard
                title={"Un artículo muy importante"}
                author={"Darío Semino"}
                image="https://res.cloudinary.com/dsw6fpqoz/image/upload/v1724781533/Card_2_idjtx9.jpg"
                />
            </main>
            <div className={styles.footerAllArticles}>
            <Footer/>
            </div>
        </section>
    )

}

export default AllArticles;