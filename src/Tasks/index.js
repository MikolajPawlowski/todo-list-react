import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item${task.done && hideDone
                    ? " list__item--hidden"
                    : ""}`
                }
            >
                <button className="list__button list__button--toggleDone">
                    {task.done ? "✓" : ""}
                </button>

                <span className={
                    `list__span${task.done ? " list__span--done" : ""}`
                }>
                    {task.content}
                </span>

                <button className="list__button list__button--remove">
                    🗑️
              </button>
            </li>
        ))}
    </ul>
);

export default Tasks;