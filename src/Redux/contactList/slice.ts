import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/status'

type ContactState = {
  data: Contact[]
}

const initialState: ContactState = {
  data: [
    {
      name: 'Ana Silva',
      email: 'ana.silva@example.com',
      telephone: 123456789,
      favorite: enums.status.FAVORITE,
      id: 1,
    },
    {
      name: 'Carlos Souza',
      email: 'carlos.souza@example.com',
      telephone: 987654321,
      favorite: enums.status.NORMAL,
      id: 2,
    },
    {
      name: 'Mariana Lima',
      email: 'mariana.lima@example.com',
      telephone: 456789123,
      favorite: enums.status.FAVORITE,
      id: 3,
    },
    {
      name: 'Paulo Mendes',
      email: 'paulo.mendes@example.com',
      telephone: 321654987,
      favorite: enums.status.NORMAL,
      id: 4,
    },
    {
      name: 'Fernanda Alves',
      email: 'fernanda.alves@example.com',
      telephone: 789123456,
      favorite: enums.status.FAVORITE,
      id: 5,
    },
    {
      name: 'Lucas Pereira',
      email: 'lucas.pereira@example.com',
      telephone: 654987321,
      favorite: enums.status.NORMAL,
      id: 6,
    },
    {
      name: 'Juliana Costa',
      email: 'juliana.costa@example.com',
      telephone: 789456123,
      favorite: enums.status.FAVORITE,
      id: 7,
    },
    {
      name: 'Rafael Oliveira',
      email: 'rafael.oliveira@example.com',
      telephone: 321789654,
      favorite: enums.status.NORMAL,
      id: 8,
    },
    {
      name: 'jack',
      email: 'daymonblackGamer@gmail.com',
      telephone: 35998726945,
      favorite: enums.status.FAVORITE,
      id: 9,
    },
  ],
}

const contactListSlice = createSlice({
  name: 'ContactList',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.data = [
        ...state.data.filter(contact => contact.id !== action.payload),
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.data.findIndex(
        contact => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.data[contactIndex] = action.payload
      }
    },
  },
})

export default contactListSlice.reducer
export const { remove, edit } = contactListSlice.actions
