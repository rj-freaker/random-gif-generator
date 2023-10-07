import RandomGIF from "./components/RandomGIF";
import RandomGIFWithTag from "./components/RandomGIFWithTag";



function App() {
  return (
    <div className="flex flex-col h-full w-full overflowY-auto relative items-center">
          <h1 className='text-3xl font-bold text-center bg-white w-11/12 m-auto mt-4 p-2 rounded-md'>
            Random GIF Generator
          </h1>
          <RandomGIF/>
          <RandomGIFWithTag/>
    </div>
  );
}

export default App;
