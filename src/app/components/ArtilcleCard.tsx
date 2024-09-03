import styles from '../page.module.scss'

interface ArticleCardProps{
    title: any
    author:string
    image:string
}

const ArticleCard:React.FC<ArticleCardProps> = ({title, author, image}) => {
    return (
        <div className={styles.articleCard}>
                <div>
                <img src={image} alt="" />
                  <p className={styles.articleTitle}>{title}</p>
                  <p className={styles.articleText}>{author}</p> 
                </div> 
            </div>
            )
}

export default ArticleCard