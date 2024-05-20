function TodoTask({content, status, completeTask}) {
    console.log('content', content)
    console.log('status', status)
  return (
    <div className="task">
      <p 
        className={`task-content ${status === true ? 'completed' : ''}`}>
        {content}
    </p>
      <button onClick={completeTask}
    //   className="task-btn"
    className={`task-btn ${status === true ? 'completed' : ''}`}
      >{status === true ? 'Done!' : 'Complete'}</button>
    </div>
  );
}

export default TodoTask;
