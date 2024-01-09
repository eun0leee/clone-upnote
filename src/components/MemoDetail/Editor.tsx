/* eslint-disable no-underscore-dangle */
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { $getRoot, type EditorState } from 'lexical';
import { useParams } from 'react-router-dom';

import { typeMemo } from '@/storage/memo';

const theme = {};

const onError = (error: Error) => {
  throw error;
};

const Editor = () => {
  const { id } = useParams();
  const initialConfig = {
    namespace: 'MemoEditor',
    theme,
    onError,
  };

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      setTimeout(() => {
        if (root.__cachedText !== '') {
          typeMemo(root.__cachedText, Number(id));
        }
      }, 2000);
    });
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
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default Editor;
