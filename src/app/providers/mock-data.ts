export const PERIODIC_READINGS_LIST: any = [
    { id: 1, name: 'ACTIVE ENERGY L1' },
    { id: 2, name: 'ACTIVE ENERGY L2' },
    { id: 3, name: 'ACTIVE ENERGY L3' },
    { id: 4, name: 'REACTIVE ENERGY L1' },
    { id: 5, name: 'REACTIVE ENERGY L2' },
    { id: 6, name: 'REACTIVE ENERGY L3' }
];

export const REALTIME_READINGS_LIST: any = [
    { id: 1, name: 'PHASE VOLTAGE L1-N' },
    { id: 2, name: 'PHASE VOLTAGE L2-N' },
    { id: 3, name: 'PHASE VOLTAGE L3-N' },
    { id: 4, name: 'LINE VOLTAGE L3-1' },
    { id: 5, name: 'LINE VOLTAGE L3-2' },
    { id: 6, name: 'LINE VOLTAGE L3-3' },
    { id: 7, name: 'LINE CURRENT L1' },
    { id: 8, name: 'LINE CURRENT L2' },
    { id: 9, name: 'LINE CURRENT L3' }
];

export function randomScalingFactor() {
    return Math.round(Math.random() * 100);
};

export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export class Reading {
    id: number;
    timestamp: Date;
    value: number;
    unit: string;

    constructor(id: number, timestamp: Date, value: number, unit: string) {
        this.id = id;
        this.timestamp = timestamp;
        this.value = value;
        this.unit = unit;
    }
}