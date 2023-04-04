interface pokemonModel{
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

export default pokemonModel;