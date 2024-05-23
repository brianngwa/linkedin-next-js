import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Post from "@/components/Post";
import Profile from "@/components/Profile";


export default function Home() {
  return (
    <div>
    <div className = "flex-col basis-1/5 sticky top-0">
    <Header />
    </div>
  <div className="flex basis-4/5" >

    {/* Left panel  */}
    <div className="w-1/4 m-5 ml-20" >
    <Profile />
    </div>
    {/* Middle panel   */}
    <div className = "w-2/4 m-5">
    <Post /> 
    </div>
    {/* Right panel   */}
    <div className="w-1/4 m-5">
    <Feed />
    </div>
    </div>
  
    </div>
  );
}
