import { Collection, Db, MongoClient } from 'mongodb'
import { config } from 'dotenv'
import User from '~/models/schemas/User.schema'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import Follower from '~/models/schemas/Follow.schema'
import Label from '~/models/schemas/Label.schema'
import Overview from '~/models/schemas/Overview.chema'
import Post from '~/models/schemas/Post.schema'
config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@homeseek.b4dtbki.mongodb.net/?retryWrites=true&w=majority`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.dir(error)
      throw error
    }
  }
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_COLLECTION_USERS as string)
  }
  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection(process.env.DB_COLLECTION_REFRESH_TOKENS as string)
  }
  get followers(): Collection<Follower> {
    return this.db.collection(process.env.DB_COLLECTION_FOLLOWS as string)
  }
  get labels(): Collection<Label> {
    return this.db.collection(process.env.DB_COLLECTION_LABELS as string)
  }
  get overviews(): Collection<Overview> {
    return this.db.collection(process.env.DB_COLLECTION_OVERVIEWS as string)
  }
  get posts(): Collection<Post> {
    return this.db.collection(process.env.DB_COLLECTION_POSTS as string)
  }
}

// Tạo object từ class DatabaseService
const databaseService = new DatabaseService()
export default databaseService
