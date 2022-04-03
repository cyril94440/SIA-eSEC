import { createAction } from '@reduxjs/toolkit'
import { DocumentMaterial, DocumentScore, DocumentScoreTarget, DocumentStandardCompliance, DocumentType } from '../types'

export const projectSetDocumentType = createAction<DocumentType>('projectSetDocumentType')
export const projectSetDocumentMaterial = createAction<DocumentMaterial>('projectSetDocumentMaterial')
export const projectSetDocumentScore = createAction<DocumentScore>('projectSetDocumentScore')
export const projectSetDocumentScoreTarget = createAction<DocumentScoreTarget>('projectSetDocumentScoreTarget')
export const projectSetDocumentStandardCompliance = createAction<DocumentStandardCompliance>('projectSetDocumentStandardCompliance')
