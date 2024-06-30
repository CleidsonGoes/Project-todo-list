
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'

function App() {
  return (
    <Routes>
      {/* É ideal colocar rotas especifica acima das outras, versões antigas podem requerer */}
      <Route path='/todo/add' element={<AddTodo/>} />
      <Route path='/todo' element={<TodoList/>}/>
      <Route path='/' element={<Login/>} />
      {/* caso vá para qualquer outra rota, a rota abaixo mandará para rota '/' */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
