module.exports = {
  '.js, .jsx, .es6, .es': {
    parser: 'babylon',
    style: 'module-scoped',
  },
  '.ts, .tsx': {
    parser: 'typescript',
    style: 'module-scoped',
    options: {},
  },
}
