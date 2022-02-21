import { INotaFillerGenerator } from './INotaFillerGenerator';

export type INotaFillerGeneratorStatic<IPayload> =
  new () => INotaFillerGenerator<IPayload>;
