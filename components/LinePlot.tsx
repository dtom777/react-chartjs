import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Demo line plot',
      backgroundColor: '#008080',
      borderColor: '#7fffd4',
      pointBorderWidth: 10,
      data: [5, 7, 8, 4, 5, 6, 7],
    },
  ],
};

const LinePlot: React.FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LinePlot;
