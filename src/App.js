import "./App.scss";
import Logo from "./assets/Logo Sticker.svg";
import Chevron from "./assets/Chevron.svg";
import Whatsapp from "./assets/whatsapp.svg";
import Instagram from "./assets/instagram.svg";
import Facebook from "./assets/facebook.svg";
import Phone from "./assets/phone.svg";
import Location from "./assets/location.svg";

function App() {
  return (
    <div className="App">
      <div className="App-background">
        <img src={Logo} alt={Logo} className="App-logo" />
        <img src={Chevron} alt={Chevron} className="App-chevron" />
      </div>
      <div className="App-black">
        <div className="headers">
          <h1>Traditional Indonesian Bread.</h1>
          <h1>Baked fresh everyday.</h1>
        </div>
        <div className="contact">
          <h2>Order via:</h2>
          <div className="social">
            <a href="https://kontakk.com/wa/0be021">
              <img src={Whatsapp} alt={Whatsapp} className="icon" />
            </a>
            <a href="https://www.instagram.com/christinebakery?igsh=MWV2Z2l2bHQ5ejI0OA==">
              <img src={Instagram} alt={Instagram} className="icon" />
            </a>
            <a href="https://www.facebook.com/pages/category/Food---Beverage-Company/Christine-Bakery-794420100572073/">
              <img src={Facebook} alt={Facebook} className="icon" />
            </a>
          </div>
          <a href="tel:+6287878047878" style={{ textDecoration: "none" }}>
            <div className="phone">
              <img src={Phone} alt={Phone} className="icon" />
              <h2>+62 878-7804-7878</h2>
            </div>
          </a>
        </div>
      </div>
      <div className="App-footer">
        <div className="App-address">
          <img src={Location} alt={Location} className="icon" />
          <div className="text">
            <p>Boulevard Barat Raya</p>
            <p>LA1 No.21-22</p>
            <p>Kelapa Gading, Jakarta Utara</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
