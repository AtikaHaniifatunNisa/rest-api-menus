import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'elearning',
  password: '1',
  port: 5433,
})

export const getAllMenus = async () => {
  const result = await pool.query('SELECT * FROM menus')
  return result.rows
}

export const getMenuById = async (id) => {
  const result = await pool.query('SELECT * FROM menus WHERE id=$1', [id])
  return result.rows[0]
}

export const createMenu = async (data) => {
  const { name, description, price } = data
  await pool.query(
    'INSERT INTO menus (name, description, price) VALUES ($1,$2,$3)',
    [name, description, price]
  )
}

export const updateMenu = async (id, data) => {
  const { name, description, price } = data
  await pool.query(
    'UPDATE menus SET name=$1, description=$2, price=$3 WHERE id=$4',
    [name, description, price, id]
  )
}

export const deleteMenu = async (id) => {
  await pool.query('DELETE FROM menus WHERE id=$1', [id])
}

pool.connect()
  .then(() => console.log('DB CONNECTED'))
  .catch(err => console.log('DB ERROR', err))