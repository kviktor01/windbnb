import logo from "../logo.png"

export default function Menu({city, onSearching}){
    return (
        <nav>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="form" >
                <span><span onClick={()=>onSearching(true)}>{city},Finland</span></span>
                <span><span style={{color:"#BDBDBD"}}>Add guests</span></span>
                <span><span><i className="fa-solid fa-magnifying-glass"></i></span></span>
            </div> 
        </nav>
        
    )
}