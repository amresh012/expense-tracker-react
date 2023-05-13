import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpanse } from './components/IncomeExpanse';
import { Transaction } from './components/Transaction';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpanse />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
