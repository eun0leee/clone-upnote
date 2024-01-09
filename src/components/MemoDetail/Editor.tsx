import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';

const theme = {};

const onError = (error: Error) => {
  throw error;
};

const Editor = () => {
  const initialConfig = {
    namespace: 'MemoEditor',
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={
          <ContentEditable className="h-[calc(100vh-84px)] p-7 text-gray-300 focus:outline-none" />
        }
        placeholder={
          <div className="absolute left-7 top-7 font-medium text-gray-550">
            Type / for menu or select from Templates
          </div>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
};

export default Editor;
