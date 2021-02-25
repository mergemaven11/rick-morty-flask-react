// import logo from './logo.svg';
import './App.scss';
import Card from './components/card'

import {
  Header,
  HeaderName
} from "carbon-components-react/lib/components/UIShell";


function App() {
  return (
    <>
     <Header aria-label="Rick And Morty" style={{backgroundColor: '#2d6cdf'}}>
      <HeaderName href="/" prefix="Rick and Morty" style={{backgroundColor: '#FA9E3C'}}> 
      </HeaderName>
    </Header>
    <div class="container">
     <div class="bx--grid bx--grid--full-width">
     <div class="bx--row">
     <div class="bx--col"> <Card /></div>
     </div>
     </div>
     </div>
    </>   
  );
}

export default App;
