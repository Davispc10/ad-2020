import mongoose from 'mongoose'

class Database {
  constructor () {
    this.conectDB()
  }

  private conectDB (): void {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  }
}

export default new Database()
