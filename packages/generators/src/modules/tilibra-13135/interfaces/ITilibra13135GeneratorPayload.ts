export type ITilibra13135GeneratorPayloadVersion = {
  nth?: string;
  value: number;
  dueDate: number | Date;
  emissionDate: number | Date | undefined;
};

export type ITilibra13135GeneratorPayload = {
  surface?: {
    // In pt
    width?: number;

    // In pt
    height?: number;
  };

  versions: ITilibra13135GeneratorPayloadVersion[];

  receiver: {
    id: string; // CPF/CNPJ
    name: string;
  };

  emitter: {
    id: string; // CPF/CNPJ
    name: string;
    address: string;
  };

  paymentAddress: string;
};
