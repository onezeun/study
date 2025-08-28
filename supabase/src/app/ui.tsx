'use client';

import { createTodo, getTodos } from '@/actions/todo-actions';
import Todo from '@/components/todo';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos({ searchInput })
  });

  const createTodoMutation = useMutation({
    mutationFn: () =>
      createTodo({
        title: 'New Todo',
        completed: false
      }),
    onSuccess: () => {
      todosQuery.refetch();
    }
  });

  return (
    <div className="mx-auto mt-3 flex w-full flex-col items-center gap-2">
      <label className="input input-bordered flex w-full items-center gap-2">
        <input
          type="text"
          className="w-full"
          placeholder="Search TODO"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <FiSearch aria-hidden className="text-base" />
      </label>

      {todosQuery.isPending && <p>Loading...</p>}
      {todosQuery.data && todosQuery.data.map((todo) => <Todo key={todo.id} todo={todo} />)}

      {/* DaisyUI 버튼 + react-icons */}
      <button
        type="button"
        className="btn btn-neutral rounded-lg"
        onClick={() => createTodoMutation.mutate()}
      >
        {createTodoMutation.isPending ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <FiPlus className="mr-2 text-base" />
        )}
        ADD TODO
      </button>
    </div>
  );
}
