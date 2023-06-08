import './App.css';
import Name from './learning-source/components/Name';
import Address from './learning-source/components/Address';
import Form from './learning-source/components/Form';
import Layout from './learning-source/components/Layout';
import AnimalName from './learning-source/components/AnimalName';
import CounterInt from './learning-source/components/CounterInt';
import Register from './learning-source/components/Register';
import RecordInt from './learning-source/components/RecordInt';
import Test1 from './learning-source/components/Test1';
import Test2 from './learning-source/components/Test2';
import Test3 from './learning-source/components/Test3';
function App() {
  return (
    <div className="App">
        <h1 className='header'>Hello World'</h1>
        <p>hello abdul goffar, how are you today</p>
        {/* cara pemasangan component di component lain */}
        <Name/>
        {/* cara pemberian value pada props atau component yg mempunyai parameter */}
        <Address addressName = {"iam from east java, madura island, sampang regency"} country = { function() { return "indonesian"}}/>
        <hr/>
        <Form/>
        <hr/>
        <Layout>ReactJS atau React adalah library JavaScript populer buatan Facebook yang digunakan dalam proses pengembangan aplikasi mobile dan web. React berisi kumpulan snippet kode JavaScript (disebut 'komponen') yang bisa digunakan berulang kali untuk mendesain antarmuka pengguna.</Layout>
        <hr/>
        <AnimalName/>
        <hr/>
        <CounterInt/>
        <hr/>
        <Register/>
        <hr/>
        <RecordInt/>
        <hr/>
        <Test1/>
        <hr/>
        <Test2/>
        <hr/>
        <Test3/>
    </div>
  );
}

export default App;
