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
    color: object,
    egg_groups: [],
    evolves_from_species: string,
    generation: object,
    hatch_counter: number,
    shape: object,
}

export default pokemonModel;