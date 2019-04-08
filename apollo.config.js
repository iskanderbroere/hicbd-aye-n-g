module.exports = {
  client: {
    service: {
      name: 'nestjs',
      url: 'http://localhost:4000/api/graphql'
    },
    includes: ['./graphql/**/*.ts'],
    excludes: ['**/node_modules/**/*', '**/.nuxt/**/*']
  }
}
