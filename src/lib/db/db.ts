import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Define the database file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

// Define the data structure
interface Data {
  posts: { id: string; title: string; content: string }[];
}

// Configure the adapter
const adapter = new JSONFile<Data>(file)

// Create the database instance
const db = new Low<Data>(adapter, { posts: [] })

// Read data from the file
await db.read()

export default db
