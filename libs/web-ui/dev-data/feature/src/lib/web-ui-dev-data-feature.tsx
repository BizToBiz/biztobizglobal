import ReactJson from 'react-json-view'

export interface WebUiDevDataFeatureProps {
  data?: Record<string, unknown>
}

export function WebUiDevDataFeature(props: WebUiDevDataFeatureProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mt-12">
      <div className="px-4 py-5 sm:px-6">
        <h2>Raw Data (Developers Only)</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">{props.data ? <ReactJson src={props.data} collapsed={true} /> : null}</div>
    </div>
  )
}
