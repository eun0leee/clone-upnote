import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import notebooksAtom from '@/recoil/notebooks/atoms';
import { addNotebooks } from '@/storage/notebooks';

const Modal = () => {
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [notebookNameValue, setNotebookNameValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useRecoilState(notebooksAtom);

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isModalOpen]);

  const handleCreateBtn = () => {
    const response = addNotebooks(notebookNameValue);
    if (response.message === 'success') {
      setIsModalOpen(false);
      navigate(`/notebooks/${notebookNameValue}`);
    } else {
      alert(
        `The name "${notebookNameValue}" is already taken. \n Please choose a different name.`,
      );
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotebookNameValue(e.target.value);
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
            onChange={handleChangeValue}
            className="w-full rounded-sm bg-gray-650 px-3 py-2 font-medium"
          />
        </label>
        <button
          type="button"
          disabled={notebookNameValue === ''}
          onClick={handleCreateBtn}
          className={`absolute bottom-0 right-0 w-fit rounded-md px-6 py-[6px] font-medium ${
            notebookNameValue === ''
              ? 'border border-gray-600 text-gray-600'
              : 'border border-blue-500 bg-blue-500 text-white'
          } `}
        >
          Create
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
