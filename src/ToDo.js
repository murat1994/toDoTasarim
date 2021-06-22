import React from 'react';



function ToDo() {
    
  return (
    <div className="todoapp stack-large">
      <h1>Yapılacaklar Listesi</h1>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
         Ekle
        </button>
      </form>
       <br/>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
            Düzenle 
            </button>
            <button type="button" className="btn btn__danger">
              Sil 
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
            Düzenle 
            </button>
            <button type="button" className="btn btn__danger">
             Sil 
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Düzenle 
            </button>
            <button type="button" className="btn btn__danger">
              Sil 
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ToDo;