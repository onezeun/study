import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

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
    immer((set) => ({
      letters: [],
      addLetter: ({ title, content }) =>
        set((state) => {
          // 새로운 편지를 직접 추가하는 것처럼 작성
          // 원래 상태를 직접 수정하는 것처럼 보이지만, immer가 내부적으로 알아서 복사본을 만들어서 상태를 안전하게 변경
          state.letters.push({
            id: state.letters.length + 1,
            title,
            content,
          });
        }),
      removeLetter: (id: number) =>
        set((state) => ({ letters: state.letters.filter((e) => e.id !== id) })),
    })),
    { name: 'LetterStore' } // DevTools에서 스토어 이름을 지정
  )
);
