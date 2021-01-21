import './App.css';
import corebiz from './image/corebiz.png';
import vtex from './image/vtex.png';


function App() {
  return (
    <div className="App">
      <footer>
        <div class="content-footer">
        <section class="address">
            <h3>Localização</h3>
            <p>Avenida Andrômeda, 200. Bloco 6 e 8</p>
            <p>Alphaville SP</p>
            <p><a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a></p>
            <p><a href="tel:+551130901039">+55 11 3090 1039</a></p>
        </section>
        <section class="contact">
            <ul>
                <li>
                    <a href="/fale-conosco">Entre em contato</a>
                </li>
                <li>
                    <a href="/chat">Fale com o nosso consultor online</a>
                </li>
            </ul>
        </section>
        <section class="created">
            <div>
                <p>Created by</p>
                <img src={corebiz} alt="Logo Corebiz"/>
            </div>
            <div>
                <p>Powered by</p>
                <img src={vtex} alt="Logo Vtex"/>
            </div>
        </section>
        </div>
    </footer>
    </div>
  );
}

export default App;
