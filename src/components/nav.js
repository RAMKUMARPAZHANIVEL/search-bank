import LinearProgress from '@mui/material/LinearProgress';

const NavBar = ({setKeyword,filterList,setBankDetail,loader}) => {
    const searchFilter = (e) => {
        setKeyword(e.target.value);
        // setLoader(true);
    }
    
    return(
        <div>
            <input type="text" onKeyUp={searchFilter} placeholder="🔎 Search your bank..."/>
            {loader === true ?  <LinearProgress color="secondary" />
            : filterList.map((elem,idx) => {
              return(
                <p key={idx} onClick ={() => setBankDetail(elem.Bank)} className="dropdown-content"> {elem.Bank} </p>
              )
            })}
        </div>

    )
}
export default NavBar;