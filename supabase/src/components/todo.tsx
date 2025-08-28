'use client';

import { deleteTodo, updateTodo } from '@/actions/todo-actions';
import { queryClient } from '@/config/ReactQueryClientProvider';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FiCheck, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);

  const updateTodoMutation = useMutation({
    mutationFn: () =>
      updateTodo({
        id: todo.id,
        title,
        completed
      }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ['todos']
      });
    }
  });

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos']
      });
    }
  });
  return (
    <div className="flex w-full items-center gap-1">
      <input
        type="checkbox"
        className="checkbox checkbox-neutral"
        checked={completed}
        onChange={async (e) => {
          await setCompleted(e.target.checked);
          await updateTodoMutation.mutate();
        }}
      />

      {isEditing ? (
        <input
          className="flex-1 border-b border-b-black pb-1 pl-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 pl-2 text-left ${completed && 'line-through'}`}>{title}</p>
      )}

      {isEditing ? (
        <button
          type="button"
          onClick={async () => await updateTodoMutation.mutate()}
          className="btn btn-ghost btn-circle"
          aria-label="완료"
          title="완료"
        >
          {updateTodoMutation.isPending ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <FiCheck className="text-lg" />
          )}
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
      <button
        type="button"
        className="btn btn-ghost btn-circle"
        aria-label="삭제"
        title="삭제"
        onClick={async () => await deleteTodoMutation.mutate()}
      >
        <FiTrash2 className="text-lg" />
      </button>
    </div>
  );
}
