import './App.scss';
//import SortedItem from './components/SortedItem/SortedItem';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Searchbar from './components/SearchForm/Searchbar';
import Statistics from './components/Statistics/Statistics';
import LatestProperties from './components/LatestProperties/LatestProperties';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Searchbar/>
      <Statistics/>
      <LatestProperties/>
      <Footer/>
    </div>
  );
}

export default App;
