type pokemonModel = {
    id: number;
    name: string;
    url: string;
    image?: string;
    height?: number;
    weight?: number;
    abilities?: JSX.Element[];
    experience?: string;

    /*constructor(id: number, name: string, url: string, image: string){
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image;
    }*/
}

export type pokemonDetailModel = {
    name: string,
    id: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    forms_switchable: boolean,
    base_happiness: number,
    capture_rate: number,
    color: {name: string, url:string},
    egg_groups: any[],
    evolves_from_species: {name: string, url: string},
    generation: {name: string, url: string},
    hatch_counter: number,
    shape: {name: string, url: string},
}

export default pokemonModel;