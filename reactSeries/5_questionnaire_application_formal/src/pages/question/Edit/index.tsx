import { useParams } from 'react-router-dom'

export const Edit = () => {
  const { id } = useParams()
  return <p>Edit - {id}</p>
}
