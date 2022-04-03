import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import {
  DocumentMaterial,
  DocumentScore,
  DocumentScoreTarget,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType
} from '../types'

interface ProjectState {
  title: string
  documentSpecs: DocumentSpecs
  documentScore: DocumentScore | null
}

const initialState: ProjectState = {
  title: 'Test project',
  documentSpecs: {
    type: DocumentType.PASSPORT,
    material: DocumentMaterial.PAPER,
    standardCompliance: DocumentStandardCompliance.ICAO,
    scoreTarget: DocumentScoreTarget.SIA_RECO,
  },
  documentScore: null,
}

export const project = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.projectSetDocumentType, (state, action) => {
      state.documentSpecs.type = action.payload
    })
    .addCase(actions.projectSetDocumentMaterial, (state, action) => {
      state.documentSpecs.material = action.payload
    })
    .addCase(actions.projectSetDocumentScoreTarget, (state, action) => {
      state.documentSpecs.scoreTarget = action.payload
    })
    .addCase(actions.projectSetDocumentStandardCompliance, (state, action) => {
      state.documentSpecs.standardCompliance = action.payload
    })
    .addCase(actions.projectSetDocumentScore, (state, action) => {
      state.documentScore = action.payload
    })
})
