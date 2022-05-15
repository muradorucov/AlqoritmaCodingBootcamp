import Profile from "./Profile";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Profile
        name="Murad Orucov"
        info="I'am Web Developer"
        email="orucowmurad@gmail.com"
        address="Baku city., Nasimi reg."
      />
      <Profile
        name="Donald Trump"
        info="I'am Prezident of ABD"
        email="donaldtrupm@prezident.com"
        address="1600 Pennsylvania Avenue NW, Washington, DC 20500, ABD"
      />
    </div>
  );
}
