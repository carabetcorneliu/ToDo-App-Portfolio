import BackgroundHeading from "./BackgroundHeading.tsx";
import Header from "./Header.tsx";
import TodoList from "./TodoList.tsx";
import Sidebar from "./Sidebar.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    // Main page container + styling (left here for convenience reasons)
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />

      <main
        className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden bg-opacity-65"
      >
        <Header/>

        <TodoList/>

        <Sidebar/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
