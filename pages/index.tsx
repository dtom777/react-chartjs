import BarPlot from '../components/BarPlot';
import BubblePlot from '../components/BubblePlot';
import LinePlot from '../components/LinePlot';
import PiePlot from '../components/PiePlot';
import RadarPlot from '../components/RadarPlot';

const index = () => {
  return (
    <>
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </>
  );
};

export default index;
