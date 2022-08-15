import Card from "./components/Card";
import TipContextProvider from "./context/tip-context";

function App() {
  return (
    
    <main>
   
    <h1 className="title">Spli<br/>tter</h1> 
    <TipContextProvider>
    <Card />
    </TipContextProvider>
    </main>
  );
}

export default App;
