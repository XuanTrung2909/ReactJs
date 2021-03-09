import logo from './logo.svg';
import './App.css';


import Header from './Components/BaiTapThucHanhLayout/BT3Header';
import Content from './Components/BaiTapThucHanhLayout/BT3Content';
import Footer from './Components/BaiTapThucHanhLayout/BT3Footer';
import Styles from './Components/Style/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';

function App() {
  return (
    <div className="App">
      {/* <Styles /> */}

      {/* <HandleEvent /> */}


      {/* <StateDemo /> */}

      <BaiTapChonXe />

    </div>
  );
}

export default App;
