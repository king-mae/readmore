import HomeNavBar from "../components/HomeNavBar";
import AllBooks from "../components/AllBooks";

function Home(){
    return(
      <div className="bg-secondary">
      <HomeNavBar/>
      <AllBooks/>
      </div>
    )
}

export default Home;