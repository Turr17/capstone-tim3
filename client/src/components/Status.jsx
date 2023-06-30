const StatusBar = ({ title, status }) => {
  const colorStatus = {
    'danger': 'bg-red-500 text-white',
    'warning': 'bg-yellow-500 text-gray-800',
    'success': 'bg-gray-300 text-gray-800',
  }
  
  return (
    <div className={`w-fit font-medium text-sm rounded px-3 py-1 ${colorStatus[status]}`}>{title}</div>
  )
}

export default StatusBar