import HomeNavBar from "../components/HomeNavBar";
import AllBooks from "../components/AllBooks";
import MostLiked from "../components/MostLiked";

function Home(){
    return(
      <div className="h-screen bg-secondary">
      <HomeNavBar/>
      <AllBooks/>
      <MostLiked/>
      </div>
    )
}

export default Home;