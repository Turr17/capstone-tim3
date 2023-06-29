import { Cross } from "./Svg";

const Notifikasi = ({ state, handle }) => {
  return (
    <div
      className={`fixed top-0 ${
        state ? "right-0" : "-right-full"
      } w-1/5 h-full px-6 py-8 bg-white shadow-lg shadow-gray-400 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Notifikasi</h3>
        <div
          onClick={handle}
          className="p-1 stroke-gray-700 rounded cursor-pointer hover:bg-white"
        >
          <Cross />
        </div>
      </div>
    </div>
  );
};

export default Notifikasi;
