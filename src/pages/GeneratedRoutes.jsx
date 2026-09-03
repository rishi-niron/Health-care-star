import { Route } from 'react-router-dom'

const modules = import.meta.glob('./generated/Page*.jsx', { eager: true })

const routes = Object.entries(modules).map(([path, mod]) => {
  const name = path.match(/Page(\d+)\.jsx$/)[1]
  return { path: `/generated/page${name}`, Component: mod.default }
})

function GeneratedRoutes() {
  return routes.map(({ path, Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ))
}

export default GeneratedRoutes
