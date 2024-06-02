import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Expertise from "./components/expertise/Expertise";
import LateLoad from "./components/mini-components/LateLoad";
export default function App() {
  return (
    <>
      <LateLoad>
        <Navigation />
        <Hero />
        <Expertise />
      </LateLoad>
    </>
  );
}
