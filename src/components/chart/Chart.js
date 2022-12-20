import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dataPointValue=props.datapoints.map(datapoint=>datapoint.value)
    const totalMaximum = Math.max(...dataPointValue)
    return <div className="chart">
        {
            props.datapoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}/>)}
    </div>
};
export default Chart