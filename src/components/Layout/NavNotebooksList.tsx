import imgNotebook from '@/assets/img_notebook.png';

const NavNotebooksList = () => {
  return (
    <ol>
      <li className="flex h-10 items-center bg-gray-900 px-9 font-medium text-gray-300">
        <img src={imgNotebook} alt="notebook" className="mr-2 w-6" />
        <span>1</span>
      </li>
      <li className="flex h-10 items-center px-9 font-medium text-gray-300">
        <img src={imgNotebook} alt="notebook" className="mr-2 w-6" />
        <span>2</span>
      </li>
      <li className="flex h-10 items-center px-9 font-medium text-gray-300">
        <img src={imgNotebook} alt="notebook" className="mr-2 w-6" />
        <span>3</span>
      </li>
    </ol>
  );
};

export default NavNotebooksList;
