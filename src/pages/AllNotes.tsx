import imageBulb from '@/assets/img_bulb.png';

const AllNotes = () => {
  return (
    <div className="flex h-full min-w-96 flex-col items-center justify-center font-semibold">
      <img src={imageBulb} alt="bulb" className="mb-5 w-20" />
      <p className="mb-3 text-gray-400">
        Have a thought to jot down? Tap on the button below
      </p>
      <button type="button" className=" text-blue">
        New Note
      </button>
    </div>
  );
};

export default AllNotes;
