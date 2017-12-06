// mock data of preiodic measurements available
export const PERIODIC_READINGS_LIST: any = [
    { id: 1, name: 'ACTIVE ENERGY L1', unit: 'Wh * 100' },
    { id: 2, name: 'ACTIVE ENERGY L2', unit: 'Wh * 100' },
    { id: 3, name: 'ACTIVE ENERGY L3', unit: 'Wh * 100' },
    { id: 4, name: 'REACTIVE ENERGY L1', unit: 'VArh * 100' },
    { id: 5, name: 'REACTIVE ENERGY L2', unit: 'VArh * 100' },
    { id: 6, name: 'REACTIVE ENERGY L3', unit: 'VArh * 100' }
];

// mock data of real-time measurements available
export const REALTIME_READINGS_LIST: any = [
    { id: 1, name: 'PHASE VOLTAGE L1-N', unit: 'volt' },
    { id: 2, name: 'PHASE VOLTAGE L2-N', unit: 'volt' },
    { id: 3, name: 'PHASE VOLTAGE L3-N', unit: 'volt' },
    { id: 4, name: 'LINE VOLTAGE L3-1', unit: 'volt' },
    { id: 5, name: 'LINE VOLTAGE L3-2', unit: 'volt' },
    { id: 6, name: 'LINE VOLTAGE L3-3', unit: 'volt' },
    { id: 7, name: 'LINE CURRENT L1', unit: 'mA' },
    { id: 8, name: 'LINE CURRENT L2', unit: 'mA' },
    { id: 9, name: 'LINE CURRENT L3', unit: 'mA' }
];

// mock data for multiple measurements for overview UI
export const OVERVIEW_READINGS_LIST: any = [
    { id: 1, name: 'ACTIVE ENERGY L1', unit: 'Wh * 100' },
    { id: 2, name: 'ACTIVE ENERGY L2', unit: 'Wh * 100' },
    { id: 3, name: 'ACTIVE ENERGY L3', unit: 'Wh * 100' },
    { id: 1, name: 'PHASE VOLTAGE L1-N', unit: 'volt' },
    { id: 2, name: 'PHASE VOLTAGE L2-N', unit: 'volt' },
    { id: 3, name: 'PHASE VOLTAGE L3-N', unit: 'volt' },
];

// this function generates a random color used in graphs
export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// this function generates a random number between 0 to 250
export function randomScalingFactor() {
    return Math.round(Math.random() * 250);
};

// this function generates a random date based on start and end date parameters
export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// this function generates a random number between provided min and max
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This class represents a single reading
export class Reading {
    id: number;
    timestamp: Date;
    value: number;
    unit: string;
    typeId: number;
    typeName: string;

    constructor(id: number, timestamp: Date, typeId: number, typeName: string, value: number, unit: string) {
        this.id = id;
        this.timestamp = timestamp;
        this.typeId = typeId;
        this.typeName = typeName;
        this.value = value;
        this.unit = unit;
    }
}