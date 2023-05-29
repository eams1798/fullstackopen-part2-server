export interface ICountry {
    flags:      Flags;
    name:       Name;
    capital:    string[];
    languages:  { [key: string]: string };
    population: number;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}
