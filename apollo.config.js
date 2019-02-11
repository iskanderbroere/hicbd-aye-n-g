module.exports = {
  client: {
    service: {
      name: 'nestjs',
      url: 'http://localhost:4000/graphql'
    },
    includes: ['./**/*.vue', './**/*.js'],
    excludes: ['**/node_modules/**/*', '**/.nuxt/**/*']
  }
}
