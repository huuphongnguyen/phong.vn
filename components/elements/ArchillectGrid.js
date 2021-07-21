import ArchillectToast from "./ArchillectToast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ArchillectGrid({ sync }) {
  return (
    <div className="grid grid-cols-autoscale">
      {sync.map((element, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => toast(<ArchillectToast item={element} />)}
        >
          <div className="aspect-w-1 aspect-h-1">
            <img src={element.imageSource} className="object-cover" />
          </div>
          <div className="absolute inline-block opacity-0 group-hover:opacity-100 top-0 px-1 font-sourcecodepro text-white bg-red-500">
            {element.id}
          </div>
        </div>
      ))}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}
