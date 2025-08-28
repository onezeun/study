'use client';

import Todo from '@/components/todo';
import { FiSearch, FiPlus } from 'react-icons/fi';

export default function UI() {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-2 mt-3">
      <label className="input input-bordered flex w-full items-center gap-2">
        <input type="text" className="w-full" placeholder="Search TODO" />
        <FiSearch aria-hidden className="text-base" />
      </label>

      <Todo />

      {/* DaisyUI 버튼 + react-icons */}
      <button type="button" className="btn btn-neutral rounded-lg">
        <FiPlus className="mr-2 text-base" />
        ADD TODO
      </button>
    </div>
  );
}
