import { createAsyncThunk } from '@reduxjs/toolkit'
import { projectUpdateDocumentScore } from './projectUpdateDocumentScore'

export const projectLoad = createAsyncThunk<void, void>(
  'projectLoad',
  async (value, { dispatch }) => {
    dispatch(projectUpdateDocumentScore())
  }
)
