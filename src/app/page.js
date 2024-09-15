import BannerMain from "./components/BannerMain";
import BannerSlider from "./components/BannerSlider";
import ShopByCategory from "./components/ShopByCategory";
import SliderCard from "./components/SliderCard";

export default function Home() {
  return (
    <main>
      <BannerMain />
      <BannerSlider />
      <SliderCard />
      <ShopByCategory />
    </main>
  );
}
