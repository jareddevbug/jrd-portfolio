import styles from "./App.module.css";
import Header from "./components/Header";
import HeroCard from "./components/HeroCard";
import ToolsCard from "./components/ToolsCard";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main} id="about">
        <aside className={styles.sidebar}>
          <HeroCard />
          <ToolsCard />
        </aside>
        <section className={styles.content}>
          <PortfolioGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
