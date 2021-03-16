import logo from './logo.svg';
import './App.css';


import Header from './Components/BaiTapThucHanhLayout/BT3Header';
import Content from './Components/BaiTapThucHanhLayout/BT3Content';
import Footer from './Components/BaiTapThucHanhLayout/BT3Footer';
import Styles from './Components/Style/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import RenderPhim from './RenderWithMap/RenderPhim';
import DanhSachSanPhamProps from './Props/DemoProps/DanhSachSanPhamProps';
import Product from './Props/BaiTapProps/Product';
import Carts from './Props/BaiTapProps/Carts';

function App() {
  return (
    <div className="App">
      {/* <Styles /> */}

      {/* <HandleEvent /> */}


      {/* <StateDemo /> */}

      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}

      {/* <RenderPhim /> */}

      {/* <DanhSachSanPhamProps /> */}

      <Product />


    </div>
  );
}

export default App;
