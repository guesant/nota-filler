import { lazy } from 'react';
import { Steps } from '../interfaces/Steps';

const Tilibra13135GeneratorFormStepArtifacts = lazy(
  () => import('../Tilibra13135GeneratorFormStepArtifacts')
);
const Tilibra13135GeneratorFormStepEmitter = lazy(
  () => import('../Tilibra13135GeneratorFormStepEmitter')
);
const Tilibra13135GeneratorFormStepNotes = lazy(
  () => import('../Tilibra13135GeneratorFormStepNotes')
);
const Tilibra13135GeneratorFormStepNotesReview = lazy(
  () => import('../Tilibra13135GeneratorFormStepNotesReview')
);
const Tilibra13135GeneratorFormStepPaymentAddress = lazy(
  () => import('../Tilibra13135GeneratorFormStepPaymentAddress')
);
const Tilibra13135GeneratorFormStepReceiver = lazy(
  () => import('../Tilibra13135GeneratorFormStepReceiver')
);

export const StepsComponents = Object.entries({
  [Steps.EMITTER]: Tilibra13135GeneratorFormStepEmitter,
  [Steps.RECEIVER]: Tilibra13135GeneratorFormStepReceiver,
  [Steps.PAYMENT_ADDRESS]: Tilibra13135GeneratorFormStepPaymentAddress,
  [Steps.NOTES]: Tilibra13135GeneratorFormStepNotes,
  [Steps.NOTES_REVIEW]: Tilibra13135GeneratorFormStepNotesReview,
  [Steps.ARTIFACTS]: Tilibra13135GeneratorFormStepArtifacts,
}).map(([k, v]) => [Number(k) as Steps, v] as const);
