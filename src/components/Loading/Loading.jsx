import "./loading.css";
import { MoonLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="loading-screen">
      <MoonLoader size={200} color="orange" />
    </div>
  );
};

export default Loading;
