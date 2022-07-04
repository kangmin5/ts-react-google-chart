import React from 'react'
import Chart from 'react-google-charts'

export const data = [
    ["년도", "매출", "비용", "이익"],
    ["2018", 1000, 400, 200],
    ["2019", 1170, 460, 250],
    ["2020", 660, 1120, 300],
    ["2021", 1030, 540, 350],
  ];

export const options = {
    chart: {
      title: "회사 성과표",
      subtitle: "매출, 비용, 이익: 2019-2021년도",
    },
  };

const Bar = () => {
  return (
    <div>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
      />
      <hr/>
    </div>
  )
}

export default Bar