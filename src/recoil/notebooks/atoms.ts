import { atom } from 'recoil';

import { NOTEBOOKS_ATOM_KEY } from '@/constants/atomKey';

const notebooksAtom = atom({ key: NOTEBOOKS_ATOM_KEY, default: false });

export default notebooksAtom;
