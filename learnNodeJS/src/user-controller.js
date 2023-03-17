const users = [
    {id: 0001, name: "Denis"},
    {id: 0002, name: 'Ilya'}
];

const getUsers = (req, res) => {
    if(req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users);
}
const createUser = (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(user);
}

module.exports = {
    getUsers,
    createUser,
}