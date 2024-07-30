import Body from "./Body";
import Navbar from "./Navbar";



function App() {
  return (
   <>
   <div className="flex bg-gray-950 ">
   <div className="w-1/4"><Navbar/></div>
   <div className="w-3/4"> <Body/></div>
  
   </div>
   </>
  );
}

export default App;
