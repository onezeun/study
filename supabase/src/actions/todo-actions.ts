'use server';

import { Database } from '@/types_db';
import { createServerSupabaseClient } from '@/utils/supabase/server';

export type TodoRow = Database['public']['Tables']['todo_table']['Row'];
export type TodoRowInsert = Database['public']['Tables']['todo_table']['Insert'];
export type TodoRowUpdate = Database['public']['Tables']['todo_table']['Update'];

function handleError(error) {
  console.error(error);
  throw new Error(error.message);
}

export async function getTodos({ searchInput = '' }): Promise<TodoRow[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('todo_table')
    .select('*')
    .like('title', `%${searchInput}%`)
    .order('created_at', { ascending: true }); // 오름차순

  if (error) {
    handleError(error);
    return [];
  }

  return data;
}

export async function createTodo(todo: TodoRowInsert) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('todo_table').insert({
    ...todo,
    created_at: new Date().toISOString()
  });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function updateTodo(todo: TodoRowUpdate) {
  if (typeof todo.id !== 'number') {
    throw new Error('updateTodo: id가 필요합니다.');
  }

  const supabase = await createServerSupabaseClient();
  console.log(todo);

  const { data, error } = await supabase
    .from('todo_table')
    .update({
      ...todo,
      updated_at: new Date().toISOString()
    })
    .eq('id', todo.id);

  if (error) {
    handleError(error);
  }

  return data;
}

export async function deleteTodo(id: number) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('todo_table').delete().eq('id', id);

  if (error) {
    handleError(error);
  }

  return data;
}
