import styles from './page.module.css'
import { getTasks } from './crud/getTasks'
import { addTask } from './crud/addTask'
import { deleteTask } from './crud/deleteTask'
import { toggleTaskCompletion } from './crud/updateTask'

// TA LINIJKA NAPRAWIA BŁĄD BUDOWANIA
// Mówi Next.js: "Renderuj tę stronę dopiero jak serwer wstanie, a nie przy budowaniu"
export const dynamic = 'force-dynamic'

export default async function Home() {
  const tasks = await getTasks()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lista Zadań (Projekt)</h1>

      <form action={addTask} className={styles.form}>
        <input 
          type="text" 
          name="content" 
          placeholder="Co masz do zrobienia?" 
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Dodaj</button>
      </form>

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <form action={toggleTaskCompletion.bind(null, task.id, task.isCompleted)}>
                <button 
                  type="submit"
                  style={{ 
                    marginRight: '10px', 
                    cursor: 'pointer',
                    background: 'none',
                    border: '1px solid #ccc',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: task.isCompleted ? 'green' : 'black'
                  }}
                >
                  {task.isCompleted ? '✓' : ''}
                </button>
              </form>
              
              <span className={task.isCompleted ? styles.completed : ''}>
                {task.content}
              </span>
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