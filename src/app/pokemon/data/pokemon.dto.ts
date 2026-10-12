
export interface ResultadoRespostaHttp {
  name: string;
  url: string;
}

export interface objetoRespostaHttp {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultadoRespostaHttp[];
}

export interface TipoPokemonRespostaHttp {
  type: {
    name: string;
  };
}

export interface PokemonRespostaHttp {
  id: number;
  name: string;
  types: TipoPokemonRespostaHttp[];
  sprites: {
    front_default: string | null;
  };
}
