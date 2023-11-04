import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NewTeed from './pages/newTeed/NewTeed'
import Layout from './pages/layout/Layout'
import TeedsList from './pages/teedsList/TeedsList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'new-teed',
                element: <NewTeed />,
            },
            {
                path: 'teeds-list',
                element: <TeedsList />,
            },
            {
                path: 'settings',
                element: <NewTeed />,
            },
        ],
    },
])
function App() {
    return <RouterProvider router={router} />
}

export default App
