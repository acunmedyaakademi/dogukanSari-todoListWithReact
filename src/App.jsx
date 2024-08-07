import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <TodoForm />
        <Information />
      </div>
    </>
  )
}

function TodoForm() {
  return(
    <form className="todoForm" autocomplete="off">
      <input required type="text" name="todo" placeholder="Yeni Bir Görev Giriniz"/> <button type="submit" className="todoFormBtn"><img src="/images/plus.svg" alt="Artı"/></button>
    </form>
  )
}

function Information() {
  return(
    <div className="information">
      <p>Yapılacaklar Listesi - <span className="activeTodoCount">0</span></p>
      <ul className="tasksToDo"></ul>
    </div>
  )
}

export default App
