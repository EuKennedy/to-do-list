import { useState } from 'react'

const todoform = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        if (!value || !category) return;
        e.preventDefault()
        // add todo
        // clean fields
        setValue("");
        setCategory("");

    }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título' onChange={(e) => setValue (e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="">Trabalho</option>
            <option value="">Pessoal</option>
            <option value="">Estudos</option>
        </select>
            <button type='submit'>Criar tarefas</button>
      </form>
    </div>
  )
}

export default todoform
