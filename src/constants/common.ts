/* eslint-disable import/prefer-default-export */
import imgBookcase from '@/assets/img_bookcase.png';
import imgBulb from '@/assets/img_bulb.png';
import imgError from '@/assets/img_error.png';
import imgNotebook from '@/assets/img_notebook.png';

export const NO_RESULTS = [
  {
    pageName: 'AllNotes',
    imgUrl: imgBulb,
    imgAlt: 'bulb',
    guidePhrases: 'Have a thought to jot down? Tap on the button below',
    buttonWord: 'New Note',
  },
  {
    pageName: 'Notebooks',
    imgUrl: imgBookcase,
    imgAlt: 'bookcase',
    guidePhrases: 'You can organize notes of same topic into notebooks',
    buttonWord: 'Create New Notebook',
  },
  {
    pageName: 'NotebookDetail',
    imgUrl: imgNotebook,
    imgAlt: 'notebook',
    guidePhrases: 'Have a thought to jot down? Tap on the button below',
    buttonWord: 'New Note',
  },
  {
    pageName: 'NotFound',
    imgUrl: imgError,
    imgAlt: 'not found',
    guidePhrases: `Sorry we can't find the page you're looking for`,
    buttonWord: 'New Note',
  },
];
