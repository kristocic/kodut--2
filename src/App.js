import Linn from './Linn';
import haapsaluPilt from './pildid/haapsalu-pilt.png'
import barcelonaPilt from './pildid/barcelona-pilt.jpg'
import roomaPilt from './pildid/rooma-pilt.jpg'

import './App.css';

const LINNAD = [
  {
    nimi: 'Haapsalu',
    kirjeldus: 'Haapsalu on linn Eestis, asudes Läänemere ääres, Haapsalu lahe kaldal Lääne-Eesti rannikul. Siin on linnuse romantilised varemed, kuulus kuursaal, kaunid pargid ja mitmed muud ajaloolised vaatamisväärsused, mis muudavad selle populaarseks turismisihtkohaks.',
    pilt: haapsaluPilt
  },
  {
    nimi: 'Barcelona',
    kirjeldus: 'Barcelona on Kataloonia pealinn ja üks Hispaania suurimaid linnu, mis paikneb Vahemere rannikul. See on mitmekesine ja kultuuririkas linn, millel on pikk ajalugu, kaunid arhitektuurilised vaatamisväärsused, maitsvad toidud, rikkalik kunstiskeene ning elav atmosfäär. ',
    pilt: barcelonaPilt
  },
  {
    nimi: 'Rooma',
    kirjeldus: 'Rooma on Itaalia pealinn ja üks maailma ajalooliselt ja kultuuriliselt rikkamaid linnu. Sellel on pikk ajalugu, mis ulatub tagasi Rooma impeeriumi aegadesse, ning linna arhitektuur, kunst ja kultuur on endiselt suurepäraselt säilinud.',
    pilt: roomaPilt
  },

];


const App = () => (
  <div className='App'>
    {LINNAD.map(linn => (
      <Linn key={linn.nimi} andmed={linn} />
    ))}
  </div>
);


export default App;
