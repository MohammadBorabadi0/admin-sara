import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import StateProvider from "./context/StateProvider";
import "react-circular-progressbar/dist/styles.css";

const App = () => {
  return (
    <StateProvider>
      <div className="flex md:gap-4 min-h-screen max-w-screen-2xl md:mx-auto overflow-x-hidden bg-red-50">
        <Sidebar />
        <Main />
      </div>
    </StateProvider>
  );
};

export default App;
