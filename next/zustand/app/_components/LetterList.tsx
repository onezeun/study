'use client';

import { FormEvent, useState } from 'react';
import { useLetterStore } from '../_store/LetterStore';

const LetterForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { letters, addLetter, removeLetter } = useLetterStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && content) {
      addLetter({ title, content });
      setTitle('');
      setContent('');
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };

  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="mb-4 space-y-4">
        {letters.map((letter, index) => (
          <div key={index} className="relative rounded-lg bg-gray-100 p-4 shadow-md">
            <button
              onClick={() => removeLetter(letter.id)}
              className="absolute right-2 top-2 rounded-lg text-sm text-black transition duration-300 hover:text-red-600"
            >
              삭제
            </button>
            <strong className="block text-lg">제목: {letter.title}</strong>
            <p className="text-gray-700">내용: {letter.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          required
          className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
          required
          className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2 text-white transition duration-300 hover:bg-blue-600"
        >
          편지 추가
        </button>
      </form>
    </div>
  );
};

export default LetterForm;
