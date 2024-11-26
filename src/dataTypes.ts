export interface DataTypes {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
  name: string;
  sys: {
    country: string;
  };
  clouds: {
    all: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
}
