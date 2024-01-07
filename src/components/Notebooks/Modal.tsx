import { useEffect, useRef } from 'react';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ isModalOpen, setIsModalOpenModal }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isModalOpen]);

  const handleCreateBtn = () => {
    setIsModalOpenModal(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className="h-fit w-[576px] rounded-md bg-gray-800 p-7 backdrop:bg-black backdrop:bg-opacity-60"
    >
      <h3 className="mb-5 text-center text-lg font-semibold text-gray-300">
        Create New Notebook
      </h3>
      <div className="relative flex flex-col">
        <label className="text-md mb-24 flex items-center gap-[72px] font-semibold text-gray-300">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter notebook name"
            className="w-full rounded-sm bg-gray-650 px-3 py-2 font-medium"
          />
        </label>
        <button
          type="submit"
          onClick={handleCreateBtn}
          className="absolute bottom-0 right-0 w-fit rounded-md border border-gray-600 px-6 py-[6px] font-medium text-gray-600"
        >
          Create
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
