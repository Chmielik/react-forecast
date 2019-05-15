import { connect } from 'react-redux'
import DayForecast from './DayForecast'
import forecast from '../utils/forecast'

const Forecast = ({ coordinates }) => {
  const groupByDays = list => {
    return (list.reduce((group, item) => {
      const date = item.dt_txt.substr(0, 10)
      group[date] = group[date] || []
      group[date].push(item)

      return group
    }, {}))
  }
  const { list } = forecast
  const currentDay = new Date().getDay()
  const group = groupByDays(list)
  return <div>{Object.values(group).map((data, key) => <DayForecast key={key} data={data} currentDay={currentDay} groupDate={Object.keys(group)[key]} />)}
    <style jsx>
      {`
        div {
            width: 60%;
            margin: 0 auto;
        }
        @media screen and (max-width: 768px) {
            div {
                width: calc(100% - 30px);
                padding: 0 15px;
            }
        }
    `}
    </style>
  </div>
}

const mapStateToProps = ({ coordinates }) => ({
  coordinates
})

export default connect(mapStateToProps)(Forecast)
