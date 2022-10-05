const users = [
  { id: 1, firstName: "Saraa", lastName: "Naraa" },
  { id: 2, firstName: "Orgil", lastName: "Tumur" },
];

exports.getUsers = (request, response) => {
  response.status(200).json({ users: users })
}

exports.createUser = (request, response) => {
  response.status(200).json({ users: users })
}``