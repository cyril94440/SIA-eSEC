import { createAsyncThunk } from '@reduxjs/toolkit'
import * as actions from '@@actions'
import { DocumentStandardCompliance } from '@@types'
import { projectUpdateDocumentScore } from './projectUpdateDocumentScore'

export const projectChangeDocumentStandardCompliance = createAsyncThunk<void, DocumentStandardCompliance>(
  'projectChangeDocumentStandardCompliance',
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentStandardCompliance(value))
    dispatch(projectUpdateDocumentScore())
  }
)
