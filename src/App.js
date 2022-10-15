import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Login from './component/AccessingProcess/Login';
import SignUp from './component/AccessingProcess/SignUp';
import AddProduct from './component/Admin/AddProduct';
import Admin from './component/Admin/Admin';
import AllOrder from './component/Admin/AllOrder';
import AllPayment from './component/Admin/AllPayment';
import AllReview from './component/Admin/AllReview';
import AllUsers from './component/Admin/AllUsers';
import DeleteProduct from './component/Admin/DeleteProduct';
import Contract from './component/Contract/Contract';
import Dashboard from './component/Dashboard/Dashboard';
import MyOrder from './component/Dashboard/MyOrder';
import MyProfile from './component/Dashboard/MyProfile';
import Payment from './component/Dashboard/Payment';
import Review from './component/Dashboard/Review';
import FarmerAddProduct from './component/FarmerDashboard/FarmerAddProduct';
import FarmerAllPayment from './component/FarmerDashboard/FarmerAllPayment';
import FarmerDashboard from './component/FarmerDashboard/FarmerDashboard';
import FarmerDeleteProduct from './component/FarmerDashboard/FarmerDeleteProduct';
import FarmerProfile from './component/FarmerDashboard/FarmerProfile';
import FarmerReview from './component/FarmerDashboard/FarmerReview';
import Category from './component/Home/Category/Category';
import Chicken from './component/Home/Category/Chicken';
import Dal from './component/Home/Category/Dal';
import Fish from './component/Home/Category/Fish';
import Fruit from './component/Home/Category/Fruit';
import Mosla from './component/Home/Category/Mosla';
import Rice from './component/Home/Category/Rice';
import Shak from './component/Home/Category/Shak';
import Sutki from './component/Home/Category/Sutki';
import Vegetable from './component/Home/Category/Vegetable';
import Home from './component/Home/Home';
import Chat from './component/Messenger/Chat';
import Messenger from './component/Messenger/Messenger';
import NotFound from './component/NotFound/NotFound';
import CompletedOrder from './component/Order/CompletedOrder';
import Order from './component/Order/Order';
import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contract></Contract>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/category' element={<Category></Category>}></Route>
        <Route path='/chicken' element={<Chicken></Chicken>}></Route>
        <Route path='/dal' element={<Dal></Dal>}></Route>
        <Route path='/fish' element={<Fish></Fish>}></Route>
        <Route path='/fruit' element={<Fruit></Fruit>}></Route>
        <Route path='/mosla' element={<Mosla></Mosla>}></Route>
        <Route path='/sutki' element={<Sutki></Sutki>}></Route>
        <Route path='/shak' element={<Shak></Shak>}></Route>
        <Route path='/rice' element={<Rice></Rice>}></Route>
        <Route path='/vegetable' element={<Vegetable></Vegetable>}></Route>
{/* chatting */}
        <Route path='/chat' element={<Chat></Chat>}></Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment' element={<Payment></Payment>} ></Route>
          <Route path='review' element={<Review></Review>}></Route>
        </Route>


        <Route path='/farmerDashboard' element={<FarmerDashboard></FarmerDashboard>}>
          <Route path='farmerProfile' element={<FarmerProfile></FarmerProfile>}></Route>
          <Route path='farmerAddProduct' element={<FarmerAddProduct></FarmerAddProduct>}></Route>
          <Route path='farmerDeleteProduct' element={<FarmerDeleteProduct></FarmerDeleteProduct>}></Route>
          <Route path='farmerAllPayment' element={<FarmerAllPayment></FarmerAllPayment>}></Route>
          <Route path='farmerReview' element={<FarmerReview></FarmerReview>}></Route>
        </Route>


        <Route path='/admin' element={<Admin></Admin>}>
          <Route path='allUsers/' element={<AllUsers></AllUsers>}></Route>
          <Route path='allOrder' element={<AllOrder></AllOrder>}></Route>
          <Route path='allPayment' element={<AllPayment></AllPayment>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='deleteProduct' element={<DeleteProduct></DeleteProduct>} ></Route>
          <Route path='allReview' element={<AllReview></AllReview>}></Route>
        </Route>

        <Route path='/order/:productId' element={<Order></Order>}></Route>
        <Route path='/completedOrder' element={<CompletedOrder></CompletedOrder>}></Route>

      
      </Routes>
      <Messenger></Messenger>
      <Footer></Footer>
    </div>
  )
}
export default App;


