const DayForecast = ({ data, groupDate, currentDay }) => {
  const humidity = data.map(item => item.clouds.all)
  const date = new Date(groupDate)
  const dayName = date.toDateString().split(' ')[0]
  const avgHumidity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length)
  const activeDay = date.getDay() === currentDay
  return (
    <div className="wrapper" style={activeDay ? { backgroundColor: '#c3c3c3' } : {}}>
      <div className="primary"><span>{dayName.toUpperCase()}</span></div>
      <div><span>Avg. Humidity: {avgHumidity}%</span></div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            align-items: center;
            min-height: 100px;
            background-color: #eaeaea;
          }

          .primary {
            width: 100px;
            text-align: center;
          }

          @media screen and (max-width: 768px) {
            .wrapper:not(:last-child) {
              margin-bottom: 3px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default DayForecast
