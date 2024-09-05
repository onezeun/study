import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LetterState {
  id: number;
  title: string;
  content: string;
}

interface LetterListState {
  letters: LetterState[];
  addLetter: (newLetter: { title: string; content: string }) => void;
  removeLetter: (id: number) => void; // removeLetter 추가
}

export const useLetterStore = create<LetterListState>()(
  devtools(
    (set) => ({
      letters: [],
      addLetter: ({ title, content }) =>
        set((state) => ({
          letters: [
            ...state.letters,
            {
              id: state.letters.length + 1,
              title,
              content,
            },
          ],
        })),
      removeLetter: (id: number) =>
        set((prev) => ({ letters: prev.letters.filter((e) => e.id !== id) })),
    }),
    { name: 'LetterStore' } // DevTools에서 스토어 이름을 지정
  )
);