import Footer from "../../components/general/Footer";
import Header from "../../components/general/Header";
import CardsInfo from "../../components/homepage/CardsInfo";
import RecommendedProperties from "../../components/homepage/RecommendedProperties";
import SearchBanner from "../../components/homepage/SearchBanners";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <SearchBanner />
      <RecommendedProperties />
      <CardsInfo />
      <Footer />
    </div>
  );
}
