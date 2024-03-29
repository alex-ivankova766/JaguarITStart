interface Rect {
    readonly id: string
    color?: string 
    size: {
        width: number
        heigth: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        heigth: 30
    },
    color: '#ccc'
};

const rect2: Rect = {
    id: '123456',
    size: {
        width: 4,
        heigth: 5
    } 
};

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=====

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '001',
    size: {
        width: 3,
        heigth: 7
    },
    getArea(): number {
        return this.size.width * this.size.heigth
    }
}

// ========= I - interface

interface ICLock {
    time: Date
    setTime(date: Date): void
}

class Clock implements ICLock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//=============

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'

}