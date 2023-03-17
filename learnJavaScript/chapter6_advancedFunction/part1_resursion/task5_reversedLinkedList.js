let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function recursivePrintList(list) {
    if (list.next) {
        recursivePrintList(list.next);
    }

    console.log(list.value);
}

recursivePrintList(list);

function cyclePrintList(list) {
    let result = [];
    let temp = list;

    while(temp) {
        result.push(temp.value);
        temp = temp.next;
    }
    return(result.reverse());
}

console.log(cyclePrintList(list));