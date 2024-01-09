import Editor from './Editor';

const MemoEditor = () => {
  return (
    <section className="w-full">
      <div className="h-10 w-full border-b border-b-gray-950 bg-gray-800 px-4 py-[7px]" />
      <div className="relative">
        <Editor />
      </div>
    </section>
  );
};

export default MemoEditor;
