import './App.scss';
import Cart from './components/Cart';
import Menu from './components/Menu';
import { CartContextProvider } from './context/cartContext';

const App = () => {
  return (
    <CartContextProvider>
      <div className="App">
        <Menu />
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
