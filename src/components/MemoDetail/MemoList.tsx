const MemoList = () => {
  const mock = [
    {
      title: 'New Note111',
      preview: 'No additional text',
      createAt: 'Today, 9:53 PM',
      updatedAt: 'Today, 9:53 PM',
    },
    {
      title: 'New Note222',
      preview: 'No additional text',
      createAt: 'Today, 9:53 PM',
      updatedAt: 'Today, 9:53 PM',
    },
    {
      title: 'New Note333',
      preview: 'No additional text',
      createAt: 'Today, 9:53 PM',
      updatedAt: 'Today, 9:53 PM',
    },
  ];
  return (
    <section className="h-full w-64 border-r border-r-gray-950">
      <header className="border-b border-b-gray-950 bg-gray-800 px-4 py-[7px]">
        <h1 className="text-base font-medium text-gray-300">All Notes</h1>
      </header>
      <ol>
        {mock.map((memo, index) => (
          <li
            className={` flex flex-col gap-2 border-b border-b-gray-700 py-4 ${
              index === 0 ? 'bg-gray-900 px-4' : 'mx-4'
            }`}
          >
            <h2 className="text-sm font-medium text-gray-300">{memo.title}</h2>
            <p className="font-normal text-gray-400">{memo.preview}</p>
            <span className="text-xs text-gray-500">{memo.updatedAt}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default MemoList;
