'use client';

import { useState } from 'react';
import { FiCheck, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function Todo({}) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <div className="flex w-full items-center gap-1">
      <input
        type="checkbox"
        className="checkbox checkbox-neutral"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />

      {isEditing ? (
        <input
          className="flex-1 border-b border-b-black pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && 'line-through'}`}>{title}</p>
      )}

      {isEditing ? (
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="btn btn-ghost btn-circle"
          aria-label="완료"
          title="완료"
        >
          <FiCheck className="text-lg" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="btn btn-ghost btn-circle"
          aria-label="편집"
          title="편집"
        >
          <FiEdit2 className="text-lg" />
        </button>
      )}
      <button type="button" className="btn btn-ghost btn-circle" aria-label="삭제" title="삭제">
        <FiTrash2 className="text-lg" />
      </button>
    </div>
  );
}
