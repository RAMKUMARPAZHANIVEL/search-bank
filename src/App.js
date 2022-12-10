import './App.css';
import { useState, useEffect } from 'react';
import bankList from './bankList';
import NavBar from './components/nav';
import Main from './components/main';
import NotFound from './components/notFound';
import Footer from './components/footer';

function App() {
  const [list,setList] = useState([]);
  const[filterList,setFilterList] = useState([]);
  const [input,setInput] = useState("");
  const [bankDetail,setBankDetail] = useState([]);
  const [notFound,setNotFound] = useState(false);
  const [loader,setLoader] = useState(false);
  useEffect(_ => {
    setLoader(true);
  const timer = setTimeout(() => {
    if(input.length > 0){
      const filteredList = bankList.filter((singleprop)=> {
        if(singleprop.Bank.toLowerCase().startsWith(input))
          return true;
        if(singleprop.Branch.toLowerCase().startsWith(input))
          return true;
        if(singleprop.IFSC.toLowerCase().startsWith(input))
          return true;
        if(singleprop.BankId.startsWith(input))
          return true;
       
        return false;
      })
        setNotFound(false);
        setFilterList(filteredList);
        setList(filteredList);
        setLoader(false);
        if(filterList.length > 0)
          setNotFound(false);
        else
          setNotFound(true);
        
     }
  }, 3000)

  return () => clearTimeout(timer);
 
  },[input,filterList])

  useEffect(() => {
    const searchList = bankList.filter((singleprop)=> {
      if(singleprop.Bank.startsWith(bankDetail))
        return true;
      return false;
  })
    setList(searchList);
    setLoader(false);
  },[bankDetail]);

  const setKeyword =(keyword)=>{
      setInput(keyword); 
  }
  return (
    <div className="App">
     <NavBar setKeyword={setKeyword} filterList={filterList} setBankDetail={setBankDetail} loader={loader} />  
     {notFound === false ? <Main list={list} /> 
     : <NotFound />}
     <Footer />
    </div>
  );
}

export default App;
