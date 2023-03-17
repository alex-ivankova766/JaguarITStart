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
    console.log(list.value);

    if (list.next) {
        recursivePrintList(list.next);
    }
}

recursivePrintList(list);

function cyclePrintList(list) {
    let temp = list;

    while(temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

cyclePrintList(list);