import { useStateContext } from '../context/StateProvider'

const ContextB: React.FC = () => {
  const { toggle } = useStateContext()
  return (
    <>
      <p>ContextB</p>
      <p className="mb-5 text-indigo-600" data-testid="toggle-b">
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}

export default ContextB