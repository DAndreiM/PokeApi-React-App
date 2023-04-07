type Berries = {
    id:number,
    name: string,
    url: string
}

export type berryDetail = {
    id: number,
    name: string,
    growth_time: number,
    max_harvest: number,
    natural_gift_power:number,
    size: number,
    smoothness: number,
    soil_dryness: number,
    firmness: {name:string, url:string},
    flavors: {potency: number, flavor:{name:string, url:string}}[],
    item: {name:string, url:string},
    natural_gift_type: {name:string, url:string},
}

export type berryFirmness = {
    results: {name:string, url:string}[]
}

export type berryFirmnessDetail = {
    id:number,
    name: string,
    berries: {name:string, url:string}[],
    names: {name:string, language: {name:string, url:string}}[];
}

export type berryFlavor = {
    results: {name:string, url:string}[];
}

export type berryFlavorsDetail = {
    id:number,
    name:string,
    berries: {potency: number, berry:{name:string, url:string}}[],
    contest_type: {name:string, url:string},
    names: {name:string, language:{name:string, url:string}}[]
}

export default Berries;