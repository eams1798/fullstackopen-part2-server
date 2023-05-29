export interface IWeather {
    request:  Request,
    location: Location,
    current:  Current,
}

export interface Current {
    observation_time:     string,
    temperature:          number,
    weather_code:         number,
    weather_icons:        string[],
    weather_descriptions: string[],
    wind_speed:           number,
    wind_degree:          number,
    wind_dir:             string,
    pressure:             number,
    precip:               number,
    humidity:             number,
    cloudcover:           number,
    feelslike:            number,
    uv_index:             number,
    visibility:           number,
    is_day:               string,
}

export interface Location {
    name:            string,
    country:         string,
    region:          string,
    lat:             string,
    lon:             string,
    timezone_id:     string,
    localtime:       string,
    localtime_epoch: number,
    utc_offset:      string,
}

export interface Request {
    type:     string,
    query:    string,
    language: string,
    unit:     string,
}

export const voidWeather: IWeather = {
    request:  {
        type:     '',
        query:    '',
        language: '',
        unit:     '',
    },
    location: {
        name:            '',
        country:         '',
        region:          '',
        lat:             '',
        lon:             '',
        timezone_id:     '',
        localtime:       '',
        localtime_epoch: 0,
        utc_offset:      '',
    },
    current: {
        observation_time:     '',
        temperature:          0,
        weather_code:         0,
        weather_icons:        [''],
        weather_descriptions: [''],
        wind_speed:           0,
        wind_degree:          0,
        wind_dir:             '',
        pressure:             0,
        precip:               0,
        humidity:             0,
        cloudcover:           0,
        feelslike:            0,
        uv_index:             0,
        visibility:           0,
        is_day:               '',
    }
}

export interface Current {
    observation_time:     string,
    temperature:          number,
    weather_code:         number,
    weather_icons:        string[],
    weather_descriptions: string[],
    wind_speed:           number,
    wind_degree:          number,
    wind_dir:             string,
    pressure:             number,
    precip:               number,
    humidity:             number,
    cloudcover:           number,
    feelslike:            number,
    uv_index:             number,
    visibility:           number,
    is_day:               string,
}

export interface Location {
    name:            string,
    country:         string,
    region:          string,
    lat:             string,
    lon:             string,
    timezone_id:     string,
    localtime:       string,
    localtime_epoch: number,
    utc_offset:      string,
}

export interface Request {
    type:     string,
    query:    string,
    language: string,
    unit:     string,
}
