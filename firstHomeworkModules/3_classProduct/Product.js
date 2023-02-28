function filterProductBy(products, string) {
    let filterParametres = string.split("&");
    let conditions = {};
    let cond;
    let value;

    for (let parameter of filterParametres) {
        parameter = parameter.split("-");
        let field = parameter[0];

        if (field == "name" || field == "description") {
            cond = parameter[1];
            value = parameter[2];
            conditions[field] = {cond, value};

        } else if (field == "price" || field == "quantity") {
            if (parameter[1][1] != "=") {
                cond = parameter[1][0];
                value = parameter[1].slice(1);
            } else {
                cond = parameter[1][0] + parameter[1][1];
                value = parameter[1].slice(2);
            }
            conditions[field] = {cond, value: +value};
        }
    }

    for (let property in conditions) {
        products = products
        .filter(item => 
            item.FILTER_METHODS[conditions[property].cond]([conditions[property]["value"]], item[property]));
    }

    return products;    
}

class Product {
    constructor(name = "product", price = 0, quantity = 0, description = "about") {
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.description = description
    }

    FILTER_METHODS = {
        "contains": (str, property) => property.includes(str),
        "starts": (str, property) => property.startsWith(str),
        "ends": (str, property) => property.endsWith(str),
        ">": (num, property) => property > num,
        "<": (num, property) => property < num,
        "=": (num, property) => property == num,
        ">=": (num, property) => property >= num,
        "<=": (num, property) => property <= num,
    };
}

const PRODUCTS = [new Product("Cheese", 50, 10, "French cheese"), 
new Product("Wine", 200, 5, "French wine"), 
new Product("Beer", 100, 10, "American beer"),
new Product("Juice", 100, 30, "Orange juice")];

console.log(filterProductBy(PRODUCTS, "name-contains-i&description-ends-ce"));
console.log(filterProductBy(PRODUCTS, "name-ends-e&price->50-&quantity->=5&description-ends-e"));
console.log(filterProductBy(PRODUCTS, "name-starts-B&quantity-=5"));
console.log(filterProductBy(PRODUCTS, "name-starts-B&quantity->=5"));