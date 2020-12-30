import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { ThongkeContext } from '../../context/Context'

export default class Statistic extends Component {
  render() {
    return (
      <ThongkeContext.Consumer>
        { ({ contextData }) => (
          <div>
            <Bar
              data={
                {
                  labels: Array.from(Array(12).keys()).map(n => `Tháng ${n + 1}`),
                  datasets: [
                    {
                      label: "Điểm TB",
                      backgroundColor: "rgba(255,99,132,0.2)",
                      borderColor: "rgba(255,99,132,1)",
                      borderWidth: 1,
                      hoverBackgroundColor: "rgba(255,99,132,0.4)",
                      hoverBorderColor: "rgba(255,99,132,1)",
                      data: [65, 59, 80, 81, 56, 55, 40, 56, 120, 14, 23],
                    },
                  ],
                }
              }
              width={1000}
              height={500}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        )
        }
      </ThongkeContext.Consumer>
    );
  }
}
