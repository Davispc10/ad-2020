/* eslint-disable no-unused-vars */
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { AiFillDelete, AiFillEdit, AiFillPlusCircle } from 'react-icons/ai'

import api from '../../services/api'
import './styles.css'

interface IPerson {
  _id: string,
  name: string,
  email: string,
  friend: string
}

const Home: React.FC = () => {
  const [people, setPeople] = useState<IPerson[]>([])

  const [newName, setNewName] = useState<string>('')
  const [newEmail, setNewEmail] = useState<string>('')
  const [updatePerson, setUpdatePerson] = useState<string>('')

  useEffect(() => {
    api.get('person').then(response => {
      setPeople(response.data)
    })
  }, [])

  function handleNewName (event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value

    setNewName(name)
  }

  function handleNewEmail (event: ChangeEvent<HTMLInputElement>) {
    const email = event.target.value

    setNewEmail(email)
  }

  async function handleSubmit (event: FormEvent) {
    event.preventDefault()

    if (!newName || !newEmail) {
      alert('Insira o nome e o email para salvar a pessoa!')
      return
    }

    const name = newName
    const email = newEmail

    const postData = {
      name,
      email
    }

    if (updatePerson) {
      const newPerson: IPerson = await (await api.put(`person/${updatePerson}`, postData)).data

      setPeople(people.map(person => {
        if (person._id === newPerson._id) {
          person.name = newPerson.name
          person.email = newPerson.email

          return person
        } else {
          return person
        }
      }))
    } else {
      const person: IPerson = await (await api.post('person', postData)).data

      setPeople([...people, person])
    }

    setNewName('')
    setNewEmail('')
    setUpdatePerson('')
  }

  async function handleDeletePerson (id: string) {
    await api.delete(`person/${id}`)

    setPeople(people.filter(person => person._id !== id))
  }

  async function handleUpdatePerson (id: string) {
    const person: IPerson = await (await api.get(`person/${id}`)).data

    setNewName(person.name)
    setNewEmail(person.email)
    setUpdatePerson(person._id)
  }

  async function handleRaffle () {
    await api.post('raffles')

    alert('Sorteio feito! Foi enviado um email para cada pessoa com seu amigo secreto!')
  }

  return (
    <div id="page-home">
      <div className="content">
        <header>
          <h1>Amigo Secreto</h1>
          <h2>Insira o nome dos amigos e seus e-mails, depois clique no botão sorteio para
            sortear os amigos secretos de cada um. (Um e-mail é enviado para cada amigo)</h2>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <div className="field-group">
              <div className="field">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleNewName}
                  value={newName}
                />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleNewEmail}
                  value={newEmail}
                />
              </div>
            </div>

            <button type="submit">
              <AiFillPlusCircle className="icon" color="#fff" size={38} />
            </button>
          </form>

          <ul className="list-people">
            {people.map(person => (
              <li key={person._id} className="list">
                <div>
                  <span>Nome: {person.name}</span>
                  <span>Email: {person.email}</span>
                </div>
                <div>
                  <button onClick={() => { handleUpdatePerson(person._id) }}>
                    <AiFillEdit className="edit-icon" color="#ffa500" size={32} />
                  </button>
                  <button onClick={() => { handleDeletePerson(person._id) }}>
                    <AiFillDelete className="delete-icon" color="#FF6B6B" size={32} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <footer>
            <button
              className="raffle-button"
              onClick={handleRaffle}
            >
              Sortear
            </button>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Home
