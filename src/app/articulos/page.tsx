import styles from '../page.module.scss'
import AllArticles from "../components/AllArticles";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function Articulos () {
    return(
    <div >
      <Navbar/>
      <AllArticles
      articles={[]}
      />
    </div>
    )
}