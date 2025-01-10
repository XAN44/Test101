import Home_HeaderComponents from "./components/home/HomeCompo";
import Home_MainComponent from "./components/home/Home_MainComponent";
import Home_reserve from "./components/home/Home_reserve";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Home_HeaderComponents />
      <Home_MainComponent />
      <Home_reserve />
    </div>
  );
}
