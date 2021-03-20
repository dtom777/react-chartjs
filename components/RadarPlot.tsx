import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['React', 'Vue', 'Angular'],
  datasets: [
    {
      label: 'Person A',
      backgroundColor: 'rgba(179, 181,198,0.2)',
      borderColor: '#008b8b',
      pointBackgroundColor: '#008b8b',
      pointBorderColor: '#fff',
      data: [100, 50, 30],
    },
    {
      label: 'Person B',
      backgroundColor: 'rgba(179, 181,198,0.2)',
      borderColor: '#ff1493',
      pointBackgroundColor: '#ff1493',
      pointBorderColor: '#fff',
      data: [10, 20, 100],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
