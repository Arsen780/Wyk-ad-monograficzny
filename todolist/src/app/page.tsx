import styles from './page.module.css'
import { getTasks } from './crud/getTasks'
import { addTask } from './crud/addTask'
import { deleteTask } from './crud/deleteTask'
import { toggleTaskCompletion } from './crud/updateTask'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const tasks = await getTasks()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lista Zadań (Projekt)</h1>
      <form action={addTask} className={styles.form}>
        <input type="text" name="content" placeholder="Co masz do zrobienia? (Tytuł)" className={styles.input} required/>
        <textarea name="description" placeholder="Dodatkowy opis (opcjonalne)..." className={styles.textarea}/>
        <button type="submit" className={styles.button}>Dodaj Zadanie</button>
      </form>

      {tasks.length === 0 && (
        <div style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
          <p>Brak zadań. Dodaj coś nowego!</p>
        </div>
      )}

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <form action={toggleTaskCompletion.bind(null, task.id, task.isCompleted)}>
                <button 
                  type="submit" style={{ marginTop: '2px',marginRight: '15px', cursor: 'pointer',background: 'none',
                  border: task.isCompleted ? '1px solid green' : '1px solid #ccc',borderRadius: '50%',
                  width: '24px',height: '24px',display: 'flex',alignItems: 'center',justifyContent: 'center',
                  color: task.isCompleted ? 'green' : 'transparent',fontWeight: 'bold'}}>
                  ✓
                </button>
              </form>
              
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className={task.isCompleted ? styles.completed : ''} style={{ fontWeight: 'bold' }}>
                  {task.content}
                </span>

                {task.description && (
                  <span className={styles.description}>
                    {task.description}
                  </span>
                )}

                <span style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '5px' }}>
                  {new Date(task.createdAt).toLocaleDateString('pl-PL', {
                    day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                  })}
                </span>
              </div>
            </div>

            <form action={deleteTask.bind(null, task.id)}>
              <button type="submit" className={styles.deleteButton}>Usuń</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  )
}